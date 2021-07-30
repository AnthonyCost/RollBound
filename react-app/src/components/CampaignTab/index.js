import { NavLink } from "react-router-dom";
import "./CampaignTab.css"


const CampaignTab = ({ campaign }) => {

    const user = useSelector(state => state.session.user);
    let campTabButtons = null;
  
    if(user.id !== campaign.hostId) {
        campTabButtons = (
            <div className='campTab-buttons'>          
                <div className="campTab-buttonSingle">
                    <NavLink to={`/campaigns/${campaign.id}`}>
                        <p>View</p>
                    </NavLink>
                </div>
            </div>
        )
    }
    
    else {
      campTabButtons = (
        <div className='campTab-buttons'>          
            <div className="campTab-buttonSingle">
                <NavLink to={`/campaigns/${campaign.id}`}>
                    <p>View</p>
                </NavLink>
            </div>
        </div>
      )
    }





  return (
      <div className="campTab-container">
         <div className="campTab-cover">
         <img
          src={
            campaign?.coverImage
              ? group.coverImage
              : "https://cdn.vox-cdn.com/thumbor/l9L9YGFs2MFdYshsS48hJNc6Rqk=/0x469:2773x2566/1400x933/filters:focal(1233x1130:1675x1572):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61861299/D_D_Art_and_Arcan__Regular_Edition__book_cover.0.jpg"
          }
        />
         </div>
         <div className="campTab-info">
             <div className="campTab-title">
               <h3>{campaign?.title}</h3>
             </div>
            {/* <div className="cardSubTitle">
                <h3>Hosted by: {group?.host?.username}</h3>
            </div> */}
            <campTabButtons/>
         </div>
      </div>
  );
};

export default CampaignTab;