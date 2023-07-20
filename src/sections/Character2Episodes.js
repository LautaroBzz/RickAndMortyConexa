import React from 'react';
import { useRickAndMortyContext } from '../hooks/useRickAndMortyContext';
import EpisodeInfo from "../components/EpisodeInfo"
import '../styles/CharacterEpisodes.css';

const Character2Episodes = ( selectedCharacter2 ) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded) return <div>Loading episodes...</div>;

  const episodesForCharacter2 = episodes?.filter((episode) =>
    selectedCharacter2?.selectedCharacter?.episode?.includes(episode.url));

  return (
    <div className='episode-section'>
      <h3>Character #2 - Only Episodes</h3>
      <h4 className='character-selected'>{selectedCharacter2?.selectedCharacter?.name}</h4>
      <EpisodeInfo 
        episodes={episodesForCharacter2}
        noResultText={"Geez, Rick! No episodes for this character, you know?"}
      />
    </div>
  )
};

export default Character2Episodes;
