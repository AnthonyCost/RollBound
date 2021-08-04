from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import alignment, db, Character, CharClass, Race, Alignment, Background
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

@characters_routes.route('/<int:id>/', methods=['GET'])
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
    charRaces = [race.to_dict() for race in Race.query.all()]
    alignmentOptions = [alignment.to_dict() for alignment in Alignment.query.all()]
    backgroundOptions = [background.to_dict() for background in Background.query.all()]
    return {"charClassOptions" : charClassOptions, "charRaces" : charRaces, "alignmentOptions" : alignmentOptions, "backgroundOptions" : backgroundOptions}

@characters_routes.route('/<int:id>/updateCharacter/', methods=['PUT'])
@login_required
def update_character(id):
    """
    Update a character
    """
    print(" request formData here:             ", request.files)
    if "portraitImage" not in request.files:
        print("Image not received:      ************************       ")
        return {'errors': ['Image required']}, 400
    image = request.files['portraitImage']
    if not allowed_file (image.filename):
        print("Image not allowed:      ************************       ")
        return {'errors': ['Invalid file type']}, 400
    image.fileName = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        print("Image not in upload:      ************************       ")
        return {'errors': ['Image upload failed']}, 400
    url = upload['url']
    updatedCharacter = Character.query.get(id)
    updatedCharacter.userId = current_user.id
    updatedCharacter.name = request.form['name']
    updatedCharacter.level = request.form['level']
    updatedCharacter.classId = request.form['classId']
    updatedCharacter.raceId = request.form['raceId']
    updatedCharacter.alignmentId = request.form['alignmentId']
    updatedCharacter.backgroundId = request.form['backgroundId']
    updatedCharacter.backstory = request.form['backstory']
    updatedCharacter.portraitImage = url
    db.session.commit()
    return updatedCharacter.to_dict()

@characters_routes.route('/<int:characterId>', methods=['DELETE'])
def delete_character(characterId):
    """
    Delete a character
    """
    character = Character.query.filter_by(id=characterId).first()
    db.session.delete(character)
    db.session.commit()
    return "successful"