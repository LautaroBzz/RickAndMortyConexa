import React from 'react';
import { useRickAndMortyContext } from '../hooks/useRickAndMortyContext';
import '../styles/CharacterEpisodes.css';
import EpisodeInfo from "../components/EpisodeInfo";

const SharedEpisodes = ({ selectedCharacter1, selectedCharacter2 }) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded) return <div>Loading episodes...</div>;

  const episodesCharacter1 = selectedCharacter1?.episode || [];
  const episodesCharacter2 = selectedCharacter2?.episode || [];

  const episodesSharedArray = episodes?.filter((episode) => {
    const isSharedByCharacter1 = episodesCharacter1.includes(episode.url);
    const isSharedByCharacter2 = episodesCharacter2.includes(episode.url);
    return isSharedByCharacter1 && isSharedByCharacter2;
  });

  return (
    <div className='episode-section'>
      <h3>Character #1 & #2 - Shared Episodes</h3>

      {selectedCharacter1 && selectedCharacter2 && (
        <h4 className='characters-shared'>
          {selectedCharacter1?.name} & {selectedCharacter2?.name}
        </h4>
      )}

      <EpisodeInfo 
        episodes={episodesSharedArray}
        noResultText={"Not a single shared episode, Morty. Jeez!"}
      />
    </div>
  )
};

export default SharedEpisodes;
