import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Exercice4 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_57t1xy2', 
      'template_rspn9qe', 
      form.current,
      'oCpRBtFl9XwOD5fyi'  
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
