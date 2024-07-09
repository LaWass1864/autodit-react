// src/components/PresentationPage.js

import React, { useEffect, useState } from 'react';

const PresentationPage = ({ onContinue }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Auto Dit React 🚀';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 150); // Vitesse de l'animation
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="presentation-page">
      <div className="presentation-content">
        <h1 className="animated-text">{displayedText}</h1>
        <p className="presentation-text">
          Mon portfolio est en perpétuelle évolution. Je travaille dur pour ajouter des couleurs éclatantes 🎨, rendre le site super responsive 📱, peaufiner les détails 🛠️, et créer une page de présentation géniale ✨.
        </p>
        <button className="button-text" onClick={onContinue}>Entrer</button>
      </div>
    </div>
  );
};

export default PresentationPage;
