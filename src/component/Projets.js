import React from 'react';
import projets from '../data/projects.json';

const Projets = () => {
  return (
    <div className="projets">
      {projets.map((projet, index) => (
        <div key={index} className="projet flex mb-6">
          <img src={projet.image} alt={projet.nom} className="projet-image mr-4" />
          <div className="projet-info">
            <h3 className="projet-nom font-gloria mb-2">{projet.nom}</h3>
            <p className="projet-description font-gloria">{projet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projets;
