from .db import db

class Race(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    raceName = db.Column(db.String(30), nullable=False)
    raceDescription = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'raceName': self.raceName,
        'raceDescription': self.raceDescription
        }