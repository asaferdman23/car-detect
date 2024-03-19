import mqtt from 'mqtt';
import isCriminalFound  from './criminalFinder.service.js';
import { useState } from 'react'; // Assuming you're using React



let isCriminal =false;

function extractCarPlateNumber(message) {
  console.log("extracting car plate number..." + message);
  const regex = /Plate #: (\w+)/; 
  const match = message.match(regex);
  return match ? match[1] : null;
}

export function connectToMqtt() {
  const options = { /* ... your options */ };
  const client = mqtt.connect('mqtt://192.168.0.60:8080', options);

  client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe("/plates/event");
  });

  client.on('message', function (topic, message) {
    const rawMessage = message.toString();
    const carPlateNumber = extractCarPlateNumber(rawMessage);
    isCriminal = isCriminalFound(carPlateNumber); 
  });

  return client;
}

export function getCriminalStatus() {
  return isCriminal;
}
