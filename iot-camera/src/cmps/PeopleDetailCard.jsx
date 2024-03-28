import React from 'react';

const PeopleDetailCard = ({ details }) => {
    console.log("PeopleDetailCard details:", details);
    return (
        <div className="card-detail">
            <div className="card-body">
                <p className="card-text">Car Plate Number: {details.PlateNumber}</p>
                <p className="card-text">Name: {details.Name}</p>
                <p className="card-text">Date: {details.Date}</p>
            </div>
        </div>
    );
};

export default PeopleDetailCard;