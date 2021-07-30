import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import campaigntab component
import { grabCampaigns } from '../../store/campaigns';
import "./AllCampaigns.css"

const AllCampaigns = () => {

  const dispatch = useDispatch();
  const campaigns = useSelector(state => state?.campaigns?.campaigns);

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
                  <h2>{campaign?.title}</h2>
              ))}
        </div>
      </div>
  );
};

export default AllCampaigns;