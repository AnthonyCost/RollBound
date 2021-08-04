import React, { useRef, useState } from "react";
import { Modal } from "../../context/Modal";
import  DeleteCharacterPrompt  from "../DeleteCharacterPrompt";
import "./DeleteCharacterForm.css";

function DeleteCharacterModal({characterId}) {
  const [showModal, setShowModal] = useState(false);;


  return (
    <div>
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