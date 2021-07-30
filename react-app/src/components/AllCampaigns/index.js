import React from 'react';
import { useDispatch } from 'react-redux';
import "./AllCampaigns.css"

const AllCampaigns = () => {

  const dispatch = useDispatch();

  return (
      <div>
          <div className="index-header">
          <h1>All Campaigns</h1>
          <div>
              <button onClick={() => dispatch({ type: 'ADD_CAMPAIGN' })}>Add Campaign</button>
          </div>
          </div>
          <div className="index-campaignsList">
              map campaigns list here as campaign tab components
        </div>
      </div>
  );
};

export default AllCampaigns;