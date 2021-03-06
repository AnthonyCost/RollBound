import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteCharacterModal from "../DeleteCharacterForm";
import "./CharacterTab.css"


const CharacterTab = ({ character }) => {

    const user = useSelector(state => state.session.user);
    const userId = user?.id
    let charTabbuttons = null;
  
    if(userId !== character.userId.id) {
        charTabbuttons = (
            <div className='charTab-buttons'>          
                <div className="charTab-buttonSingle">
                    <NavLink to={`/characters/${character.id}`}>
                        <p>View</p>
                    </NavLink>
                </div>
            </div>
        )
    }
    
    else {
      charTabbuttons = (
        <div className='charTab-buttons'>          
            <div className="charTab-buttonSingle">
                    <NavLink to={`/characters/${character.id}/`}>
                        <p>View</p>
                    </NavLink>
            </div>
            <div className="charTab-buttonSingle">
            <NavLink to={`/characters/${character?.id}/updateCharacter/`}>
                        <p>Edit</p>
                    </NavLink>
            </div>
            <div className="charTab-buttonSingle">
                <DeleteCharacterModal characterId={character?.id}/>
            </div>
        </div>
      )
    }





  return (
    <div className="charTab-wrapper">
      <div className="charTab-container">
         <div>
         <img
         className="charTab-cover"
          src={
              character?.portraitImage
              ? character.portraitImage
              : "https://cdnb.artstation.com/p/assets/images/images/010/638/243/large/jonathan-lang-comp-10.jpg?1525438067"
          }
          style={{height:'100px', width:'100px', objectFit: 'cover', borderRadius: '50%', border: "rgba(255, 255, 255, 1) 5px",
          borderStyle: "double"}}
          alt="Character Portrait"
        />
         </div>
         <div className="charTab-info">
             <div className="charTab-title">
               <h2>{character?.name}</h2>
             </div>
               <div className="charTab-subHeader">
               <h6>Level {character?.level} | {character?.race?.raceName} | {character?.class?.className}</h6>
               </div>
         </div>
      </div>
        {charTabbuttons}
    </div>
  );
};

export default CharacterTab;














