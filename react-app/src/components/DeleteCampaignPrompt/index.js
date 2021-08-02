import { useDispatch, useSelector } from "react-redux";
import { deleteCampaign } from "../../store/campaigns";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "./DeleteCampaignPrompt.css";

const DeleteCampaignPrompt = () => {
  const { id } = useParams();

  const campaign = useSelector((state) => state.campaigns[id]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
    };

    await dispatch(deleteCampaign(payload));

    history.push(`/`);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/campaigns/${id}`);
  };

  return (
    <div className="deleteCampaign-container">
      <div className="deleteCampaign-banner">
        <h1>Are you sure you want to delete {campaign?.title}?</h1>
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