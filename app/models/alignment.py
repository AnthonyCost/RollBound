from .db import db

class Alignment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    alignmentName = db.Column(db.String(40))
    alignmentDescription = db.Column(db.String(255))

    def to_dict(self):
        return {
        'alignmentName': self.alignmentName,
        'alignmentDescription': self.alignmentDescription
        }