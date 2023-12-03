from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel


app = FastAPI()


# CORS middleware configuration
# origins = ["http://localhost", "http://localhost:3000", "https://mypackage.redsols.us/"]  

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


@app.get("/fetch-gmail-data")
def fetch_gmail_data():
    # Implement Gmail API integration here
    # This requires authentication and proper API calls.
    # Return the Gmail data as JSON.
    data = [
        {
            "_id": "1213123",
            "company_name": "Apple",
            "status": "Out for delivery",
            "last_location": "Secaucus, NJ, 07310",
            "last_modified": "",
            "tracking_number": "",
            "image": "",
            "carrier": "FedEx",
            "tracking_link": "",
        },
        {
            "_id": "1213123",
            "company_name": "Amazon",
            "status": "Shipped",
            "last_location": "San Francisco, CA, 94102",
            "last_modified": "",
            "tracking_number": "",
            "image": "",
            "carrier": "UPS",
            "tracking_link": "",
        },
    ]
    return data


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
        raise HTTPException(status_code=422, detail="Missing required parameters in the request")

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
