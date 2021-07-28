from .db import db

class Race(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    raceName = db.Column(db.String(30))
    raceDescription = db.Column(db.String(255))

    def to_dict(self):
        return {
        'raceName': self.raceName,
        'raceDescription': self.raceDescription
        }