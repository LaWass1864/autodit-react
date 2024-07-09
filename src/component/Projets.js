import React, { useEffect } from 'react';
import projets from '../data/projects.json';
import { annotate } from 'rough-notation';

const Projets = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.block');
    elements.forEach(element => {
      const annotation = annotate(element, { type: 'bracket', color: 'var(--custom-red)', padding: [2, 10], brackets: ['left', 'right'], strokeWidth: 3 });
      annotation.show();
    });
  }, []); 

  return (
    <div className="projets">
      {projets.map((projet, index) => (
        <div key={index} className="projet flex mb-6">
          <img src={projet.image} alt={projet.nom} className="projet-image mr-4" />
          <div className="projet-info">
            <h3 className="projet-nom font-gloria mb-2">{projet.nom}</h3>
            <p className="projet-description font-gloria text-custom-blue" dangerouslySetInnerHTML={{ __html: projet.description }}></p>
            <p className="block projet-lien font-gloria text-custom-blue font-semibold">
              <a href={projet.github}>GitHub</a> | <a href={projet.site_web}>Site Web</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projets;
