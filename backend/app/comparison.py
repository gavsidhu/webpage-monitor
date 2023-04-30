import hashlib
from app.database import get_all_webpages, update_webpage_hash
from app.scraper import scrape_website
from app.emailer import send_change_email

def create_hash(content):
    hash_object = hashlib.sha256(content.encode())
    hash_value = hash_object.hexdigest()
    return hash_value

def compare_hash(original_hash, new_hash):

    return original_hash == new_hash

def check_for_changes():
    print("Checking for changes...")
    webpages = get_all_webpages()
    for webpage in webpages:
        content = scrape_website(webpage.url)
        new_hash = create_hash(content)

        changed = compare_hash(webpage.content_hash, new_hash)
        if changed == False:
            # Send email
            send_change_email(webpage.email, webpage.url)
            # add new hash to db
            update_webpage_hash(webpage.id, new_hash)




