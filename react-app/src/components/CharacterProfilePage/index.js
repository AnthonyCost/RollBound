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
                    <NavLink to={`/characters/${character?.id}/updateCharacter/`}>
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
        <div className="charPage-container" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1575081151271-b6d77f29ab1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80")`}}>
        <div className="charpage-content">
        <div className="charPage-left">
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
        </div>
        <div className="charPage-right">
            <div className="charPage-info">
            <div className="charPage-title">
               <h1 className="charPage-name">{character?.name}</h1>
               <div className="charPage-subHeader">
               <h3>Level {character?.level} | {character?.race?.raceName} | {character?.class?.className}</h3>
               </div>
                <div className="charPage-hostedBy">
                    <h3>Played by: {character?.userId?.username}</h3>
                    <img alt="host-profile-pic" src={`${character?.userId?.img_url}`} style={{height:'25px', width:'25px', 'borderRadius':'50%', margin: '5px', marginTop : '10px', objectFit: 'cover'}}/>
                </div>
               <div className="charPage-backalign">
                   <h5>Background: {character?.background?.backgroundName}</h5>
                   <h5>Alignment: {character?.alignment?.alignmentName}</h5>
               </div>
            </div>
                <div className="charPage-story">
                    <p>{character?.backstory}</p>
                </div>
             </div>
            </div>
        </div>
    </div>

  );
};

export default CharacterProfilePage;