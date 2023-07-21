import React from 'react';
import CharacterEpisodes from '../sections/CharacterEpisodes';
import SharedEpisodes from './SharedEpisodes';

const EpisodesSection = ({ selectedCharacter1, selectedCharacter2 }) => {
  return (
    <div className='episodes-container'>
      <CharacterEpisodes
        selectedCharacter={selectedCharacter1}
        title="Character #1 - Only Episodes"
        noResultText="No episodes, Morty! We're in a TV-less reality here..."
      />

      <SharedEpisodes
        selectedCharacter1={selectedCharacter1}
        selectedCharacter2={selectedCharacter2}
      />

      <CharacterEpisodes
        selectedCharacter={selectedCharacter2}
        title="Character #2 - Only Episodes"
        noResultText="Geez, Rick! No episodes for this character, you know?"
      />
    </div>
  )
};

export default EpisodesSection;
