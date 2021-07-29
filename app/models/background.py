from .db import db

class Background(db.Model):
    __tablename__ = 'backgrounds'

    id = db.Column(db.Integer, primary_key=True)
    backgroundName = db.Column(db.String(30), nullable=False)
    backgroundDescription = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'backgroundName': self.backgroundName,
        'backgroundDescription': self.backgroundDescription
        }