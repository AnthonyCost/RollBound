from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Campaign
from flask_login import login_required
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

def upload_image():
    if "coverImage" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["coverImage"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    
    new_image = Campaign(campaign=current_campaign, coverImage=url)
    db.session.add(new_image)
    db.session.commit()
    return {"coverImage": url}

@campaigns_routes.route('/createCampaign', methods=['POST'])
@login_required
def create_campaign():
    """
    Create a campaign
    """
    createdCampaign = Campaign(request.json['name'])
    db.session.add(createdCampaign)
    db.session.commit()
    return createdCampaign


@campaigns_routes.route('/<int:campaign_id>', methods=['GET'])
def get_campaign(campaign_id):
    """
    Get a single campaign
    """
    campaign = Campaign.query.filter_by(id=campaign_id).first()
    return campaign


@campaigns_routes.route('/<int:campaign_id>/updateCampaign', methods=['PUT'])
@login_required
def update_campaign(campaign_id):
    """
    Update a campaign
    """
    updatedCampaign = Campaign.query.filter_by(id=campaign_id).first()
    updatedCampaign.name = request.json['name']
    db.session.commit()
    return updatedCampaign

@campaigns_routes.route('/<int:campaign_id>', methods=['DELETE'])
@login_required
def delete_campaign(campaign_id):
    """
    Delete a campaign
    """
    campaign = Campaign.query.filter_by(id=campaign_id).first()
    db.session.delete(campaign)
    db.session.commit()
    return redirect('/')