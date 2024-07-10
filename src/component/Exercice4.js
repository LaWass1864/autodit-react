import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Charge les variables d'environnement
require('dotenv').config();

const Exercice4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,   
    )
    .then((result) => {
      console.log(result.text);
      alert('Votre message a été envoyé, merci ;)!');
    }, (error) => {
      console.log(error.text);
      alert('Une erreur s\'est produite, veuillez réessayer.');
    });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Nom :</label>
          <input type="text" id="user_name" name="user_name" className="user-name-input sketchy" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" className="email-input sketchy" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" className="message-input sketchy" required></textarea>
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default Exercice4;
