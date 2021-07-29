from .db import db
# this needs  a join table related to the campaign and the user

class Campaign(db.Model):
    __tablename__ = 'campaign'

    id = db.Column(db.Integer, primary_key=True)
    hostId = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(50), nullable=False)
    coverImage = db.Column(db.String(255), nullable=False)
    story = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
        'id': self.id,
        'hostId': self.hostId,
        'title': self.title,
        'coverImage': self.coverImage,
        'story': self.story
        }