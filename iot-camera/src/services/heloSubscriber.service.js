import mqtt from 'mqtt';
import { isCriminalFound } from './criminalFinder.service.js'; // Adjust the path as needed
import  people  from '../assets/data/people.js'; // Adjust the path as needed

export function connectToMqtt(onMessage) {
    const options = {
      username: import.meta.env.VITE_USERNAME,
      password: import.meta.env.VITE_PASSWORD,
    };
  
    //Batw1ngs-Adm1n1!
    const client = mqtt.connect('mqtt://192.168.0.60:8080', options);
  
    client.on('connect', function () {
      console.log('Connected to MQTT broker');
      client.subscribe('/halo/event');
      client.subscribe('/halo/sensors');
    });
  
    client.on('message', function (topic, message) {
    const data = JSON.parse(message.toString());
    if (topic === '/halo/event') {
        updateEvent(data);

    } else if (topic === '/halo/sensors') {
        updateFromSensor(data)
    }
    console.log("Client:", client);
    return client;
  });
}

// Function to handle data from /halo/event topic
function updateEvent(data) {
    console.log("Event Data:", data);
}

// Function to handle data from /halo/sensors topic
function updateFromSensor(data) {
    console.log("Sensor Data:", data);
}