from .db import db

class Class(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    className = db.Column(db.String(30))
    classDescription = db.Column(db.String(255))

    def to_dict(self):
        return {
        'className': self.className,
        'classDescription': self.classDescription
        }