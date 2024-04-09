import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import "../assets/css/index.css";

import DataCmp from "../cmps/DataCmp";
import Header from "../cmps/Header";
import SideBarCmp from "../cmps/SideBarMenu";
import CardContainer from "../cmps/CardContainer";
import GateStatistics from "../cmps/GateStatistics";
import ResultImg from "../cmps/ResultImg.jsx";
import PeopleDetailCard from "../cmps/PeopleDetailCard";
import people from "../assets/data/people.js";

import {
  connectToMqtt,
  parseMessage,
  getMessages,
  matchCarPlateWithPeople,
} from "../services/subscriber.service.js";

Modal.setAppElement('#root');

function Home() {
  const [mqttData, setMqttData] = useState([]);
  const [isCriminal, setIsCriminal] = useState(null);
  const [client, setClient] = useState([]); // Reference the client instance
  const [messages, setMessages] = useState([]);
  const [people, setPeople] = useState([]); // List of people
  const [photo, setPhoto] = useState([]); // List of Photos
  const [isCrimnalLogo, setIsCrimnalLogo] = useState(null); // List of Photos
  const [details, setDetails] = useState([]);
  const [publishSuccess, setPublishDataSuccess] = useState(null);

  let person = "";

  const handleNewPerson = (newData) => {
    setPeople((currentPeople) => [...currentPeople, newData]);
  };
  useEffect(() => {
    const mqttClient = connectToMqtt(
      (message) => {
        console.log("Received message inside useEffect:", message);
        const personObject = getMessages();
        if (personObject) {
          let lastPersonElement = personObject[personObject.length - 1];
          console.log("lastPersonElement.imgSrc:", lastPersonElement.Imgsrc);
          setPhoto(lastPersonElement.Imgsrc);
          setDetails({
            Date: lastPersonElement.Date,
            Location: lastPersonElement.Location,
            Name: lastPersonElement.Name,
            PlateNumber: lastPersonElement.PlateNumber,
          });
          setIsCriminal(lastPersonElement.Suspeciouse == true);
          setIsCrimnalLogo(lastPersonElement.Suspeciouse == true);
          handleNewPerson(personObject);
        }
      },
      (success) => {
        setPublishDataSuccess(success);
        console.log("Published to car:", success);
      }
    );
  }, []);

  const closeModal = () => {
    setPublishDataSuccess(null);
  };

  return (
    <div className="home-main">
      <div className="container-home">
        <CardContainer imgSrc={photo} isCardCriminal={isCriminal} />
        <PeopleDetailCard details={details} />
        <DataCmp people={people} />
        <ResultImg isCriminalLogo={isCrimnalLogo} />
      </div>
      <Modal
        isOpen={publishSuccess === true}
        onRequestClose={closeModal}
        contentLabel="Publish Success"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Details was sent to the officer `${details}`</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Home;
