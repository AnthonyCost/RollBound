import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateCampaign} from '../../store/campaigns';
import "./UpdateCampaignForm.css"


const UpdateCampaignForm = ({campaign}) => {

  
  // const dispatch = useDispatch();
  const history = useHistory();
  
  const dispatch = useDispatch();
  
  const {id} = useParams();
  // const campaign = useSelector(state => state.campaign);

  console.log(id);

  // campaign = dispatch(getSingleCampaign(id));

  console.log(campaign);


    // states here
    const [errors, setErrors] = useState([]);
    const [hostId] = useState(campaign?.hostId);
    const [title, setTitle] = useState(campaign?.title);
    const [story, setStory] = useState(campaign?.story);
    const [coverImage, setCoverImage] = useState(campaign?.coverImage);
    const [imageLoading, setImageLoading] = useState(false);

    // update functions here

    const updateTitle = (e) => setTitle(e.target.value);
    const updateStory = (e) => setStory(e.target.value);
    const updateCoverImage = (e) => {
        const file = e.target.files[0];
        setCoverImage(file);
    }
    

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await dispatch(updateCampaign(
        hostId,
        title,
          coverImage,
          story ));
          if (data) {
            setErrors(data)
            history.push(`/campaigns/${id}`)
          }
        };
        

      const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`);
      };

  return (
    <div className="CreateCampaignForm">
        <div className="CreateCampaignForm-header">
            <h1>Update Campaign</h1>
        </div>
        <div className="CreateCampaignForm-content">
        <form onSubmit={handleSubmit}>
        <div className="form-element">
        <label>Title</label>
        <input
          type="string"
          placeholder={`${campaign?.title}`}
          required
          value={title}
          onChange={updateTitle}
        />
        </div>
        <div className="form-element">
        <label>Story</label>
        <input
          type="text"
          placeholder={`${campaign?.story}`}
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