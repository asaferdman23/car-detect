import React, { useState, useEffect, useRef } from 'react';

// Import components (adjust paths accordingly)
import DataCmp from '../cmps/DataCmp';
import Header from '../cmps/Header';
import SideBarCmp from '../cmps/SideBarMenu';
import CardContainer from '../cmps/CardContainer';
import GateStatistics from '../cmps/GateStatistics';
import ResultImg from '../cmps/ResultImg.jsx';

// Import services (adjust paths accordingly)
import { connectToMqtt } from '../services/subscriber.service.js';
import { getCriminalStatus } from '../services/subscriber.service.js';

import '../assets/css/index.css';

function Home() {
  const [mqttData, setMqttData] = useState(null);
  const [isCriminal, setIsCriminal] = useState(null);
  const [client, setClient] = useState(null); // Reference the client instance
  const [messages, setMessages] = useState([]);

  const handleMqttMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  }

  useEffect(() => {
    const mqttClient = connectToMqtt();
    mqttClient.on('message', handleMqttMessage);
    getCriminalStatus(setIsCriminal);
    console.log("return fromthe servie with"); // Connect to MQTT broker
    setClient(mqttClient);
    mqttClientRef.current = mqttClient;

    return () => {
      if (mqttClientRef.current) {
        mqttClientRef.current.end();
      }
    };
  }, []);

  // Use useRef to store the client instance consistently across renders
  const mqttClientRef = useRef(null);

  return (
    <div className="home-main">
      <div className="container-home">
      <div className="message-display">
         {messages.length > 0 ? <h1>{messages}</h1> : <h1>No messages</h1>}
         {messages.map((message, index) => (
           <div key={index}>{message}</div>
         ))}
       </div>
        <CardContainer isCardCriminal ={isCriminal} />
        <DataCmp />
        <ResultImg isCriminalLogo={isCriminal} />
      </div>
    </div>
  );
}

export default Home;
