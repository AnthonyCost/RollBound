from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange
from app.models import Character


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class CreateCharacterForm(FlaskForm):
    name = StringField('name', validators=[DataRequired("Name your character"), Length(max=50, message="Your character's name is too long. (Max is 50 characters)")])
    level = IntegerField('level', validators=[DataRequired("Give your character a level"), NumberRange(min=1, max=20, message="Your character's level out of range, the lowest level is 1 and the maximum level is 20")])
    # classId = db.Column(db.Integer, db.ForeignKey('charclasses.id'), nullable=False)
    # raceId = db.Column(db.Integer, db.ForeignKey('races.id'), nullable=False)
    # alignmentId = db.Column(db.Integer, db.ForeignKey('alignments.id'), nullable=False)
    # backgroundId = db.Column(db.Integer, db.ForeignKey('backgrounds.id'), nullable=False)
    # portraitImage = db.Column(db.String(255), nullable=False)
    # backstory = TextAreaField()

class EditCharacterForm(FlaskForm):
    name = StringField('name', validators=[DataRequired("Name your character"), Length(max=50, message="Your character's name is too long. (Max is 50 characters)")])
    level = IntegerField('level', validators=[DataRequired("Give your character a level"), NumberRange(min=1, max=20, message="Your character's level out of range, the lowest level is 1 and the maximum level is 20")])
    # classId = db.Column(db.Integer, db.ForeignKey('charclasses.id'), nullable=False)
    # raceId = db.Column(db.Integer, db.ForeignKey('races.id'), nullable=False)
    # alignmentId = db.Column(db.Integer, db.ForeignKey('alignments.id'), nullable=False)
    # backgroundId = db.Column(db.Integer, db.ForeignKey('backgrounds.id'), nullable=False)
    # portraitImage = db.Column(db.String(255), nullable=False)
    # backstory = TextAreaField()