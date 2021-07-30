import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampaignTab from '../CampaignTab';
import { grabCampaigns } from '../../store/campaigns';
import "./AllCampaigns.css"

const AllCampaigns = () => {

  const dispatch = useDispatch();
  const campaigns = useSelector(state => Object.values(state.campaigns));

  console.log(campaigns);

  useEffect(() => {
    dispatch(grabCampaigns());
  }, [dispatch]);

  return (
      <div>
          <div className="index-header">
          <h1>All Campaigns</h1>
          <div>
              <button onClick={() => dispatch({ type: 'ADD_CAMPAIGN' })}>Add Campaign</button>
          </div>
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