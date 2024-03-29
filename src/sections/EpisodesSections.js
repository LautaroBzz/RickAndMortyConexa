import React from 'react';
import CharacterEpisodes from '../sections/CharacterEpisodes';
import SharedEpisodes from './SharedEpisodes';

const EpisodesSection = ({ selectedCharacter1, selectedCharacter2 }) => {
  return (
    <div className='episodes-container'>
      <CharacterEpisodes
        selectedCharacter={selectedCharacter1}
        title="Character #1 - Only Episodes"
      />

      <SharedEpisodes
        selectedCharacter1={selectedCharacter1}
        selectedCharacter2={selectedCharacter2}
        title="Character #1 & #2 - Shared Episodes"
      />

      <CharacterEpisodes
        selectedCharacter={selectedCharacter2}
        title="Character #2 - Only Episodes"
      />
    </div>
  )
};

export default EpisodesSection;
