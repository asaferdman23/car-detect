
import React from 'react';
import apprvoed_icon from "/imgs/approved.png"
import wanted_icon from "/imgs/suspicious.png"

function ResultImg({isCriminalLogo}) {  
  if (isCriminalLogo === null) {
    return null;
}
    return (
        <div className="img-result">
          <img className="result-logo" alt="result-logo" src={isCriminalLogo ?  wanted_icon : apprvoed_icon} />
        </div>
    );
}
export default ResultImg;