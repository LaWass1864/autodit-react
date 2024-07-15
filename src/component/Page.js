import React from 'react';

const Page = ({ children, pageNumber, pageNumberStyle, pageNumberClass }) => {
  return (
    <div className="shadow-md rounded-xl p-4 sm:p-8 relative page-background" style={{ width: '', minHeight: '1080px' }}>
      {/* Marge rouge */}
      <div className="absolute left-40 top-0 bottom-0 w-1 remove-on-mobile" style={{ backgroundColor: 'var(--custom-red)' }}></div>

      {/* Trous d'intercalaire */}
      <div className="absolute left-6 top-[9%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5 remove-on-mobile"></div>
      <div className="absolute left-6 top-[15%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded remove-on-mobile"></div>
      <div className="absolute left-6 top-[29%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5 remove-on-mobile"></div>
      <div className="absolute left-6 top-[35%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded remove-on-mobile"></div>
      <div className="absolute left-6 top-[50%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5 remove-on-mobile"></div>
      <div className="absolute left-6 top-[66%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded remove-on-mobile"></div>
      <div className="absolute left-6 top-[72%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5 remove-on-mobile"></div>
      <div className="absolute left-6 top-[90%] transform -translate-y-1/2 bg-gray-300 w-4 h-10 sm:w-5 sm:h-10 rounded remove-on-mobile"></div>
      <div className="absolute left-6 top-[96%] transform -translate-y-1/2 bg-gray-300 rounded-full w-4 h-4 sm:w-5 sm:h-5 remove-on-mobile"></div>

      {children}

      {/* Numéro de page */}
      <div className={`absolute bottom-4 right-4 ${pageNumberClass}`} style={pageNumberStyle}>
        {pageNumber}
      </div>
    </div>
  );
}

export default Page;
