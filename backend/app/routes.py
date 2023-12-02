from app import app, mongo
from flask import render_template, request, jsonify, make_response


@app.route("/", methods=["GET"])
def server_intro():
    return "This is MyPackage API"


@app.route("/fetch-gmail-data", methods=["GET"])
def fetch_gmail_data():
    # Implement Gmail API integration here
    # This requires authentication and proper API calls.
    # Return the Gmail data as JSON.
    return ({"data": "Your Gmail data here"})

@app.route("/users", methods=["POST", "GET"])
def user_data():
    if request.method == "POST":
        body = request.get_json()
        required_params = ["email", "displayName", "uid", "token"]
        if not all(param in body for param in required_params):
            return make_response("Bad parameters. Required parameters are: email, displayName, uid, token", 400)
        users_collection = mongo.db.users

        # Check if the user already exists using the email
        existing_user = users_collection.find_one({"email": body["email"]})
        if existing_user:
            return make_response("User with this email already exists", 400)
        
        # Insert the new user into the 'users' collection
        users_collection.insert_one(body)

        return make_response("User added successfully", 200)  # 201 indicates resource creation success
    if request.method == "GET":
        return make_response("GET request handled", 200)

