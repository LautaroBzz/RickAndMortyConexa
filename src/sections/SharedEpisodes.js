import React from 'react';
import { useRickAndMortyContext } from '../context';
import '../styles/CharacterEpisodes.css';
import EpisodeInfo from "../components/EpisodeInfo"

const SharedEpisodes = ({ selectedCharacter1, selectedCharacter2 }) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded)  return <div>Loading episodes...</div>;

  const episodesCharacter1 = selectedCharacter1?.episode || [];
  const episodesCharacter2 = selectedCharacter2?.episode || [];

  const episodesSharedArray = episodesCharacter1.filter((episode1) =>
    episodesCharacter2.includes(episode1));

  const episodesShared = episodes?.filter((episode) =>
    episodesSharedArray?.includes(episode.url));

  return (
    <div className='episode-section'>
      <h3>Character #1 & #2 - Shared Episodes</h3>

      {selectedCharacter1 && selectedCharacter2 && (
        <h4 className='characters-shared'>
          {selectedCharacter1?.name} & {selectedCharacter2?.name}
        </h4>
      )}

      <EpisodeInfo 
        episodes={episodesShared}
        noResultText={"Not a single shared episode, Morty. Jeez!"}
      />
    </div>
  )
};

export default SharedEpisodes;
