from app.app import create_app
from config import init_db
from app.scheduler import start_scheduler
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize the Flask app and the database
app = create_app()
init_db()

# Start the scraping and monitoring scheduler
start_scheduler()

# Run the Flask app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port)