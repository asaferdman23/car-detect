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
    const [details, setDetails] = useState(null); // Dummy state for SensorDetailCard
    const [people, setPeople] = useState(null); // Dummy state for SensorDataCmp
    const [isCriminal, setIsCriminal] = useState(null); // Dummy state for SensorResultImg
  
    useEffect(() => {
      // Setup MQTT connection
      const client = mqtt.connect('mqtt://192.168.0.60:8080', {
        username: 'edgeRtu',
        password: 'Batw1ngs-User12!',
      });
  
      client.on('connect', () => {
        console.log('Connected to MQTT broker via WebSocket');
        client.subscribe('/halo/sensors');
      });
  
      client.on('message', (topic, message) => {
        console.log('Received message:', message.toString());
        if (topic === '/halo/sensors') {
          const dataFromJsonSensors = JSON.parse(message.toString());
          // Transform data to chart format here
          const chartData = Object.entries(dataFromJsonSensors).map(([key, value]) => ({ sensor: key, value }));
          setSensorData(chartData);
        } else if( topic === '/halo/events'){
            const dataFromJsonEvents = JSON.parse(message.toString());
            setPeople(dataFromJsonEvents);
            console.log("data from the events",dataFromJsonEvents);
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
        <SensorDataCmp/>
        <SensorResultImg isCriminalLogo={isCriminal}/>
      </div>
    );
  }