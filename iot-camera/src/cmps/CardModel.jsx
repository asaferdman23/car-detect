import React from 'react';

const CardModel = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title || 'Card Image'} className="card-image" />
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CardModel;


