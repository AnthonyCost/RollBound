import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateCampaign, grabCampaigns} from '../../store/campaigns';
import "./UpdateCampaignForm.css"


const UpdateCampaignForm = () => {

  const user = useSelector(state => state.session.user);
    const userId = user?.id;
    const hostId = userId;

  const history = useHistory();
  
  const dispatch = useDispatch();
  
  const { id } = useParams();

  const campaignId = id;
  
  const currentCampaign = useSelector(state => state.campaigns[campaignId]);


    // states here
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState(currentCampaign?.title);
    const [story, setStory] = useState(currentCampaign?.story);
    const [coverImage, setCoverImage] = useState(currentCampaign?.coverImage);
    const [imageLoading, setImageLoading] = useState(false);

    // update functions here

    const updateTitle = (e) => setTitle(e.target.value);
    const updateStory = (e) => setStory(e.target.value);
    const updateCoverImage = (e) => {
        const file = e.target.files[0];
        setCoverImage(file);
    }
    

    const formData = new FormData();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      formData.append('hostId', hostId);
      formData.append('title', title);
      formData.append('story', story);
      console.log("coverImage ", coverImage)
      if (coverImage) {
          formData.append('coverImage', coverImage);
    }
      const data = await dispatch(updateCampaign(
        id,
        formData ));
          if (data.errors) {
            setErrors(data.errors)
          }
          else {
            history.push(`/campaigns/${id}`)
          }
        };
        

      const handleCancelClick = (e) => {
        e.preventDefault();
        history.goBack();
      };

      let currentImage

      if (coverImage !== undefined) {
        currentImage = (
          <div className="currentImage">
            <img src={coverImage} style={{width: "300px"}}/>
          </div>
        )
      }

  return (
    <div className="CreateCampaignForm form">
        <div className="CreateCampaignForm-header">
            <h1>Update Campaign</h1>
        </div>
        <div className="CreateCampaignForm-content">
        <form onSubmit={handleSubmit}>
        <div className="form-element">
        <label>Title</label>
        <input
          type="string"
          placeholder={`${currentCampaign?.title}`}
          required
          value={title}
          onChange={updateTitle}
        />
        </div>
        <div className="form-element">
        <label>Story</label>
        <input
          type="text"
          placeholder={`${currentCampaign?.story}`}
          required
          value={story}
          onChange={updateStory}
        />
        </div>
        <div className="form-element">
        <label>Cover Image</label>
        {currentImage}
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
        <button className="btn-submit" type="submit">Update campaign</button>
        <button className="btn-cancel" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </form>
        </div>
    </div>
    )
};

export default UpdateCampaignForm;