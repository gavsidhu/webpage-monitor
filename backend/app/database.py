from config import SessionLocal, Base
from app.models import Webpages

def add_webpage(url, email, content_hash):
    session = SessionLocal()
    webpage = Webpages(url=url, email=email, content_hash=content_hash)
    session.add(webpage)
    session.commit()
    session.refresh(webpage)
    session.close()
    return webpage.id

def get_all_webpages():
    session = SessionLocal()
    webpages = session.query(Webpages).all()
    session.close()
    return webpages

def update_webpage_hash(id, new_hash):
    session = SessionLocal()
    webpage = session.query(Webpages).filter(Webpages.id == id).first()
    if webpage:
        webpage.content_hash = new_hash
        session.commit()
    session.close()