from .db import db

class Background(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    backgroundName = db.Column(db.String(30))
    backgroundDescription = db.Column(db.String(255))

    def to_dict(self):
        return {
        'backgroundName': self.backgroundName,
        'backgroundDescription': self.backgroundDescription
        }