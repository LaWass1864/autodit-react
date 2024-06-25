// Arrow.js
import React from 'react';

const Arrow = ({ direction, onClick }) => {
  return (
    <div className={`arrow ${direction}`} onClick={onClick}>
      {direction === 'right' ? (
        <img src="/public/image/fleche-droite.png" alt="Flèche droite" />
      ) : (
        <img src="/public/image/fleche-gauche.png" alt="Flèche gauche" />
      )}
    </div>
  );
};

export default Arrow;
