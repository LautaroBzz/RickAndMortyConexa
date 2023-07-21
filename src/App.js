import React, { useState } from 'react';
import EpisodesSection from './sections/EpisodesSections';
import FullList from './sections/FullList';
import Modal from "./components/InitialModal";
import './App.css';

const App = () => {
  const [selectedCharacter1, setSelectedCharacter1] = useState(null);
  const [selectedCharacter2, setSelectedCharacter2] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleModalClose = () => {
    setShowWelcomeModal(false);
  };

  const areBothCharactersSelected = selectedCharacter1 && selectedCharacter2;

  return (
    <div className='app-container'>
      {showWelcomeModal && <Modal onClose={handleModalClose} />}
      
      <div className='characters-container'>
        <FullList
          handleSelectCharacter={(character) => setSelectedCharacter1(character)}
          characterTitle={'Character #1'}
        />
        <FullList
          handleSelectCharacter={(character) => setSelectedCharacter2(character)}
          characterTitle={'Character #2'}
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
