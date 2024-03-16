import React from 'react';

const CardModel = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
      <img src={imageSrc} alt={title || 'Card Image'} className="card-image" />
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CardModel;


