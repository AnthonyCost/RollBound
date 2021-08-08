from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Campaign
from app.forms import CampaignForm
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


@campaigns_routes.route('/createCampaign/', methods=['POST'])
@login_required
def create_campaign():
    """
    Create a campaign
    """
    form = CampaignForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
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
        createdCampaign = Campaign()
        createdCampaign.hostId = current_user.id
        createdCampaign.title = request.form['title']
        createdCampaign.story = request.form['story']
        createdCampaign.coverImage = url
        db.session.add(createdCampaign)
        db.session.commit()
        print(createdCampaign)
        return createdCampaign.to_dict()
    return {'errors': (form.errors)}, 401


@campaigns_routes.route('/<int:id>', methods=['GET'])
def get_campaign(id):
    """
    Get a single campaign
    """
    print("backend id: ", id)
    campaign = Campaign.query.filter_by(id)
    return campaign.to_dict()


@campaigns_routes.route('/<int:id>/updateCampaign/', methods=['PUT'])
@login_required
def update_campaign(id):
    """
    Update a campaign
    """
    if "coverImage" not in request.files:
        print("Image not received:      ************************       ")
        selectedImage = request.form['coverImage']
        print("******************************************************************************************       ", selectedImage)
    else:
        image = request.files['coverImage']
        if not allowed_file (image.filename):
            print("Image not allowed:      ************************       ")
            return {'errors': ['Invalid file type']}, 400
        image.fileName = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        if "url" not in upload:
            print("Image not in upload:      ************************       ")
            return {'errors': ['Image upload failed']}, 400
        selectedImage = upload['url']
    updatedCampaign = Campaign.query.get(id)
    updatedCampaign.title = request.form['title']
    updatedCampaign.story = request.form['story']
    updatedCampaign.coverImage = selectedImage
    db.session.commit()
    return updatedCampaign.to_dict()

@campaigns_routes.route('/<int:campaignId>', methods=['DELETE'])
def delete_campaign(campaignId):
    """
    Delete a campaign
    """
    campaign = Campaign.query.filter_by(id=campaignId).first()
    db.session.delete(campaign)
    db.session.commit()
    return "successful"