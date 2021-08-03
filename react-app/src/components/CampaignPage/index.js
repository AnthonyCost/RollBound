import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { grabCampaigns } from '../../store/campaigns';
import DeleteCampaignModal from "../DeleteCampaignForm";
import "./CampaignPage.css"


const CampaignPage = () => {

    const dispatch = useDispatch();

    const {campaignId} = useParams();


    const campaign = useSelector(state => state.campaigns[campaignId]);
    useEffect(() => {
        dispatch(grabCampaigns());
      }, [dispatch]);



    const user = useSelector(state => state.session.user);
    const userId = user?.id
    let camppagebuttons = null;
  
    if(userId === campaign?.hostId.id) {
        camppagebuttons = (
            <div className='campTab-buttons'>          
                <div className="campTab-buttonSingle">
                    <NavLink to={`/campaigns/${campaign?.id}/updateCampaign`}>
                        <button>Update {campaign?.title}</button>
                    </NavLink>
                </div>
                <div className="campTab-buttonSingle">
                    <DeleteCampaignModal campaignId={campaignId}/>
                </div>
            </div>
        )
    }





  return (
      <div className="campPage-container">
         <div className="campPage-cover">
         <img
          src={
            campaign?.coverImage
              ? campaign.coverImage
              : "https://cdn.vox-cdn.com/thumbor/l9L9YGFs2MFdYshsS48hJNc6Rqk=/0x469:2773x2566/1400x933/filters:focal(1233x1130:1675x1572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61861299/D_D_Art_and_Arcan__Regular_Edition__book_cover.0.jpg"
          }
          style={{height:'700px', width:'700px', objectFit: 'cover'}}
          alt="Campaign Cover"
          />
          {camppagebuttons}
         </div>
         <div className="campPage-info">
             <div className="campPage-title">
               <h3>{campaign?.title}</h3>
             </div>
            <div className="campPage-hostedBy">
                <h3>Hosted by: {campaign?.hostId?.username}</h3>
                <img alt="host-profile-pic" src={`${campaign?.hostId?.img_url}`} style={{height:'45px', width:'45px', 'borderRadius':'50%', margin: '5px', marginTop : '10px', objectFit: 'cover'}}/>
            </div>
             <div className="campPage-story">
               <p>{campaign?.story}</p>
             </div>
         </div>
      </div>
  );
};

export default CampaignPage;