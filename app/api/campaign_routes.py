from flask import Blueprint, request, redirect
from flask_login.utils import login_required
from app.models import db, Campaign
from flask_login import login_required

campaigns_routes = Blueprint('campaigns', __name__)

@campaigns_routes.route('/', methods=['GET'])
def get_campaigns():
    """
    Get all campaigns
    """
    campaigns = Campaign.query.all()
    return {'campaigns': [campaign.to_dict() for campaign in campaigns]}

@campaigns_routes.route('/<int:campaign_id>', methods=['GET'])
def get_campaign(campaign_id):
    """
    Get a single campaign
    """
    campaign = Campaign.query.filter_by(id=campaign_id).first()
    return campaign

@campaigns_routes.route('/', methods=['POST'])
@login_required
def create_campaign():
    """
    Create a campaign
    """
    createdCampaign = Campaign(request.json['name'])
    db.session.add(createdCampaign)
    db.session.commit()
    return createdCampaign

@campaigns_routes.route('/<int:campaign_id>', methods=['PUT'])
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