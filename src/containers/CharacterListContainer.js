import React from 'react';
import FullList from '../sections/FullList';

const CharacterListContainer = ({ handleSelectCharacter, characterTitle, areBothSelected }) => {
  return (
    <div className={`character-list-container ${areBothSelected ? 'reduced-height' : ''}`}>
      <FullList
        handleSelectCharacter={handleSelectCharacter}
        characterTitle={characterTitle}
      />
    </div>
  );
};

export default CharacterListContainer;
