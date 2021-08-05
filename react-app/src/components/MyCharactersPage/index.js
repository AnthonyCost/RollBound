import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterTab from '../CharacterTab';
import { NavLink } from 'react-router-dom';
import { grabCharacters } from '../../store/characters';
import "./MyCharacters.css"

const MyCharacters = () => {

  const dispatch = useDispatch();
  const allCharacters = useSelector(state => Object.values(state.characters));


  const user = useSelector(state => state.session.user);
  const userId = user?.id
  
  const characters = allCharacters.filter(character => character?.userId?.id === userId);


  useEffect(() => {
    dispatch(grabCharacters());
  }, [dispatch]);

  return (
      <div className="myCharacters-container">
          <div className="myCharacters-header">
          <h1>My Characters</h1>
          <NavLink to={`/characters/createCharacter`}>
                    <button>Add Character</button>
                </NavLink>
          </div>
          <div className="listContainer">
          <div className="myCharacters-charactersList">
              {characters?.map((character) => (
                  <CharacterTab key={character.id} character={character} />
              ))}
        </div>
          </div>
      </div>
  );
};

export default MyCharacters;