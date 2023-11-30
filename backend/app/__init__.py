
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo


app = Flask(__name__)

app.config['MONGO_URI'] = "mongodb+srv://yash:1234@mypackagecluster.0vtwzrh.mongodb.net/"

mongo = PyMongo(app)


from app import routes



