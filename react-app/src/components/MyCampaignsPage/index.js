import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampaignTab from '../CampaignTab';
import { NavLink } from 'react-router-dom';
import { grabCampaigns } from '../../store/campaigns';
import "./MyCampaignsPage.css"

const MyCampaigns = () => {

  const dispatch = useDispatch();
  const allCampaigns = useSelector(state => Object.values(state.campaigns));

  const user = useSelector(state => state.session.user);
  const userId = user?.id
  
  const campaigns = allCampaigns.filter(campaign => campaign?.hostId?.id === userId);

  
  useEffect(() => {
    dispatch(grabCampaigns());
  }, [dispatch]);

  let noCampaigns
  if (campaigns.length === 0) {
    noCampaigns = (
      <div className="noCampaigns">
        <h2 style={{fontFamily: "Balgruf"}}> Create a Campaign to begin your collection! </h2>
      </div>
    )
  }

  return (
      <div className="page-container">
          <div className="index-header">
          <h1>My Campaigns</h1>
          {noCampaigns}
          <NavLink to={`/campaigns/createCampaign`}>
                    <button>Add Campaign</button>
                </NavLink>
          </div>
          <div className="listContainer">
            <div className="index-campaignsList">
                {campaigns?.map((campaign) => (
                    <CampaignTab key={campaign.id} campaign={campaign} />
                ))}
            </div>
          </div>
      </div>
  );
};

export default MyCampaigns;