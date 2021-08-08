from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FileField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Length, NumberRange
from app.models import Campaign



class CampaignForm(FlaskForm):
    hostId = IntegerField('hostId', validators=[DataRequired("A campaign must be tied to a host")])
    title = StringField('title', validators=[DataRequired("A campaign must have a title"), Length(max=50, message="Your campaign's title is too long. (Max is 50 characters)")])
    coverImage = FileField('coverImage', validators=[DataRequired("A campaign must have a cover image")])
    story = TextAreaField('story', validators=[DataRequired("A campaign must have a story")])