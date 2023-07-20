import React from 'react'
import { useRickAndMortyContext } from '../context'
import './CharacterEpisodes.css'

const Character1Episodes = ( selectedCharacter1 ) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext()

  if (!allDataLoaded) {
    return <div>Loading episodes...</div>
  }

  const episodesForCharacter = episodes?.filter((episode) =>
    selectedCharacter1?.selectedCharacter?.episode?.includes(episode.url)
  )

  return (
    <>
      <h3>Character #1 - Only Episodes</h3>
      <h4 className='character-selected'>{selectedCharacter1?.selectedCharacter?.name}</h4>
      <div className='character-episodes-container'>
        {episodesForCharacter?.length > 0 ? (
          <ul className='episode-list'>
            {episodesForCharacter.map((episode) => (
              <li key={episode.id} className="episode-item">
              <div className="episode-info">
                <strong>{episode.episode}</strong>
              </div>
              <div className="episode-info">
                {episode.name}
              </div>
              <div className="episode-info">
                <strong>Air Date:</strong> {episode.air_date}
              </div>
            </li>
            ))}
          </ul>
        ) : (
          <p>No episodes found for this character.</p>
        )}
      </div>
    </>
  )
}

export default Character1Episodes
