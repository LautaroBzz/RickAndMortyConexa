import React from 'react'
import { useRickAndMortyContext } from '../context'
import './CharacterEpisodes.css'

const SharedEpisodes = ({ selectedCharacter1, selectedCharacter2 }) => {
  const { episodes, allDataLoaded } = useRickAndMortyContext()

  if (!allDataLoaded) {
    return <div>Loading episodes...</div>
  }

  console.log(selectedCharacter1)

  const episodesCharacter1 = selectedCharacter1?.episode || [];
  const episodesCharacter2 = selectedCharacter2?.episode || [];

  const episodesSharedArray = episodesCharacter1.filter((episode1) =>
    episodesCharacter2.includes(episode1)
  );

  const episodesShared = episodes?.filter((episode) =>
    episodesSharedArray?.includes(episode.url)
  )

  return (
    <>
      <h3>Character #1 & #2 - Shared Episodes</h3>
      {
        selectedCharacter1 && selectedCharacter2 && (
          <h4 className='characters-shared'>
            {selectedCharacter1?.name} & {selectedCharacter2?.name}
          </h4>
        )
      }
      <div className='character-episodes-container'>
        {episodesShared?.length > 0 ? (
          <ul className='episode-list'>
            {episodesShared?.map((episode) => (
              <li key={episode.id} className='episode-item'>
                <div className='episode-info'>
                  <strong>{episode.episode}</strong>
                </div>
                <div className='episode-info'>{episode.name}</div>
                <div className='episode-info'>
                  <strong>Air Date:</strong> {episode.air_date}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No shared episodes for these characters.</p>
        )}
      </div>
    </>
  )
}

export default SharedEpisodes
