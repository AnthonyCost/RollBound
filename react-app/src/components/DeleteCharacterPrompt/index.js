import { useDispatch, useSelector } from "react-redux";
import { deleteCharacter } from "../../store/characters";
import { useHistory } from "react-router-dom";

import "./DeleteCharacterPrompt.css";

const DeleteCharacterPrompt = ({setShowModal, characterId}) => {

  const currentCharacter = useSelector(state => state.characters[characterId]);

  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(deleteCharacter(characterId));

    history.push(`/characters/myCharacters/`);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(prev => !prev);
  };


  return (
    <div className="deleteCharacter-container">
      <div className="deleteCharacter-banner">
        <h2>Are you sure you want to delete {currentCharacter?.name}?</h2>
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

export default DeleteCharacterPrompt;