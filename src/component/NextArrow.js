import React from 'react';

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
    />
  );
};
