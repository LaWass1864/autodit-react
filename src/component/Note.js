// Note.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Note = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_57t1xy2', // Remplacez par votre Service ID
      'template_rspn9qe', // Remplacez par votre Template ID
      form.current,
      'oCpRBtFl9XwOD5fyi'  // Remplacez par votre Clé publique
    )
    .then((result) => {
      console.log(result.text);
      alert('Votre note et appréciation ont été envoyées, merci ;)!');
    }, (error) => {
      console.log(error.text);
      alert('Une erreur s\'est produite, veuillez réessayer.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="note-appreciation-container">
      <div className="note-title-container">
        <div className="note-content">
          <label htmlFor="note" className="note-label"></label>
          <input type="number" id="note" name="note" className="note-value font-gloria bg-transparent" required min="0" max="20" />
          <span className="max-note font-gloria">/20</span>
        </div>
      </div>
      <div className="note-text-container">
        <label htmlFor="appreciation" className="appreciation-label"></label>
        <textarea id="appreciation" name="appreciation" className="note-text font-gloria bg-transparent" required></textarea>
      </div>
    
      <button type="submit" className="submit-button rounded-lg font-merriweather px-4" style={{ 
        backgroundColor: 'var(--screamin-green)'
      }}>Notez</button>
    </form>
  );
};

export default Note;
