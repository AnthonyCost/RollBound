from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Character
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