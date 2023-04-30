from flask import Flask, send_from_directory
from app.routes import register_routes
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__, static_folder='../build', static_url_path='/react')

    CORS(app, resources={r"/*": {"origins": "*"}})

    app.config.from_object("config")

    register_routes(app)

    return app