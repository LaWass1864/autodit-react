import React from 'react';

const Header = () => {
  // Variables pour afficher les informations
  const name = "Wassila";
  const job = "Développeuse\nfront-end";
  const availability = "Disponible";

  const title = "Portfolio";
  const subtitle = "Contrôle de connaissance";

  // Fonction pour formater la date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  };

  const today = formatDate(new Date());

  return (
    <header className="flex justify-between items-start p-3 rounded-t-xl w-full max-w-4xl">
      <div className="flex flex-col items-start space-y-1">
        <h1 className="text-lg font-gloria text-custom-blue underline-red">{name}</h1>
        <p className="text-base font-gloria text-custom-blue underline-red whitespace-pre-wrap">{job}</p>
        <div className="flex items-center space-x-2">
        <div className= "w-3 h-3 rounded-full " style={{ backgroundColor: 'var(--screamin-green)' }}></div>
          <p className="text-lg font-gloria text-custom-blue" >{availability}</p>
        </div>
      </div>
      <div className="text-center self-start">
        <h2 className="text-2xl font-gloria text-custom-blue underline-red">{title}</h2>
        <p className="text-lg font-gloria text-custom-blue">{subtitle}</p>
      </div>
      <div className="text-right self-start">
        <p className="text-lg font-gloria text-custom-blue underline-red">{today}</p>
      </div>
    </header>
  );
}

export default Header;
