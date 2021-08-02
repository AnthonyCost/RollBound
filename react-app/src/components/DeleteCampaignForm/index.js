import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import  DeleteCampaignPrompt  from "../DeleteCampaignPrompt";
import "./DeleteCampaignForm.css";

function DeleteCampaignModal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    
  }

  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        Delete Campaign
      </button>
      {showModal && (
          <DeleteCampaignPrompt setShowModal={setShowModal}/>
      )}
    </>
  );
}

export default DeleteCampaignModal;