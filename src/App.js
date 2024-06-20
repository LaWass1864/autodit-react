import React from 'react';
import Paper from './component/Paper';


const App = () => {
  return (

    <div className="App min-h-screen flex items-center justify-center bg-gray-200 mt-12">
      {/* composant de la feuille avec les trous d'intercalaire et la marge rouge  */}
      <Paper />
      
    </div>
  );
};

export default App;