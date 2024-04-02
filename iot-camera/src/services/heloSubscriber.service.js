import mqtt from 'mqtt';
import { isCriminalFound } from './criminalFinder.service.js'; // Adjust the path as needed
import  people  from '../assets/data/people.js'; // Adjust the path as needed

export function connectToMqtt(onMessage) {
    let details=""
    const options = {
      username: 'edgeRtu',
      password: 'Batw1ngs-User12!'
    };
  
    //Batw1ngs-Adm1n1!
    const client = mqtt.connect('mqtt://192.168.0.60:8080', options);
  
    client.on('connect', function () {
      console.log('Connected to MQTT broker');
      client.subscribe('/halo/event');
      client.subscribe('/halo/sensors');
    });
  
    client.on('message', function (topic, message) {
          // message is Buffer
    const data = JSON.parse(message.toString());
    if (topic === '/halo/event') {
        console.log("topic is ",topic);    
        updateEvent(data);

    } else if (topic === '/halo/sensors') {
        console.log("topic is ",topic);   
        updateFromSensor(data)
    }
    console.log("Client:", client);
    return client;
  });
}

// Function to handle data from /halo/event topic
function updateEvent(data) {
    console.log("Event Data:", data);
    // Here, you can add logic to save or process this event data
    // For example, saving to a database, logging, or triggering other actions
}

// Function to handle data from /halo/sensors topic
function updateFromSensor(data) {
    console.log("Sensor Data:", data);
    // Similar to updateEvent, implement your logic to save or process sensor data here
    // This could involve parsing the data for specific conditions, storing in a database, etc.
}