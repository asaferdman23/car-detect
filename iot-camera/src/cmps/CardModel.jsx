import React from 'react';

const CardModel = ({ isBgCriminal,cmp,imageSrc, title, description }) => {
  return (
    <div className={`card ${cmp}`}>
      <div className={`card-content ${isBgCriminal ? 'bg-criminal' : 'bg-not-criminal'}`}>
        <img src={imageSrc} alt={title || 'Card Image'} className="card-image" />
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CardModel;


