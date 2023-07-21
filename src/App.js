import React, { useState } from 'react';
import EpisodesSection from './sections/EpisodesSections';
import CharacterListContainer from './containers/CharacterListContainer';
import Modal from "./components/InitialModal";
import './App.css';

const App = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleModalClose = () => setShowWelcomeModal(false);

  const areBothCharactersSelected = selectedCharacter1 && selectedCharacter2;

  return (
    <div className='app-container'>
      {showWelcomeModal && <Modal onClose={handleModalClose} />}
      
      <div className='characters-container'>
        <CharacterListContainer
          handleSelectCharacter={(character) => setSelectedCharacter1(character)}
          characterTitle={'Character #1'}
          areBothSelected={areBothCharactersSelected}
        />
        <CharacterListContainer
          handleSelectCharacter={(character) => setSelectedCharacter2(character)}
          characterTitle={'Character #2'}
          areBothSelected={areBothCharactersSelected}
        />
      </div>

      {areBothCharactersSelected &&
        <EpisodesSection
          selectedCharacter1={selectedCharacter1}
          selectedCharacter2={selectedCharacter2}
        />
      }
    </div>
  )
};

export default App;
