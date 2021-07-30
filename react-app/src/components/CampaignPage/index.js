import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { grabCampaigns } from '../../store/campaigns';
import "./CampaignPage.css"


const CampaignPage = () => {

    const dispatch = useDispatch();

    const {campaignId} = useParams();
    console.log(campaignId);
    const campaign = useSelector(state => state.campaigns[campaignId]);
    console.log(campaign);

    useEffect(() => {
        dispatch(grabCampaigns());
      }, [dispatch]);



    const user = useSelector(state => state.session.user);
    const userId = user?.id
    let camptabbuttons = null;
  
    // if(userId !== campaign.hostId.id) {
    //     camptabbuttons = (
    //         <div className='campTab-buttons'>          
    //             <div className="campTab-buttonSingle">
    //                 <NavLink to={`/campaigns/${campaign.id}`}>
    //                     <p>View</p>
    //                 </NavLink>
    //             </div>
    //         </div>
    //     )
    // }
    
    // else {
    //   camptabbuttons = (
    //     <div className='campTab-buttons'>          
    //         <div className="campTab-buttonSingle">
    //             <NavLink to={`/campaigns/${campaign.id}`}>
    //                 <p>View</p>
    //             </NavLink>
    //         </div>
    //     </div>
    //   )
    // }





  return (
      <div className="campTab-container">
         <div>
         <img
         className="campTab-cover"
          src={
            campaign?.coverImage
              ? campaign.coverImage
              : "https://cdn.vox-cdn.com/thumbor/l9L9YGFs2MFdYshsS48hJNc6Rqk=/0x469:2773x2566/1400x933/filters:focal(1233x1130:1675x1572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61861299/D_D_Art_and_Arcan__Regular_Edition__book_cover.0.jpg"
          }
          style={{height:'700px', width:'700px', objectFit: 'cover'}}
          alt="Campaign Cover"
        />
         </div>
         <div className="campTab-info">
             <div className="campTab-title">
               <h3>{campaign?.title}</h3>
             </div>
            {/* <div className="campTab-hostedBy">
                <h3>Hosted by: {campaign?.hostId?.username}</h3>
            </div> */}
            {camptabbuttons}
         </div>
      </div>
  );
};

export default CampaignPage;