import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { createCampaign } from '../../store/campaigns';
import "./CreateCampaignForm.css"


const CreateCampaignForm = () => {
    const user = useSelector(state => state.session.user);
    const userId = user?.id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createCampaign());
      }, [dispatch]);





  return (
    <div className="CreateCampaignForm">
        <div className="CreateCampaignForm-header">
            <h1>Create Campaign</h1>
        </div>
    </div>
    )
};

export default CreateCampaignForm;