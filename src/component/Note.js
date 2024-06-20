import React from 'react';

const Note = () => {

    const note = "/20";
    const appreciation = "Très bon travail, continuez ainsi!";

    return (
        <div className="note-appreciation-container">
        <div className="note-title-container">
          <h3 className="note-title">Note: {note}</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="note-text-container">
          <p className="note-text">{appreciation}</p>
        </div>
      </div>
    );
};

export default Note;