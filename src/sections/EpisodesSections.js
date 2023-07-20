import React from 'react'
import Character1Episodes from '../sections/Character1Episodes'
import SharedEpisodes from './SharedEpisodes'
import Character2Episodes from '../sections/Character2Episodes'

const EpisodesSection = ({ selectedCharacter1, selectedCharacter2 }) => {
  return (
    <div className='episodes-container'>
      <Character1Episodes selectedCharacter={selectedCharacter1} />

      <SharedEpisodes
        selectedCharacter1={selectedCharacter1}
        selectedCharacter2={selectedCharacter2}
      />

      <Character2Episodes selectedCharacter={selectedCharacter2} />
    </div>
  )
}

export default EpisodesSection
