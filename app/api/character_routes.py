from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Character, CharClass, Race, Alignment, Background
from flask_login import login_required, current_user
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)


characters_routes = Blueprint('characters', __name__)

@characters_routes.route('/', methods=['GET'])
def get_characters():
    """
    Get all characters
    """
    characters = Character.query.all()
    return {'characters': [character.to_dict() for character in characters]}

@characters_routes.route('/createCharacter/', methods=['POST'])
@login_required
def create_character():
    """
    Create a character
    """
    if "portraitImage" not in request.files:
            return {'errors': ['Image required']}, 400
    image = request.files['portraitImage']
    if not allowed_file (image.filename):
        return {'errors': ['Invalid file type']}, 400
    image.fileName = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        return {'errors': ['Image upload failed']}, 400
    url = upload['url']
    createdCharacter = Character()
    createdCharacter.userId = current_user.id
    createdCharacter.name = request.form['name']
    createdCharacter.level = request.form['level']
    createdCharacter.classId = request.form['classId']
    createdCharacter.raceId = request.form['raceId']
    createdCharacter.alignmentId = request.form['alignmentId']
    createdCharacter.backgroundId = request.form['backgroundId']
    createdCharacter.backstory = request.form['backstory']
    createdCharacter.portraitImage = url
    db.session.add(createdCharacter)
    db.session.commit()
    print("createdCharacter---------------------------- ",createdCharacter)
    return createdCharacter.to_dict()

@characters_routes.route('/<int:id>', methods=['GET'])
def get_character(id):
    """
    Get a single character
    """
    print("backend id: ", id)
    character = Character.query.filter_by(id)
    return character.to_dict()

@characters_routes.route('/createCharacter/', methods=['GET'])
def get_metaData():
    """
    Get metadata for a single character
    """
    charClassOptions = [charClass.to_dict() for charClass in CharClass.query.all()]
    # CharClass.query.all()
    # CharClass.query.all()
    # CharClass.query.all()
    print({"charClassOptions" : charClassOptions})
    return {"charClassOptions" : charClassOptions}