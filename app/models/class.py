from .db import db

class Class(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    className = db.Column(db.String(30), nullable=False)
    classDescription = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'className': self.className,
        'classDescription': self.classDescription
        }