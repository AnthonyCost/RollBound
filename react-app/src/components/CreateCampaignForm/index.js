import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCampaign } from '../../store/campaigns';
import "./CreateCampaignForm.css"


const CreateCampaignForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    // states here
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    // update functions here

    const updateTitle = (e) => setTitle(e.target.value);
    const updateStory = (e) => setStory(e.target.value);
    const updateCoverImage = (e) => {
        const file = e.target.files[0];
        setCoverImage(file);
    }
    
    const user = useSelector(state => state.session.user);
    const userId = user?.id;
    const hostId = userId;

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // const payload = {
        //   hostId: userId,
        //   title,
        //   coverImage,
        //   story
        // };

    const formData = new FormData();
    formData.append('hostId', hostId);
    formData.append('title', title);
    formData.append('story', story);
    if (coverImage) {
        formData.append('coverImage', coverImage);
    }
        let newCampaign = await dispatch(createCampaign(formData));
        if (newCampaign) {
          history.push(`/campaigns/${newCampaign.id}`);
        }
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
      };

  return (
    <div className="CreateCampaignForm form">
        <div className="CreateCampaignForm-header">
            <h1>Create Campaign</h1>
        </div>
        <div className="CreateCampaignForm-content">
        <form onSubmit={handleSubmit}>
        <div className="form-element">
        <label>Title</label>
        <input
          type="string"
          placeholder="Title of your campaign"
          required
          value={title}
          onChange={updateTitle}
        />
        </div>
        <div className="form-element">
        <label>Story</label>
        <input
          type="text"
          placeholder="Story of your campaign"
          required
          value={story}
          onChange={updateStory}
        />
        </div>
        <div className="form-element">
        <label>Cover Image</label>
        <input
              type="file"
              accept="image/*"
              onChange={updateCoverImage}
              />
            {(imageLoading)&& <p>Loading...</p>}
      </div>
      <div className="form-errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
        <button className="btn-submit" type="submit">Create new campaign</button>
        <button className="btn-cancel" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
        </div>
    </div>
    )
};

export default CreateCampaignForm;