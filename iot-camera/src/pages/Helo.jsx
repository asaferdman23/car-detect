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
            const dataFromJsonSensors = JSON.parse(message.toString());            
            const chartData = Object.entries(dataFromJsonSensors).map(([key, value]) => ({ sensor: key, value }));
            console.log("data from the sensors",dataFromJsonSensors);
            setSensorData(chartData);
          } else if( topic === '/halo/event'){
            const dataFromJsonEvents = JSON.parse(message.toString());
            setIsPopped(true);
            const dataForDataCmp = Object.entries(dataFromJsonEvents).map(([key, value]) => ({ sensor: key, value }));
            setPeople(dataForDataCmp);
            console.log("data from the events",dataForDataCmp);
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
        <SensorDataCmp isPopped={isPopped}/>
        <SensorResultImg isCriminalLogo={true}/>
      </div>
    );
  }