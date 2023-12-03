from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware configuration
origins = ["http://localhost", "http://localhost:3000"]  # Add your frontend URLs here

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


# Uncomment and modify as needed
# @app.post("/users")
# def create_user():
#     # Implement user creation logic here
#     return {"message": "User created successfully"}

# Uncomment and modify as needed
# @app.get("/users")
# def get_users():
#     # Implement logic to get users
#     return {"message": "GET request handled"}

# Other routes can be added as needed
