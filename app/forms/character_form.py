from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FileField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange, Optional
from app.models import Character


class CreateCharacterForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired("A character must be tied to a user")])
    name = StringField('name', validators=[DataRequired("Name your character"), Length(max=50, message="Your character's name is too long. (Max is 50 characters)")])
    level = IntegerField('level', validators=[DataRequired("Give your character a level"), NumberRange(min=1, max=20, message="Your character's level out of range, the lowest level is 1 and the maximum level is 20")])
    classId = IntegerField('classId', validators=[DataRequired("A character must have a class")])
    raceId = IntegerField('raceId', validators=[DataRequired("A character must have a race")])
    alignmentId = IntegerField('alignmentId', validators=[DataRequired("A character must have an alignment")])
    backgroundId = IntegerField('backgroundId', validators=[DataRequired("A character must have a background")])
    strengthAttributeValue = IntegerField('strengthAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Strength must be between 1 and 30")])
    dexterityAttributeValue = IntegerField('dexterityAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Dexterity must be between 1 and 30")])
    constitutionAttributeValue = IntegerField('constitutionAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Constitution must be between 1 and 30")])
    intelligenceAttributeValue = IntegerField('intelligenceAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Intelligence must be between 1 and 30")])
    wisdomAttributeValue = IntegerField('wisdomAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Wisdom must be between 1 and 30")])
    charismaAttributeValue = IntegerField('charismaAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Charisma must be between 1 and 30")])
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
    strengthAttributeValue = IntegerField('strengthAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Strength must be between 1 and 30")])
    dexterityAttributeValue = IntegerField('dexterityAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Dexterity must be between 1 and 30")])
    constitutionAttributeValue = IntegerField('constitutionAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Constitution must be between 1 and 30")])
    intelligenceAttributeValue = IntegerField('intelligenceAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Intelligence must be between 1 and 30")])
    wisdomAttributeValue = IntegerField('wisdomAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Wisdom must be between 1 and 30")])
    charismaAttributeValue = IntegerField('charismaAttributeValue', validators=[Optional(), NumberRange(min=1, max=30, message="Charisma must be between 1 and 30")])
    portraitImage = FileField('portraitImage', validators=[DataRequired("A character have a portrait image")])
    backstory = TextAreaField('backstory', validators=[DataRequired("A character must have a backstory (If you need inspiration, refer to the background you selected!)")])