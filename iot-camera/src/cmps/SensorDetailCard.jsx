import React from 'react';
import "../assets/css/index.css"


const SensorDetailCard = ({ details }) => {
    console.log("PeopleDetailCard details:", details);
    const currentDateTime = new Date().toLocaleString();
    console.log(currentDateTime);
    return (
        <div className="sensor-card-detail">
            <div className="card-body">
                <p className="sensor-card-text">Date: {currentDateTime}</p>
                <p className="sensor-card-text">Loacation: Halo_Sensor_Toha</p>
                <p className="sensor-card-text">Event: Motion</p>
                {/* <p className="sensor-card-text">:</p> */}
            </div>
        </div>
    );
};

export default SensorDetailCard;