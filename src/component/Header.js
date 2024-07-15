import React from 'react';


const Header = () => {
  // Variables pour afficher les informations
  const name = "Wassila";
  const job = "Développeuse front-end || ux design";
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
    <header className="header">
      <div className="header-left desktop-only">
        <h1 className="text-lg font-gloria text-custom-blue underline-red">{name}</h1>
        <p className="text-base font-gloria text-custom-blue underline-red whitespace-pre-wrap">
          {/* Découper le job et le mettre sur deux lignes */}
          {job.split('||').map((part, index) => (
            <React.Fragment key={index}>
              {part.trim()}
              {index < job.split('||').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--screamin-green)' }}></div>
          <p className="text-lg font-gloria text-custom-blue">{availability}</p>
        </div>
      </div>
      <div className="header-center desktop-only">
        <h2 className="text-2xl font-gloria text-custom-blue underline-red">{title}</h2>
      </div>
      <div className="header-right desktop-only">
        <p className="text-lg font-gloria text-custom-blue underline-red">{today}</p>
      </div>
      {/* Ajout de contenu spécifique pour mobile */}
      <div className="header-center mobile-only">
        <p className="text-lg font-gloria text-custom-blue">{subtitle}</p>
        <p className="text-lg font-gloria text-custom-blue underline-red">{today}</p>
      </div>
    </header>
  );
};

export default Header;
