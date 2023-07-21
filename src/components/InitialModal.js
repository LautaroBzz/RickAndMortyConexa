import React from 'react';
import '../styles/Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className={"modal-overlay"}>
      <div className="modal">
        <h2>Wubba Lubba Dub Dub!</h2>
        <p>
          Hey there, human! Welcome to the Rick and Morty App.
        </p>
        <p>
          This app allows you to explore characters and episodes from Rick and Morty. 
        </p>
        <p>
          Just select one of each list, and if there is something you don`t like, blame Jerry...
        </p>
        <button className="close-button" onClick={onClose}>
          Get me outta here!
        </button>
      </div>
    </div>
  );
};

export default Modal;
