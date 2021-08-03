import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampaignTab from '../CampaignTab';
import { NavLink } from 'react-router-dom';
import { grabCampaigns } from '../../store/campaigns';
import "./AllCampaigns.css"

const AllCampaigns = () => {

  const dispatch = useDispatch();
  const campaigns = useSelector(state => Object.values(state.campaigns));

  useEffect(() => {
    dispatch(grabCampaigns());
  }, [dispatch]);

  return (
      <div className="allCamp-container">
          <div className="index-header">
          <h1>All Campaigns</h1>
          <NavLink to={`/campaigns/createCampaign`}>
                    <button>Add Campaign</button>
                </NavLink>
          </div>
          <div className="index-campaignsList">
              {campaigns?.map((campaign) => (
                  <CampaignTab key={campaign.id} campaign={campaign} />
              ))}
        </div>
      </div>
  );
};

export default AllCampaigns;