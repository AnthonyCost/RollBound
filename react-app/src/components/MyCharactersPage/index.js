import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampaignTab from '../CampaignTab';
import { NavLink } from 'react-router-dom';
import { grabCampaigns } from '../../store/campaigns';
import "./MyCharacters.css"

const MyCharacters = () => {

  const dispatch = useDispatch();
  const allCampaigns = useSelector(state => Object.values(state.campaigns));

  const user = useSelector(state => state.session.user);
  const userId = user?.id
  
  const campaigns = allCampaigns.filter(campaign => campaign?.hostId?.id === userId);

  
  useEffect(() => {
    dispatch(grabCampaigns());
  }, [dispatch]);

  return (
      <div>
          <div className="index-header">
          <h1>My Characters</h1>
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

export default MyCharacters;