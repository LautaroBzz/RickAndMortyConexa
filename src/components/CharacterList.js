import React from 'react';
import { useRickAndMortyContext } from '../context';
import '../styles/CharacterList.css';

const CharacterList = ({ onSelectCharacter }) => {
  const { characters, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded) return <div>Loading...</div>;

  const handleCharacterClick = (character) => {
    onSelectCharacter(character);
  };

  return (
    <div className="character-card-container">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => handleCharacterClick(character)}
        >
          <img 
            src={character.image} 
            alt={character.name} 
            className="character-image" 
          />
          <div className="character-info">
            <h3 className="character-name">
              {character.name}
            </h3>
            <p className="character-species">
              {character.species}
            </p>
            <p className={`character-status ${getStatusClass(character.status)}`}>
              {character.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'status-alive';
    case 'dead':
      return 'status-dead';
    default:
      return 'status-unknown';
  }
};

export default CharacterList;
