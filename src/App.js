import React, { useState, useEffect } from 'react';
import Paper from './component/Paper'; 
import PresentationPage from './component/PresentationPage'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [showPresentation, setShowPresentation] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowPresentation(false);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('hasVisited', 'true');
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
