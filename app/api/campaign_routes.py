from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Campaign
from flask_login import login_required, current_user
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

campaigns_routes = Blueprint('campaigns', __name__)

@campaigns_routes.route('/', methods=['GET'])
def get_campaigns():
    """
    Get all campaigns
    """
    campaigns = Campaign.query.all()
    return {'campaigns': [campaign.to_dict() for campaign in campaigns]}


    
# def upload_image():
#     print("----------------------",request.data)
#     if "coverImage" not in request.files:
#         return {"errors": "image required"}, 400
#     image = request.files["coverImage"]
#     print("************Image received")

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
    
#     new_image = Campaign(campaign=current_campaign, coverImage=url)
#     db.session.add(new_image)
#     db.session.commit()
#     return {"coverImage": url}

@campaigns_routes.route('/createCampaign/', methods=['POST'])
@login_required
def create_campaign():
    """
    Create a campaign
    """
    if "coverImage" not in request.files:
            return {'errors': ['Image required']}, 400
    image = request.files['coverImage']
    if not allowed_file (image.filename):
        return {'errors': ['Invalid file type']}, 400
    image.fileName = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        return {'errors': ['Image upload failed']}, 400
    url = upload['url']
    # if form.validate_on_submit():
    #     user = User(
    #         username=form.data['username'],
    #         email=form.data['email'],
    #         password=form.data['password'],
    #         img_url=url
    #     )
    #     print("##########", url)
    #     db.session.add(user)
    #     db.session.commit()
    #     login_user(user)
    #     return user.to_dict()
    #     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    createdCampaign = Campaign()
    createdCampaign.hostId = current_user.id
    createdCampaign.title = request.form['title']
    createdCampaign.story = request.form['story']
    createdCampaign.coverImage = url
    db.session.add(createdCampaign)
    db.session.commit()
    print(createdCampaign)
    return createdCampaign.to_dict()


@campaigns_routes.route('/<int:id>', methods=['GET'])
def get_campaign(id):
    """
    Get a single campaign
    """
    print("backend id: ", id)
    campaign = Campaign.query.filter_by(id)
    return campaign.to_dict()


@campaigns_routes.route('/<int:id>/updateCampaign', methods=['PUT'])
@login_required
def update_campaign(id):
    """
    Update a campaign
    """
    print("stuff here:             ", request.data)
    data = request.get_json(force = True)
    print("datae here --------------- ", data)
    if "coverImage" not in request.files:
        print("Image not received:      ************************       ")
        return {'errors': ['Image required']}, 400
    image = request.files['coverImage']
    if not allowed_file (image.filename):
        print("Image not allowed:      ************************       ")
        return {'errors': ['Invalid file type']}, 400
    image.fileName = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        print("Image not in upload:      ************************       ")
        return {'errors': ['Image upload failed']}, 400
    url = upload['url']
    updatedCampaign = Campaign.query.filter_by(id).first()
    updatedCampaign.title = request.form['title']
    updatedCampaign.story = request.form['story']
    updatedCampaign.coverImage = url
    print("-------------------------------------------------", updatedCampaign)
    db.session.commit()
    return updatedCampaign

@campaigns_routes.route('/<int:campaignId>', methods=['DELETE'])
def delete_campaign(campaignId):
    """
    Delete a campaign
    """
    campaign = Campaign.query.filter_by(id=campaignId).first()
    db.session.delete(campaign)
    db.session.commit()
    return "successful"