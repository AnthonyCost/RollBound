import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { grabCharacters } from '../../store/characters';
import "./MyCharacters.css"

const MyCharacters = () => {

  const dispatch = useDispatch();
  const allCharacters = useSelector(state => Object.values(state.characters));

  console.log(allCharacters);

  const user = useSelector(state => state.session.user);
  const userId = user?.id
  
  const characters = allCharacters.filter(character => character?.userId?.id === userId);

  console.log(characters);

  useEffect(() => {
    dispatch(grabCharacters());
  }, [dispatch]);

  return (
      <div>
          <div className="index-header">
          <h1>My Characters</h1>
          <NavLink to={`/characters/createCharacter`}>
                    <button>Add Character</button>
                </NavLink>
          </div>
          <div className="index-campaignsList">
              {characters?.map((character) => (
                //   <CampaignTab key={campaign.id} campaign={campaign} />
                <h2>{character?.name}</h2>
              ))}
        </div>
      </div>
  );
};

export default MyCharacters;