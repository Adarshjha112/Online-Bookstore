from app import db

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    cover_image = db.Column(db.String(255))
    price = db.Column(db.Float, nullable=False)
    ratings = db.Column(db.Float)
