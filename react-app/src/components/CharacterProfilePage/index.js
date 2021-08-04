import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { grabCharacters } from '../../store/characters';
import DeleteCharacterModal from "../DeleteCharacterForm";
import "./CharacterProfilePage.css"


const CharacterProfilePage = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const characterId = id;

    // const allCharacters = useSelector(state => Object.values(state.characters));
    
    
    // const character = allCharacters.filter(character => character?.userId?.id === characterId);
    
  
    const character = useSelector(state => state.characters[characterId]);

    const user = useSelector(state => state.session.user);
    const userId = user.id
    let charPagebuttons = null;
    
    if(userId === character?.userId?.id) {
        charPagebuttons = (
            <div className='campTab-buttons'>          
                <div className="campTab-buttonSingle">
                    <NavLink to={`/campaigns/${character?.id}/updateCharacter/`}>
                        <button>Update {character?.name}</button>
                    </NavLink>
                </div>
                <div className="charTab-buttonSingle">
                    <DeleteCharacterModal characterId={characterId}/>
                </div>
            </div>
        )
    }



    useEffect(() => {
        dispatch(grabCharacters());
      }, [dispatch]);

    

    return (
        <div className="charPage-container" style={{ backgroundImage: `url("https://user-images.githubusercontent.com/35717793/128236299-7c9040dd-0e80-4dfb-b7e3-0fee27d9d188.jpg")`}}>
        <div className="charPage-top">
            <div className="charPage-title">
                <h3>{character?.title}</h3>
            </div>
            <div className="charPage-hostedBy">
                <h3>Played by: {character?.userId?.username}</h3>
                <img alt="host-profile-pic" src={`${character?.userId?.img_url}`} style={{height:'45px', width:'45px', 'borderRadius':'50%', margin: '5px', marginTop : '10px', objectFit: 'cover'}}/>
            </div>
        </div>
        <div className="charPage-bottom">
             <div className="charPage-cover">
                <img
                src={
                    character?.portraitImage
                    ? character.portraitImage
                    : "https://cdnb.artstation.com/p/assets/images/images/010/638/243/large/jonathan-lang-comp-10.jpg?1525438067"
                }
                style={{height:'800px', width:'800px', objectFit: 'cover'}}
                alt="Character Portrait"
                />
                {charPagebuttons}
            </div>
            <div className="charPage-info">
            <div className="charTab-title">
               <h2>{character?.name}</h2>
               <div className="charTab-subHeader">
               <h3>Level {character?.level} | {character?.race?.raceName} | {character?.class?.className}</h3>
               </div>
               <div>
                   <h5>{character?.background?.backgroundName}</h5>
               </div>
               <div>
                   <h6>{character?.alignment?.alignmentName}</h6>
               </div>
             </div>
                <div className="charPage-story">
                    <p>{character?.backstory}</p>
                </div>
            </div>
        </div>
    </div>

  );
};

export default CharacterProfilePage;