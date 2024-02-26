import React from 'react';

const Card = ({ logement }) => {
  return (
    <div className='Card'>
      <img
        src={logement.cover}
        alt={logement.title}
      />
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Card;
