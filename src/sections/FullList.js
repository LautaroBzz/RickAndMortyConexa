import React from 'react';
import CharacterList from "../components/CharacterList";

const FullList = ({ characterTitle, handleSelectCharacter }) => {
  return (
    <>
      <h2>{characterTitle}</h2>
      <CharacterList onSelectCharacter={handleSelectCharacter} />
    </>
  )
};

export default FullList;
