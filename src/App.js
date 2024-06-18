import React from 'react';

function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-200 mt-12">
      <div className="relative" style={{ width: '824px', height: '1123px' }}>
        {/* Feuille de papier */}
        <div
          className="bg-white shadow-md rounded-xl p-8 relative"
          style={{
            width: '794px',
            height: '1123px',
            backgroundImage: 'url("/css-pattern-by-magicpattern4.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginLeft: '30px' // Décalage pour les trous
          }}
        >
          {/* Trous d'intercalaire */}
          <div className="absolute left-4 top-[5%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[15%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[25%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[35%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[45%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[55%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[65%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[75%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[85%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-4 top-[95%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>


        </div>
      </div>
    </div>
  );
}

export default App;
