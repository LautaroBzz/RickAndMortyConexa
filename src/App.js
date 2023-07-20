import React, { useState } from 'react'
import CharacterList from './components/CharacterList'
import Character1Episodes from './components/Character1Episodes'
import Character2Episodes from './components/Character2Episodes'
import SharedEpisodes from './components/SharedEpisodes'
import './App.css'

const App = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState(null)
  const [selectedCharacter2, setSelectedCharacter2] = useState(null)

  const handleSelectCharacter1 = (character) => {
    setSelectedCharacter1(character)
  }

  const handleSelectCharacter2 = (character) => {
    setSelectedCharacter2(character)
  }

  return (
    <div className='app-container'>
      <div className='characters-container'>

        <div className='character-list-container'>
          <h2>Character #1</h2>
          <CharacterList onSelectCharacter={handleSelectCharacter1} />
        </div>

        <div className='line'></div>

        <div className='character-list-container'>
          <h2>Character #2</h2>
          <CharacterList onSelectCharacter={handleSelectCharacter2} />
        </div>

      </div>
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
    </div>
  )
}

export default App
