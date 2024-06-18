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
          <div className="absolute left-6 top-[9%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-6 top-[15%] transform -translate-y-1/2 bg-gray-300" style={{ width: '20px', height: '40px', borderRadius: '10px' }}></div>

          <div className="absolute left-6 top-[29%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
          <div className="absolute left-6 top-[35%] transform -translate-y-1/2 bg-gray-300" style={{ width: '20px', height: '40px', borderRadius: '10px' }}></div>

          <div className="absolute left-6 top-[50%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>
         

          <div className="absolute left-6 top-[66%] transform -translate-y-1/2 bg-gray-300" style={{ width: '20px', height: '40px', borderRadius: '10px' }}></div>
          <div className="absolute left-6 top-[72%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>

          <div className="absolute left-6 top-[90%] transform -translate-y-1/2 bg-gray-300" style={{ width: '20px', height: '40px', borderRadius: '10px' }}></div>
          <div className="absolute left-6 top-[96%] transform -translate-y-1/2 bg-gray-300 rounded-full" style={{ width: '20px', height: '20px' }}></div>



        </div>
      </div>
    </div>
  );
}

export default App;
