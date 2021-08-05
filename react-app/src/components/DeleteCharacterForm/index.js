import React, { useState } from "react";
import  DeleteCharacterPrompt  from "../DeleteCharacterPrompt";
import "./DeleteCharacterForm.css";

function DeleteCharacterModal({characterId}) {
  const [showModal, setShowModal] = useState(false);;


  return (
    <div className="deleteCampaignForm-container">
      <button className="btn" onClick={() => setShowModal(prev => !prev)}>
        Delete Character
      </button>
      {showModal && (
        <div className="deleteCharacterPrompt">
          <DeleteCharacterPrompt setShowModal={setShowModal} characterId={characterId}/>
        </div>
      )}
    </div>
  );
}

export default DeleteCharacterModal;