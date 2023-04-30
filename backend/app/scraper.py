import requests
from bs4 import BeautifulSoup

def scrape_website(url: str):
    result = requests.get(url)

    doc = BeautifulSoup(result.content, "html.parser")

    return doc.prettify()