import { useRickAndMortyContext } from '../hooks/useRickAndMortyContext';
import EpisodeInfo from "../components/EpisodeInfo"
import '../styles/CharacterEpisodes.css';

const CharacterEpisodes = ({ selectedCharacter, title }) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext();

  if (!allDataLoaded) return <div>Loading episodes...</div>;

  const episodesForCharacter = episodes?.filter((episode) =>
    selectedCharacter?.episode?.includes(episode.url));

  return (
    <div className='episode-section'>
      <h3>{title}</h3>
      <h4 className='character-selected'>{selectedCharacter?.name}</h4>
      <EpisodeInfo 
        episodes={episodesForCharacter}
        noResultText={"No episodes, Morty! We're in a TV-less reality here..."}
      />
    </div>
  )
};

export default CharacterEpisodes;