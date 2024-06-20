import React from 'react';

const Header = () => {
  // Variables pour afficher les informations
  const name = "Wassila";
  const job = "Développeuse web front-end";
  const availability = "Disponible";

  // Fonction pour formater la date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  };

  const today = formatDate(new Date());

  return (
    <header className="flex justify-between items-start p-4 rounded-t-xl w-full max-w-4xl">
      <div className="flex flex-col items-start space-y-1">
        <h1 className="text-xl font-gloria text-custom-blue underline-red">{name}</h1>
        <p className="text-sm max-w-[90px] font-gloria text-custom-blue underline-red">{job}</p> 
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <p className="text-sm text-green-500 font-gloria">{availability}</p>
        </div>
      </div>
      <div className="text-center self-start">
        <h2 className="text-2xl font-gloria text-custom-blue underline-red">Portfolio</h2>
        <p className="text-sm font-gloria text-custom-blue">Contrôle de connaissance</p>
      </div>
      <div className="text-right self-start">
        <p className="text-sm font-gloria text-custom-blue underline-red">{today}</p>
      </div>
    </header>
  );
}

export default Header;
