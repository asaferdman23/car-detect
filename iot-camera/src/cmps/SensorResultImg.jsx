
import React from 'react';
import apprvoed_icon from "/imgs/approved.png"
import wanted_icon from "/imgs/suspicious.png"
import "../assets/css/index.css";
function SensorResultImg({isCriminalLogo = true}) {
  if(isCriminalLogo ===null){
    return null;
  }
    return (
        <div className="sensor-img-result">
          <img className="result-logo" alt="result-logo" src={isCriminalLogo ? wanted_icon : ""} />
        </div>
    );
}
export default SensorResultImg;