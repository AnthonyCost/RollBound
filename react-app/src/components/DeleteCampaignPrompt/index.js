import { useDispatch, useSelector } from "react-redux";
import { deleteCampaign } from "../../store/campaigns";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "./DeleteCampaignPrompt.css";

const DeleteCampaignPrompt = ({setShowModal, campaignId}) => {

  const currentCampaign = useSelector(state => state.campaigns[campaignId]);

  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(deleteCampaign(campaignId));

    history.push(`/`);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(prev => !prev);
  };


  return (
    <div className="deleteCampaign-container">
      <div className="deleteCampaign-banner">
        <h1>Are you sure you want to delete {currentCampaign?.title}?</h1>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <button className="yes-btn" type="submit">
          Yes
        </button>
        <button className="no-btn" type="button" onClick={handleCancelClick}>
          No
        </button>
      </form>
      </div>
    </div>
  );
};

export default DeleteCampaignPrompt;