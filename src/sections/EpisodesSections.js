import React from 'react';
import Character1Episodes from "../components/Character1Episodes";
import SharedEpisodes from "../components/SharedEpisodes";
import Character2Episodes from "../components/Character2Episodes";

const EpisodesSection = ({selectedCharacter1, selectedCharacter2}) => {
  return (
    <div className='episodes-container'>

        <div className='episode-section'>
          <Character1Episodes selectedCharacter={selectedCharacter1} />
        </div>

        <div className='episode-section'>
          <SharedEpisodes
            selectedCharacter1={selectedCharacter1}
            selectedCharacter2={selectedCharacter2}
          />
        </div>

        <div className='episode-section'>
          <Character2Episodes selectedCharacter={selectedCharacter2} />
        </div>

      </div>
  )
};

export default EpisodesSection;
