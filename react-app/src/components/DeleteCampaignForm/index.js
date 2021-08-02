import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import  DeleteCampaignPrompt  from "../DeleteCampaignPrompt";
import "./DeleteCampaignForm.css";

function DeleteCampaignModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShowModal(true)}>
        Delete Campaign
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCampaignPrompt/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCampaignModal;