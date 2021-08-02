import React, { useRef, useState } from "react";
import { Modal } from "../../context/Modal";
import  DeleteCampaignPrompt  from "../DeleteCampaignPrompt";
import "./DeleteCampaignForm.css";

function DeleteCampaignModal() {
  const [showModal, setShowModal] = useState(false);;
  
  window.addEventListener("click", (e) => {
    if(e.currentTarget !== e.target) {
        setShowModal(() => false);
    }
  });

  return (
    <div>
      <button className="btn" onClick={() => setShowModal(prev => !prev)}>
        Delete Campaign
      </button>
      {showModal && (
        <div className="deleteCampaignPrompt">
          <DeleteCampaignPrompt setShowModal={setShowModal}/>
        </div>
      )}
    </div>
  );
}

export default DeleteCampaignModal;