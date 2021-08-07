from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FileField, TextAreaField
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
    userId = IntegerField('userId', validators=[DataRequired("A character must be tied to a user")])
    name = StringField('name', validators=[DataRequired("Name your character"), Length(max=50, message="Your character's name is too long. (Max is 50 characters)")])
    level = IntegerField('level', validators=[DataRequired("Give your character a level"), NumberRange(min=1, max=20, message="Your character's level out of range, the lowest level is 1 and the maximum level is 20")])
    classId = IntegerField('classId', validators=[DataRequired("A character must have a class")])
    raceId = IntegerField('raceId', validators=[DataRequired("A character must have a race")])
    alignmentId = IntegerField('alignmentId', validators=[DataRequired("A character must have an alignment")])
    backgroundId = IntegerField('backgroundId', validators=[DataRequired("A character must have a background")])
    portraitImage = FileField('portraitImage', validators=[DataRequired("A character have a portrait image")])
    backstory = TextAreaField('backstory', validators=[DataRequired("A character must have a backstory (If you need inspiration, refer to the background you selected!)")])

class UpdateCharacterForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired("A character must be tied to a user")])
    name = StringField('name', validators=[DataRequired("Name your character"), Length(max=50, message="Your character's name is too long. (Max is 50 characters)")])
    level = IntegerField('level', validators=[DataRequired("Give your character a level"), NumberRange(min=1, max=20, message="Your character's level out of range, the lowest level is 1 and the maximum level is 20")])
    classId = IntegerField('classId', validators=[DataRequired("A character must have a class")])
    raceId = IntegerField('raceId', validators=[DataRequired("A character must have a race")])
    alignmentId = IntegerField('alignmentId', validators=[DataRequired("A character must have an alignment")])
    backgroundId = IntegerField('backgroundId', validators=[DataRequired("A character must have a background")])
    portraitImage = FileField('portraitImage', validators=[DataRequired("A character have a portrait image")])
    backstory = TextAreaField('backstory', validators=[DataRequired("A character must have a backstory (If you need inspiration, refer to the background you selected!)")])