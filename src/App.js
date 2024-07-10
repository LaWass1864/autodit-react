import React, { useState, useEffect } from 'react';
import Paper from './component/Paper'; 
import PresentationPage from './component/PresentationPage'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  // Déclaration de la variable pour contrôler l'affichage de la page de présentation
  const [showPresentation, setShowPresentation] = useState(true);

  // Utilisation de useEffect pour vérifier si la présentation a déjà été montrée
  useEffect(() => {
    const presentationShown = localStorage.getItem('presentationShown');
    if (presentationShown) {
      // Si la présentation a déjà été montrée, on met à jour l'état pour ne pas afficher la page de présentation
      setShowPresentation(false);
    }
  }, []);

  // Fonction pour continuer après la présentation
  const handleContinue = () => {
    // Enregistrement dans le localStorage que la présentation a été vue
    localStorage.setItem('presentationShown', 'true');
    // Mise à jour de l'état pour cacher la présentation et afficher le reste de l'application
    setShowPresentation(false);
  };

  return (
    <div className="App">
      {showPresentation ? (
        // Affichage de la page de présentation si showPresentation est vrai
        <PresentationPage onContinue={handleContinue} />
      ) : (
        // Affichage du contenu principal si showPresentation est faux
        <div className="min-h-screen flex items-center justify-center mt-12">
          <Paper />
        </div>
      )}
    </div>
  );
};

export default App;
