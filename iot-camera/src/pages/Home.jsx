import React, { useState, useEffect, useRef } from 'react';
import mqtt from 'mqtt';

// Import components (adjust paths accordingly)
import DataCmp from '../cmps/DataCmp';
import Header from '../cmps/Header';
import SideBarCmp from '../cmps/SideBarMenu';
import CardContainer from '../cmps/CardContainer';
import GateStatistics from '../cmps/GateStatistics';
import ResultImg from '../cmps/ResultImg.jsx';

// Import services (adjust paths accordingly)
import { connectToMqtt } from '../services/subscriber.service.js';
import criminalFinder from '../services/criminalFinder.service.js'; // (Optional)

import '../assets/css/index.css';

function Home() {
  const [mqttData, setMqttData] = useState(null);
  const [isCriminal, setIsCriminal] = useState(true);
  const [client, setClient] = useState(null); // Reference the client instance
  const [messages, setMessages] = useState([]);

  // Use useRef to store the client instance consistently across renders
  const mqttClientRef = useRef(null);

  // useEffect(() => {
  //   // Fetch MQTT connection details (consider security best practices)
  //   fetch('/mqttConnDetails')
  //     .then(response => response.json())
  //     .then(data => {
  //       const { mqttServer, mqttTopic } = data; // Example destructuring

  //       // Connect to MQTT broker securely
  //       const mqttClient = connectToMqtt(mqttServer, {
  //         username: 'mciotlogin',
  //         password: 'Batw1ngs-Adm1n1!',
  //         // ... other connection options
  //       });

  //       setClient(mqttClient); // Store the client reference initially

  //       mqttClientRef.current = mqttClient; // Store client in useRef

  //       mqttClient.on('connect', () => {
  //         console.log('Connected to MQTT broker');
  //         mqttClient.subscribe(mqttTopic, (err) => {
  //           if (err) {
  //             console.error('Subscription error:', err);
  //           }
  //         });
  //       });

  //       // Handle incoming messages
  //       mqttClient.on('message', async (topic, message) => {
  //         const data = await fetchData(message.toString()); // Replace with your data fetching logic
  //         setMqttData(data); // Update state with received data
  //         // ... (Process the data, e.g., update isCriminal and display in ResultImg)
  //       });
  //     })
  //     .catch(error => console.error('Error fetching MQTT connection details:', error));

  //   // Cleanup function: Disconnect from MQTT broker on unmount
  //   return () => {
  //     if (mqttClientRef.current) {
  //       mqttClientRef.current.end(); // Disconnect from MQTT broker
  //     }
  //   };
  // }, []); // Run only once on component mount


  return (
    <div className="home-main">
      <div className="container-home">
        {/* <GateStatistics /> */}
        <CardContainer />
        <DataCmp />
        <ResultImg isCriminal={isCriminal} />
      </div>
    </div>
  );
}

export default Home;
