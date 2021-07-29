from sqlalchemy.orm import relationship
from .db import db
# this needs  a join table related to the charcter and the user

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    classId = db.Column(db.Integer, db.ForeignKey('charclasses.id'), nullable=False)
    raceId = db.Column(db.Integer, db.ForeignKey('races.id'), nullable=False)
    alignmentId = db.Column(db.Integer, db.ForeignKey('alignments.id'), nullable=False)
    backgroundId = db.Column(db.Integer, db.ForeignKey('backgrounds.id'), nullable=False)
    portraitImage = db.Column(db.String(255), nullable=False)
    backstory = db.Column(db.Text, nullable=False)

    classModel = relationship("CharClass", lazy="joined", innerjoin=True)
    race = relationship("Race", lazy="joined", innerjoin=True)
    alignment = relationship("Alignment", lazy="joined", innerjoin=True)
    background = relationship("Background", lazy="joined", innerjoin=True)

    def to_dict(self):
        return {
        'id': self.id,
        'userId': self.userId,
        'name': self.name,
        'level': self.level,
        'class': self.classModel.to_dict(),
        'race': self.race.to_dict(),
        'alignment': self.alignment.to_dict(),
        'background': self.background.to_dict(),
        'portraitImage': self.portraitImage,
        'backstory': self.backstory
        }