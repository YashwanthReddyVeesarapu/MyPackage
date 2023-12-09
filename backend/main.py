from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
import re
from typing import Dict, List
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, BackgroundTasks, Depends, Header
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
import requests
import base64
from bson import ObjectId
from datetime import datetime, timedelta


app = FastAPI()

running = []


# CORS middleware configuration
origins = ["http://localhost", "http://localhost:3000", "https://mypackage.redsols.us"]

# Define the OAuth2 scheme for Bearer tokens
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


remote_mongodb_uri = "mongodb+srv://yash:1234@mypackagecluster.0vtwzrh.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(remote_mongodb_uri)
db = client["MyPackage"]
usersCollection = db["users"]
itemsCollection = db["items"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_message_content(message_id, email, token):
    api_url = (
        f"https://gmail.googleapis.com/gmail/v1/users/{email}/messages/{message_id}"
    )
    headers = {"Authorization": f"Bearer {token}"}

    result = requests.get(api_url, headers=headers)
    return result.json()


def get_message_body(message):
    if "parts" in message["payload"]:
        # If the message has parts, look for the one with the 'text/plain' MIME type
        for part in message["payload"]["parts"]:
            if part["mimeType"] == "text/plain":
                body_data = part["body"]["data"]
                # Decode the base64-encoded body data
                body_text = base64.urlsafe_b64decode(body_data).decode("utf-8")
                return body_text
    else:
        body_data = message["payload"]["body"]["data"]

        # Decode the base64-encoded data
        decoded_data = base64.urlsafe_b64decode(body_data.encode("UTF-8"))

        # Convert the bytes to a string
        message_body = decoded_data.decode("UTF-8")

        return message_body
    return None


def has_tracking_info(message: dict) -> bool:
    # Extract text content from the email message
    email_text = message

    # Define patterns that indicate tracking information
    tracking_patterns = [
        r"\btrack\b",
        r"\btracking\b",
        r"\btracking number\b",
        r"\btracking info\b",
        # Add more patterns as needed
    ]

    # Check if any of the patterns match the email text
    for pattern in tracking_patterns:
        if re.search(pattern, email_text, re.IGNORECASE):
            return True

    return False


def classify_messages(messages: List[Dict]) -> List[Dict]:
    classified_messages = []

    for message in messages:
        # if "SENT" not in message["labelIds"]:
            try:
                message_body = get_message_body(message)
                # Placeholder for a hypothetical machine learning model
                has_tracking = has_tracking_info(message_body)

                if has_tracking:
                    classified_messages.append(message)
            except Exception as e:
                print(e)
                continue
    return classified_messages


def process_and_store_packages(UserId: str, classified_messages: List[dict]):
    processed_packages = []
    for message in classified_messages:
        # Extract relevant information and create your Package schema
        try:
            package_data = extract_package_data(message)

            # Store the package data in your database
            store_package_data(UserId, package_data)

            for pkg in processed_packages:
                if pkg["tracking_number"] == package_data["tracking_number"]:
                    raise Exception("Duplicate tracking found")
            processed_packages.append(package_data)
        except Exception as e:
            print(e)
            continue
    return processed_packages


def get_sender(message_obj):
    for header in message_obj["payload"]["headers"]:
        if header["name"] == "From":
            # Extract and return the email address from the "From" field
            return header["value"].split("<")[-1].rstrip(">")


def get_recipient(message_obj):
    for header in message_obj["payload"]["headers"]:
        if header["name"] == "To":
            # Extract and return the email address from the "To" field
            return header["value"].split("<")[-1].rstrip(">")


def extract_package_data(message: dict):
    message_body = get_message_body(message)

    sender = get_sender(message)
    lpt = sender.split('@',1)
    subdomains = lpt[-1].split('.')
    # Extract the top-level domain (TLD)
    tld = subdomains[-2]
    sender = tld.upper()
    recipient = get_recipient(message)

    tracking_patterns = [
        r"\btracknum=(\w+)\b",
        r"\btrknbr=(\w+)\b",
        r"\btrackingnumber=(\w+)\b",
        r"\btracknumbers=(\w+)\b",
        r"\btracking_numbers=(\w+)\b",
        # Add more patterns as needed
    ]

    tracking_number = None
    # Check if any of the patterns match the email text
    for index, pattern in enumerate(tracking_patterns):
        match = re.search(pattern, message_body, re.IGNORECASE)
        if match:
            tracking_number = (message_body[match.start() : match.end()]).split("=")[1]
            break

    carrier_patterns = [
        r"\bUPS\b",
        r"\bUSPS\b",
        r"\bFedex\b",
        # Add more patterns as needed
    ]
    carrier_name = None
    # Check if any of the patterns match the email text
    for index, pattern in enumerate(carrier_patterns):
        match = re.search(pattern, message_body, re.IGNORECASE)
        if match:
            carrier_name = (message_body[match.start() : match.end()]).lower()
            break

    status_patterns = [
        r"\bdelivered\b",
        r"\btransit\b",
        r"\barriving\b",
        r"\bdelivery\b",
        # Add more patterns as needed
    ]
    status = None
    # Check if any of the patterns match the email text
    for index, pattern in enumerate(status_patterns):
        match = re.search(pattern, message_body, re.IGNORECASE)
        if match:
            status = (
                "Delivered"
                if index == 0
                else "In Transit"
                if index == 1 or index == 3
                else "Out for delivery"
                if index == 2
                else "Waiting for details"
            )
            break

    # Extract relevant information from the classified message
    # call the respective api to get the data
    tracking_link = None
    image = ""
    if carrier_name == "ups":
        tracking_link = f"https://www.ups.com/track?loc=en_US&tracknum={tracking_number}"
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/640px-United_Parcel_Service_logo_2014.svg.png"
    if carrier_name == "fedex":
        tracking_link = f"https://www.fedex.com/fedextrack/?action=track&trackingnumber={tracking_number}"
        image = "https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png"
    if carrier_name == "usps":
        tracking_link = f"https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1={tracking_number}"
        image = "data:image/png;base64,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"
    # Return the data in your Package schema format
    package_data = {
        "_id": tracking_number,
        "company_name": sender,
        "status": status if status else "",
        "last_location": "",
        "last_modified": "",
        "tracking_number": tracking_number if tracking_number else "",
        "image": image if image else "",
        "carrier": carrier_name if carrier_name else "",
        "messageId": message["id"],
        "internalDate": message["internalDate"],
        "tracking_link": tracking_link
        if tracking_link
        else "",  # You can extract this if needed
    }
    if package_data["tracking_number"]: return package_data
    else: raise Exception("No tracking number")


def store_package_data(UserId: str, package_data: dict):
    # Implement the logic to store the package data in your database
    return package_data


def process_emails(message_ids, email, token):
        # Fetch the content of each message
    messages = [
        get_message_content(message_id, email, token) for message_id in message_ids
    ]
    # Classify messages using your machine learning model
    classified_messages = classify_messages(messages)

    # Process and store the classified messages
    processed_packages = process_and_store_packages(email, classified_messages)

    #check existing_email
    unique_email_identifier = itemsCollection.find_one({"_id": email})

    running.remove(email)

    if unique_email_identifier == None:
        final_obj = {"_id": email, "items": processed_packages, "last_modified": datetime.now()}
        insertInfo = itemsCollection.insert_one(final_obj)
    else:
        #avoid duplicate message Ids  
        updateInfo = itemsCollection.update_one({"_id": email},{"$set": { "last_modified": datetime.now()}, "$push": {"items": {"$each": processed_packages}}})
    return processed_packages


@app.get("/fetch-gmail-data")
def fetch_gmail_data(
    tasks: BackgroundTasks,
    token: str = Depends(oauth2_scheme),
    email: str = Header(..., description="User ID for Gmail API"),
):
    


        # Calculate the date 15 days ago from today
    start_date = (datetime.utcnow() - timedelta(days=15)).strftime('%Y/%m/%d')
    # Construct the query parameter for messages after the start date
    query_param = f"in:inbox after:{start_date}"

    # Implement Gmail API integration here
    # This requires authentication and proper API calls.
    # Return the Gmail data as JSON.
    # api_url = f"https://gmail.googleapis.com/gmail/v1/users/{UserId}/messages"
    api_url = f"https://gmail.googleapis.com/gmail/v1/users/{email}/messages?maxResults=500&q={query_param}"
    headers = {"Authorization": f"Bearer {token}"}

        # call the api_url
    result = requests.get(api_url, headers=headers)

    if result.status_code == 401:
        raise HTTPException(status_code=401, detail="Token expired")

    # Check for errors in the initial call
    result.raise_for_status()

    messages = result.json()
    # Get the list of message IDs
    message_ids = [message["id"] for message in messages.get("messages", [])]
    
    messageDetail = "Base call made"
    
    unique_email_identifier = itemsCollection.find_one({"_id": email})

    if unique_email_identifier == None:
        running.append(email)
        messageDetail= "First ever call made"
        tasks.add_task(process_emails,message_ids=message_ids, email=email, token=token)
        return JSONResponse(status_code=202,content={"message":messageDetail})
    elif email in running:
        messageDetail = "Processing in Background, Waiting..."
        return JSONResponse(status_code=202, content=messageDetail)
    else:
        lm = unique_email_identifier["last_modified"]
        time_difference = datetime.now() - lm
        status_code=200
        if time_difference > timedelta(minutes=5):
            status_code=201
            c_start_date = (lm - timedelta(days=1)).strftime('%Y/%m/%d')
            c_query_param = f"in:inbox after:{c_start_date}"
            c_api_url = f"https://gmail.googleapis.com/gmail/v1/users/{email}/messages?maxResults=500&q={c_query_param}"
            headers = {"Authorization": f"Bearer {token}"}
            result = requests.get(c_api_url, headers=headers)
            c_messages = result.json()
            c_message_ids = [message["id"] for message in c_messages.get("messages", [])]
            tasks.add_task(process_emails,message_ids=c_message_ids, email=email, token=token)
            running.append(email)
            # updateInfo = itemsCollection.update_one({"_id": email}, {"$set": {"status": "processing"}})
        return JSONResponse (status_code=status_code,content= {"items": unique_email_identifier["items"]})




def check_existing_user(email):
    user = usersCollection.find_one({email: email})
    if user:
        return user
    return False


class User(BaseModel):
    email: str
    displayName: str = None
    token: str
    uid: str





# Uncomment and modify as needed
@app.post("/users")
def create_user(user: User):
    if not user.email or not user.token or not user.uid:
        raise HTTPException(
            status_code=422, detail="Missing required parameters in the request"
        )

    if check_existing_user(user.email):
        raise HTTPException(status_code=400, detail="User already in DB")

    # Convert the Pydantic model to a dictionary
    user_data = user.model_dump()

    # Insert the user into the database
    result = usersCollection.insert_one(user_data)

    if result.inserted_id:
        return {"message": "User created successfully"}

    raise HTTPException(status_code=500, detail="Server Error")

    # Implement user creation logic here


# Uncomment and modify as needed
@app.get("/users")
def get_users():
    usersData = list(usersCollection.find({}))
    # Implement logic to get users
    return usersData


# Other routes can be added as needed
