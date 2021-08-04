import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCharacter } from '../../store/characters';
import "./CreateCharacterForm.css"


const CreateCharacterForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const userId = user?.id;


    // states here
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [classId, setClassId] = useState('');
    const [raceId, setRaceId] = useState('');
    const [alignmentId, setAlignmentId] = useState('');
    const [backgroundId, setBackgroundId] = useState('');
    const [backstory, setBackStory] = useState('');
    const [portraitImage, setPortraitImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    // update functions here

    const updateName = (e) => setName(e.target.value);
    const updateLevel = (e) => setLevel(e.target.value);
    const updateClassId = (e) => setClassId(e.target.value);
    const updateRaceId = (e) => setRaceId(e.target.value);
    const updateAlignmentId = (e) => setAlignmentId(e.target.value);
    const updateBackgroundId = (e) => setBackgroundId(e.target.value);
    const updateBackStory = (e) => setBackStory(e.target.value);
    const updatePortraitImage = (e) => {
        const file = e.target.files[0];
        setPortraitImage(file);
    }
    

      const handleSubmit = async (e) => {
        e.preventDefault();

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('name', name);
    formData.append('level', level);
    formData.append('classId', classId);
    formData.append('raceId', raceId);
    formData.append('alignmentId', alignmentId);
    formData.append('backgroundId', backgroundId);
    formData.append('backstory', backstory);
    if (portraitImage) {
        formData.append('portraitImage', portraitImage);
    }
        let newCharacter = await dispatch(createCharacter(formData));
        if (newCharacter) {
          history.push(`/characters/${newCharacter.id}`);
        }
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
        history.goBack();
      };

  return (
    <div className="CreateCampaignForm">
        <div className="CreateCampaignForm-header">
            <h1>Create Character</h1>
        </div>
        <div className="CreateCampaignForm-content">
        <form onSubmit={handleSubmit}>
        <div className="form-element">
        <label>Name</label>
        <input
          type="string"
          placeholder="Name your character"
          required
          value={name}
          onChange={updateName}
        />
        </div>

        {/* <div className="form-element">
        <label>Race</label>
        <input
          type="textarea"
          placeholder="'yer a wizard Harry"
          required
          value={raceId}
          onChange={updateRaceId}
        />
        <h4>raceName here</h4>
        <h6>raceDescription here</h6>
        </div> */}
        
        {/* <div className="form-element">
        <label>Class</label>
        <input
          type="textarea"
          placeholder="'yer a wizard Harry"
          required
          value={classId}
          onChange={updateClassId}
        />
        <h4>className here</h4>
        <h6>classDescription here</h6>
        </div> */}

        <div className="form-element">
        <label>Level</label>
        <input
          type="number"
          placeholder="level"
          min="1"
          max="20"
          required
          value={level}
          onChange={updateLevel}
        />
        </div>

        {/* <div className="form-element">
        <label>Alignment</label>
        <input
          type="textarea"
          placeholder="Good, Neutral, or Evil"
          required
          value={alignmentId}
          onChange={updateAlignmentId}
        />
        <h4>alignmentName here</h4>
        <h6>alignmentDescription here</h6>
        </div> */}

        {/* <div className="form-element">
        <label>Background</label>
        <input
          type="textarea"
          placeholder="'What were you?"
          required
          value={backgroundId}
          onChange={updateBackgroundId}
        />
        <h4>backgroundName here</h4>
        <h6>backgroundDescription here</h6>
        </div> */}

        <div className="form-element">
        <label>BackStory</label>
        <input
          type="textarea"
          placeholder="Your origin story"
          required
          value={backstory}
          onChange={updateBackStory}
        />
        </div>

        <div className="form-element">
        <label>Character Portrait</label>
        <input
              type="file"
              accept="image/*"
              onChange={updatePortraitImage}
              />
            {(imageLoading)&& <p>Loading...</p>}
      </div>
      <div className="form-errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
        <button className="btn-submit" type="submit">Create new character</button>
        <button className="btn-cancel" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
        </div>
    </div>
    )
};

export default CreateCharacterForm;