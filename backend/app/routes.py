from app.database import add_webpage
from flask import render_template, request, send_from_directory
from app.database import add_webpage
from app.scraper import scrape_website
from app.comparison import create_hash
import os


def register_routes(app):
        
    @app.route("/add-webpage", methods=["POST"])
    def add_webpage_to_track():
        try:

            data = request.json
            url = data["url"]
            email = data["email"]

            content = scrape_website(url)
            hash = create_hash(content)
            id = add_webpage(url, email, hash)

            return "Successfully added webpage"
        except Exception as e:
            return f"There was an error: {e}"
