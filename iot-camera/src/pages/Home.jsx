import React, { useState, useEffect, useRef } from "react";

// Import components (adjust paths accordingly)
import DataCmp from "../cmps/DataCmp";
import Header from "../cmps/Header";
import SideBarCmp from "../cmps/SideBarMenu";
import CardContainer from "../cmps/CardContainer";
import GateStatistics from "../cmps/GateStatistics";
import ResultImg from "../cmps/ResultImg.jsx";
import PeopleDetailCard from "../cmps/PeopleDetailCard";
import people from "../assets/data/people.js";

// Import services (adjust paths accordingly)
import { connectToMqtt,parseMessage,getMessages,matchCarPlateWithPeople } from "../services/subscriber.service.js";
//import { getCriminalStatus } from '../services/subscriber.service.js';

import "../assets/css/index.css";

function Home() {
  const [mqttData, setMqttData] = useState([]);
  const [isCriminal, setIsCriminal] = useState(null);
  const [client, setClient] = useState([]); // Reference the client instance
  const [messages, setMessages] = useState([]);
  const [people, setPeople] = useState([]); // List of people
  const [photo, setPhoto] = useState([]); // List of Photos
  const [details, setDetails] =useState([]);  

  let person="";

  const handleNewPerson = (newData) => {
    setPeople((currentPeople) => [...currentPeople, newData]);
  };
  useEffect(() => {
    const mqttClient = connectToMqtt((message) => {
      console.log("Received message inside useEffect:", message);
      const personObject = getMessages();
      if (personObject) {
        let lastPersonElement = personObject[personObject.length - 1];
        console.log("lastPersonElement.imgSrc:", lastPersonElement.Imgsrc);
        setPhoto(lastPersonElement.Imgsrc);
        setDetails({
          Date: lastPersonElement.Date,
          Location: lastPersonElement.Location,
          Name: lastPersonElement.Name , 
          PlateNumber : lastPersonElement.PlateNumber
        });
        setIsCriminal(lastPersonElement.Suspeciouse == true);
        handleNewPerson(personObject);
      }
    });
    return () => mqttClient.end();
  }, []);

  return (
    <div className="home-main">
      <div className="container-home">
        <CardContainer imgSrc={photo} isCardCriminal={isCriminal} />
        <PeopleDetailCard details ={details}/>
        <DataCmp people={people} />
        <ResultImg isCriminalLogo={isCriminal} />
      </div>
      </div>
  );
}

export default Home;
