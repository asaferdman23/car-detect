import "../assets/css/index.css";
import SensorBars from "../cmps/SensorBars";
import CardContainer from "../cmps/CardContainer"
import PeopleDetailCard from "../cmps/PeopleDetailCard"
import SensorDataCmp from "../cmps/SensorDataCmp"
import ResultImg from "../cmps/ResultImg"
import SensorDetailCard from "../cmps/SensorDetailCard";
import SensorResultImg from "../cmps/SensorResultImg";
import SensorApexChart from "../cmps/SensorApexChart";
import { useEffect,useState } from "react";
import mqtt from "mqtt"


export function Helo() {
    const [sensorData, setSensorData] = useState([]);
    const [details, setDetails] = useState(null);
    const [people, setPeople] = useState(null);
    const [isCriminal, setIsCriminal] = useState(null);
    const [isPopped, setIsPopped] = useState(false);
  
    useEffect(() => {
      // Setup MQTT connection
      const client = mqtt.connect('mqtt://192.168.0.60:8080', {
        username: 'edgeRtu',
        password: 'Batw1ngs-User12!',
        //192.168.0.60
      });
  
      client.on('connect', () => {
        console.log('Connected to MQTT broker via WebSocket');
        client.subscribe(['/halo/sensors', '/halo/event']);
      });
  
      client.on('message', (topic, message) => {
        console.log('Received message:', message.toString());
        try {
          if (topic === '/halo/sensors') {
            console.log('Parsing message:', message.toString(), 'Length:', message.toString().length);
            const messageString = message.toString();

            const tempIndex = messageString.indexOf('Temp:');
            if (tempIndex === -1) {
                console.error('Could not find Temp in message:', message.toString());
                return;
            }

            const dataPart = messageString.substring(tempIndex).trim();
            const pairs = dataPart.split(',').map(pair => pair.trim());
            const dataFromJsonSensors = pairs.reduce((obj, pair) => {
                const [key, value] = pair.split(':').map(part => part.trim());
                obj[key] = value;
                return obj;
            }, {});

            const chartData = Object.entries(dataFromJsonSensors).map(([key, value]) => ({ sensor: key, value }));
            console.log("data from the sensors",dataFromJsonSensors);
            setSensorData(chartData);
          } else if( topic === '/halo/event'){
            const messageString = message.toString();
            const locationMatch = messageString.match(/Location #:\s*(.*?),/);
            const eventMatch = messageString.match(/Event:\s*(.*?),/);

            if (!locationMatch || !eventMatch) {
                console.error('Could not find location or event in message:', message.toString());
                return;
            }

            const location = locationMatch[1].trim();
            const eventName = eventMatch[1].trim();

            const person = {
                date: new Date().toLocaleString(),
                location: location,
                eventName: eventName,
            };
            setPeople(person);
            console.log("data from the events", person);
            setDetails(person);
        }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          console.error('Offending message:', message.toString());
        }
      });
  
      // Disconnect on cleanup
      return () => {
        client.end();
      };
    }, []);
  
    // Simulate a delay in receiving MQTT data (This might be removed if not needed)
    // useEffect(() => {
    //   setTimeout(() => {
    //     setSensorData(dummyData); // Set your dummyData here
    //   }, 1000);
    // }, []);
  
    return (
      <div className="helo-container">
        <SensorApexChart data={sensorData}/>
        <SensorDetailCard details={details}/>
        <SensorDataCmp people={people}/>
        <SensorResultImg isCriminalLogo={true}/>
      </div>
    );
  }