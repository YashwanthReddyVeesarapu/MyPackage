from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
import re
from typing import Dict, List
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends, HTTPException, Header, status
from fastapi.security import OAuth2PasswordBearer
import requests
import base64
from bson import ObjectId

app = FastAPI()


# CORS middleware configuration
# origins = ["http://localhost", "http://localhost:3000", "https://mypackage.redsols.us/"]

# Define the OAuth2 scheme for Bearer tokens
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = ["*"]

remote_mongodb_uri = "mongodb+srv://yash:1234@mypackagecluster.0vtwzrh.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(remote_mongodb_uri)
db = client["MyPackage"]
usersCollection = db["users"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_message_content(message_id, UserId, token):
    api_url = (
        f"https://gmail.googleapis.com/gmail/v1/users/{UserId}/messages/{message_id}"
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
        if "SENT" not in message["labelIds"]:
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
    if carrier_name == "ups":
        tracking_link = f"https://www.ups.com/track?loc=en_US&tracknum={tracking_number}"
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/640px-United_Parcel_Service_logo_2014.svg.png"
    if carrier_name == "fedex":
        tracking_link = f"https://www.fedex.com/fedextrack/?action=track&trackingnumber={tracking_number}"
        image = "https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png"
    # Return the data in your Package schema format
    package_data = {
        "_id": tracking_number,
        "company_name": sender,
        "status": status if status else "--",
        "last_location": "--",
        "last_modified": "--",
        "tracking_number": tracking_number if tracking_number else "--",
        "image": image if image else "",
        "carrier": carrier_name if carrier_name else "--",
        "tracking_link": tracking_link
        if tracking_link
        else "--",  # You can extract this if needed
    }
    return package_data


def store_package_data(UserId: str, package_data: dict):
    # Implement the logic to store the package data in your database
    return package_data


@app.get("/fetch-gmail-data")
def fetch_gmail_data(
    token: str = Depends(oauth2_scheme),
    UserId: str = Header(..., description="User ID for Gmail API"),
):
    # Implement Gmail API integration here
    # This requires authentication and proper API calls.
    # Return the Gmail data as JSON.
    api_url = f"https://gmail.googleapis.com/gmail/v1/users/{UserId}/messages"

    headers = {"Authorization": f"Bearer {token}"}

    # call the api_url
    result = requests.get(api_url, headers=headers)
    # Check for errors in the initial call
    result.raise_for_status()

    # Get the list of message IDs
    message_ids = [message["id"] for message in result.json().get("messages", [])]

    # Fetch the content of each message
    messages = [
        get_message_content(message_id, UserId, token) for message_id in message_ids
    ]
    # Classify messages using your machine learning model
    classified_messages = classify_messages(messages)

    # Process and store the classified messages
    processed_packages = process_and_store_packages(UserId, classified_messages)

    return processed_packages


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
