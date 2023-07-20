import React from 'react';
import { useRickAndMortyContext } from '../hooks/useRickAndMortyContext';
import EpisodeInfo from "../components/EpisodeInfo"
import '../styles/CharacterEpisodes.css';

const Character1Episodes = ( selectedCharacter1 ) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded) {
    return <div>Loading episodes...</div>
  };

  const episodesForCharacter1 = episodes?.filter((episode) =>
    selectedCharacter1?.selectedCharacter?.episode?.includes(episode.url));

  return (
    <div className='episode-section'>
      <h3>Character #1 - Only Episodes</h3>
      <h4 className='character-selected'>{selectedCharacter1?.selectedCharacter?.name}</h4>
      <EpisodeInfo 
        episodes={episodesForCharacter1}
        noResultText={"No episodes, Morty! We're in a TV-less reality here..."}
      />
    </div>
  )
};

export default Character1Episodes;
