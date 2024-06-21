import React from 'react';
import Header from './Header';
import Note from './Note';
import Section from './Section';

const Paper = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative shadow-md rounded-xl">
        {/* Feuille de papier */}
        <div
          className="bg-white shadow-md rounded-xl p-4 sm:p-8 relative"
          style={{
            width: '794px',
            height: '1123px',
            backgroundImage: 'url("/css-pattern-by-magicpattern4.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Marge rouge */}
          <div className="absolute left-40 top-0 bottom-0 w-1" style={{ backgroundColor: 'var(--custom-red)' }}></div>

          {/* Trous d'intercalaire */}
          <div className="absolute left-6 top-[9%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5"></div>
          <div className="absolute left-6 top-[15%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded"></div>

          <div className="absolute left-6 top-[29%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5"></div>
          <div className="absolute left-6 top-[35%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded"></div>

          <div className="absolute left-6 top-[50%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5"></div>

          <div className="absolute left-6 top-[66%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded"></div>
          <div className="absolute left-6 top-[72%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5"></div>

          <div className="absolute left-6 top-[90%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded"></div>
          <div className="absolute left-6 top-[96%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5"></div>

          {/* Header de la feuille */}
          <Header />
          {/* Encadré avec la note et l'appréciation */}
          <Note />
          {/* Section 1 */}
       <Section />
        </div>
      </div>
    </div>
  );
}

export default Paper;
