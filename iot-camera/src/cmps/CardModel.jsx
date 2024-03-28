import React from 'react';

const CardModel = ({ isBgCriminal,cmp,imageSrc }) => {
  console.log("CardModel imgSrc:", imageSrc);

  return (
    <div className={`card ${cmp}`}>
      <div className={`card-content ${isBgCriminal ? 'bg-criminal' : 'bg-not-criminal'}`}>
        <img src={imageSrc} alt={'Card Image'} className="card-image" />
      </div>
    </div>
  );
};

export default CardModel;


