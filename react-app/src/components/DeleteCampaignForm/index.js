import React, { useRef, useState } from "react";
import { Modal } from "../../context/Modal";
import  DeleteCampaignPrompt  from "../DeleteCampaignPrompt";
import "./DeleteCampaignForm.css";

function DeleteCampaignModal({campaignId}) {
  const [showModal, setShowModal] = useState(false);;
  
  console.log(campaignId);

  return (
    <div>
      <button className="btn" onClick={() => setShowModal(prev => !prev)}>
        Delete Campaign
      </button>
      {showModal && (
        <div className="deleteCampaignPrompt">
          <DeleteCampaignPrompt setShowModal={setShowModal} campaignId={campaignId}/>
        </div>
      )}
    </div>
  );
}

export default DeleteCampaignModal;