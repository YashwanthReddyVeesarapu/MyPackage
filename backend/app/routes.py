from app import app, mongo
from flask import render_template, request, jsonify



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
    #    email = body.email
    #    displayName = body.displayName
    #    uid = body.uid
    #    token = body.token

    #    user = mongo.db.users.findOne({email: email})
       return request.method