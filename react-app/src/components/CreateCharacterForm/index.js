import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCharacter } from '../../store/characters';
import "./CreateCharacterForm.css"


const CreateCharacterForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const userId = user?.id;


    const metaData = useSelector(state => state.characters.metaData);

    const charClasses = metaData?.charClassOptions;
    const charRaces = metaData?.charRaces;
    const charBackgrounds = metaData?.backgroundOptions;
    const charAlignments = metaData?.alignmentOptions;


    
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
    formData.append('level', parseInt(level));
    formData.append('classId', parseInt(classId));
    formData.append('raceId', parseInt(raceId));
    formData.append('alignmentId', parseInt(alignmentId));
    formData.append('backgroundId', parseInt(backgroundId));
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
      

      //  reference info here

      let raceInfo
      
      if (raceId !== '') {
        raceInfo = (
          <div className="form-elementInfo">
            <div className="selectTitle">
              <h4>{charRaces[raceId - 1]?.raceName}</h4>
            </div>
            <div className="selectDescription">
              <h6>{charRaces[raceId - 1]?.raceDescription}</h6>
            </div>
        </div>
        )
      }

      let classInfo
      
      if (classId !== '') {
        classInfo = (
          <div className="form-elementInfo">
            <div className="selectTitle">
              <h4>{charClasses[classId - 1]?.className}</h4>
            </div>
            <div className="selectDescription">
              <h6>{charClasses[classId - 1]?.classDescription}</h6>
            </div>
        </div>
        )
      }

      let alignmentInfo
      
      if (alignmentId !== '') {
        alignmentInfo = (
          <div className="form-elementInfo">
            <div className="selectTitle">
              <h4>{charAlignments[alignmentId - 1]?.alignmentName}</h4>
            </div>
            <div className="selectDescription">
              <h6>{charAlignments[alignmentId - 1]?.alignmentDescription}</h6>
            </div>
        </div>
        )
      }

      let backgroundInfo
      
      if (backgroundId !== '') {
        backgroundInfo = (
          <div className="form-elementInfo">
            <div className="selectTitle">
              <h4>{charBackgrounds[backgroundId - 1]?.backgroundName}</h4>
            </div>
            <div className="selectDescription">
              <h6>{charBackgrounds[backgroundId - 1]?.backgroundDescription}</h6>
            </div>
        </div>
        )
      }

  return (
    <div className="CreateCharacterForm">
        <div className="CreateCharacterForm-header">
            <h1>Create Character</h1>
        </div>
        <div className="CreateCharacterForm-content">
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

        <div className="form-element">
        <label>Race</label>
          <select
          type='integer'
          name='race'
          onChange={updateRaceId}
          value={raceId}
          required
          >
          <option key="0" value="">Choose a Race!</option>
          {charRaces?.map((race) => (
                  <option key={race?.id} value={race?.id}>{race?.raceName}</option>
              ))}
        </select>
        {raceInfo}
        </div>
        
        <div className="form-element">
        <label>Class</label>
          <select
          type='integer'
          name='race'
          onChange={updateClassId}
          value={classId}
          required
          >
          <option key="0" value="">Pick a Class!</option>
          {charClasses?.map((character) => (
                  <option key={character?.id} value={character?.id}>{character?.className}</option>
              ))}
        </select>
        {classInfo}
        </div>

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

        <div className="form-element">
        <label>Alignment</label>
          <select
          type='integer'
          name='alignment'
          onChange={updateAlignmentId}
          value={alignmentId}
          required
          >
          <option key="0" value="">Choose an Alignment!</option>
          {charAlignments?.map((alignment) => (
                  <option key={alignment?.id} value={alignment?.id}>{alignment?.alignmentName}</option>
              ))}
        </select>
        {alignmentInfo}
        </div>

        <div className="form-element">
        <label>Background</label>
          <select
          type='integer'
          name='background'
          onChange={updateBackgroundId}
          value={backgroundId}
          required
          >
          <option key="0" value="">Choose a Background!</option>
          {charBackgrounds?.map((background) => (
                  <option key={background?.id} value={background?.id}>{background?.backgroundName}</option>
              ))}
        </select>
        {backgroundInfo}
        </div>

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

{/* <select
          type='integer'
          name='race'
          onChange={updateRaceId}
          value={raceId}
          placeholder="Be who you want to be"
          required
          >
              //! Map  options for all the values in races
              //! the value would be the id and the text in between would be the raceName
              //! depending on the value you select, the description that would be rendered would correspond with the stae of the raceId
          <option value="1">Dragonborn</option>
        </select> */}