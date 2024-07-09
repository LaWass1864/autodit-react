import React, { useState } from 'react';
import Paper from './component/Paper'; // Assurez-vous que le chemin est correct
import PresentationPage from './component/PresentationPage'; // Assurez-vous que le chemin est correct
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [showPresentation, setShowPresentation] = useState(true);

  const handleContinue = () => {
    setShowPresentation(false);
  };

  return (
    <div className="App">
      {showPresentation ? (
        <PresentationPage onContinue={handleContinue} />
      ) : (
        <div className="min-h-screen flex items-center justify-center mt-12">
          <Paper />
        </div>
      )}
    </div>
  );
};

export default App;
