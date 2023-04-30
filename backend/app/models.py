import datetime
import sqlalchemy as _sql
import config as _database

class Webpages(_database.Base):
    __tablename__ = "webpages"
    id = _sql.Column(_sql.Integer, primary_key=True)
    url = _sql.Column(_sql.String, index=True)
    email = _sql.Column(_sql.String, index=True)
    content_hash = _sql.Column(_sql.String, index=True)
    time_created = _sql.Column(_sql.DateTime(timezone=True), default=datetime.datetime.utcnow)
    time_updated = _sql.Column(_sql.DateTime(timezone=True), onupdate=datetime.datetime.utcnow)