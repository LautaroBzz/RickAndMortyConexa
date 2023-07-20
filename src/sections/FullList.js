import React from 'react';
import CharacterList from "../components/CharacterList";

const FullList = ({ characterTitle, handleSelectCharacter }) => {
  return (
    <div className='character-list-container'>
      <h2>{characterTitle}</h2>
      <CharacterList onSelectCharacter={handleSelectCharacter} />
    </div>
  )
};

export default FullList;
