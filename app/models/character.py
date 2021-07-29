from sqlalchemy.orm import relationship
from .db import db
# this needs  a join table related to the charcter and the user

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    #! bug is on the line above here, not registering as a serial key 
    userId = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    classId = db.Column(db.Integer, db.ForeignKey('charclasses.id'), nullable=False, primary_key=True)
    raceId = db.Column(db.Integer, db.ForeignKey('races.id'), nullable=False, primary_key=True)
    alignmentId = db.Column(db.Integer, db.ForeignKey('alignments.id'), nullable=False, primary_key=True)
    backgroundId = db.Column(db.Integer, db.ForeignKey('backgrounds.id'), nullable=False, primary_key=True)
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