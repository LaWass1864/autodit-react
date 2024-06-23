import React from 'react';
import Paper from './component/Paper';  // Assurez-vous que le chemin est correct
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-200 mt-12">
      <Paper />
    </div>
  );
};

export default App;
