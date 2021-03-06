from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

# def upload_image():
#     if "img_url" not in request.files:
#         return {"errors": "image required"}, 400

#     image = request.files["img_url"]

#     if not allowed_file(image.filename):
#         return {"errors": "file type not permitted"}, 400
    
#     image.filename = get_unique_filename(image.filename)

#     upload = upload_file_to_s3(image)

#     if "url" not in upload:
#         # if the dictionary doesn't have a url key
#         # it means that there was an error when we tried to upload
#         # so we send back that error message
#         return upload, 400

#     url = upload["url"]
#     # flask_login allows us to get the current user from the request
#     new_image = User(user=current_user, img_url=url)
#     db.session.add(new_image)
#     db.session.commit()
#     return {"img_url": url}

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
