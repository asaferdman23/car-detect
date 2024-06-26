import mqtt from 'mqtt';
import { isCriminalFound } from './criminalFinder.service.js'; // Adjust the path as needed
import  people  from '../assets/data/people.js'; // Adjust the path as needed


export function matchCarPlateWithPeople(carPlate) {
  console.log("Matching car plate with people...", carPlate);
  
  // Assuming people is an array available in your scope containing person objects
  const person = people.find(p => p.carPlateNumber === carPlate);
  
  if (person) {
    console.log("Person found inside matchCarPlateWithPeople:",  person.name); // Log the entire object for debug
    return person.name;
  } else {
    console.log("No person found with car plate:", carPlate);
    return null;
  }
}
export function extractImgFromPeople(carPlate) {
  console.log("Matching car plate with people...", carPlate);
  
  // Assuming people is an array available in your scope containing person objects
  const person = people.find(p => p.carPlateNumber === carPlate);
  
  if (person) {
    console.log("Person found inside matchCarPlateWithPeople:",  person.imgSrc); // Log the entire object for debug
    return person.imgSrc;
  } else {
    console.log("No person found with car plate:", carPlate);
    return null;
  }
}
// Updated parser to extract Time and Plate from the new message format
export function parseMessage(message) {
  const carPlateNumber = extractCarPlateNumber(message);
  const peopleImg = extractImgFromPeople(carPlateNumber);

  let isPersonSuspecious = isCriminalFound(carPlateNumber);
  let peopleName = matchCarPlateWithPeople(carPlateNumber);
  const regex = /(.*): Plate #: (\w+), Camera ID: (.*), Direction: (\d+)/;
  const match = message.match(regex);
  if (match) {
    return {
      Date: match[1], // Extracted time from the message
      PlateNumber: match[2], // Extracted car plate number from the message
      Name: peopleName ? peopleName : "Unkown", // Name unknown from MQTT message
      Suspeciouse: isPersonSuspecious ? isPersonSuspecious : false, // Criminal status unknown from MQTT message
      Location: match[3],
      Imgsrc:peopleImg ? peopleImg : "" // Extracted location from the message
    };
  } else {
    return {
      Date: match[1],
      PlateNumber: match[2],
      Name: peopleName ? peopleName : "Unkown", 
      Suspeciouse: isPersonSuspecious ? isPersonSuspecious : false, 
      Location: match[3],
      Imgsrc:peopleImg ? peopleImg : ""
    };
  }
}

function extractCarPlateNumber(message) {
  console.log("Extracting car plate number..." , message);
  const regex = /Plate #: (\w+)/;
  const match = message.match(regex);
  return match ? match[1] : null;
}

let messages = [];

export function connectToMqtt(onMessage,onPublish) {
  let details=""
  const options = {
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
  };

  //Batw1ngs-Adm1n1!
  const client = mqtt.connect('mqtt://192.168.0.60:8080', options);

  client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe("/plates/event");
  });

  client.on('message', function (topic, message) {
    console.log("Received first message:", message.toString());
    const rawMessage = message.toString();
    // const carPlateNumber = extractCarPlateNumber(message.toString());
    // console.log("Car Plate Number:", carPlateNumber);
    details = parseMessage(rawMessage);
    if (details) {
      messages.push(details);
      onMessage(details);

      const publishData = {
        data : details.Date,
        carPlateNumber:details.PlateNumber
      };
      client.publish('car',JSON.stringify(publishData),(err) =>{
        if (err) {
          console.error('Error publishing:', err);
          onPublish(false);
        } else {
          console.log("Publishing to car :",JSON.stringify(publishData));
          onPublish(true);
        }
      });
    } else {
      parseMessage(rawMessage);
      console.log("Could not parse message or no match found.");
    }
  });
  console.log("Details at the end of the function:", details);
  console.log("Client:", client);
  return client;
}

export const getMessages = () => {
  console.log("Messages from subscriber:", messages);
  return messages;
}

export function wasPublishSuccessful(err) {
  return !err;
}