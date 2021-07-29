from .db import db

class Race(db.Model):
    __tablename__ = 'races'

    id = db.Column(db.Integer, primary_key=True)
    raceName = db.Column(db.String(50), nullable=False)
    raceDescription = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'raceName': self.raceName,
        'raceDescription': self.raceDescription
        }