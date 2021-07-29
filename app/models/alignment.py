from .db import db

class Alignment(db.Model):
    __tablename__ = 'alignments'

    id = db.Column(db.Integer, primary_key=True)
    alignmentName = db.Column(db.String(40), nullable=False)
    alignmentDescription = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'alignmentName': self.alignmentName,
        'alignmentDescription': self.alignmentDescription
        }