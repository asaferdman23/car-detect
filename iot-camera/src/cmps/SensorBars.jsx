// SensorBars.jsx
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt'; // Uncomment this when using actual MQTT
import { BarChart } from '@mui/x-charts/BarChart'; // Make sure this import path matches your package
import "../assets/css/index.css"; // Verify this path is correct for your project structure

const SensorBars = () => {
  const [sensorData, setSensorData] = useState(null); 
  const dummyData = {
    location: "Halo_Sensor_Toha",
    Temp: 70.1,
    RH: 47.9,
    Lux: 2003.4,
    TVOC: 193,
    "CO2eq": 583,
    "PM2.5": 0,
    "PM10": 0,
    NH3: 0,
    NO2: 10.4,
    CO: 0.45,
    Noise: 52.5,
    Move: 16,
    AQI: 4,
  };
  // Start with null to check if data is received
  useEffect(() => {
     // Simulate a delay in receiving MQTT data
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
        const data = JSON.parse(message.toString());
        // Transform data to chart format here
        const chartData = Object.entries(data).map(([key, value]) => ({ sensor: key, value }));
        setSensorData(chartData?.length > 0 ? chartData : dummyData); 
      }
    });
    setTimeout(() => {
      setSensorData(dummyData); // Simulate receiving data
    }, 1000);
  }, []);

  // Prepare data for the chart, either using actual data received or dummy data if not received
  const prepareChartData = () => {
    if (!sensorData) {
      // Fallback dummy data if no data is received
      return [
        { name: 'Temp', value: 22 }, // Example dummy values
        { name: 'RH', value: 50 },
        { name: 'Lux', value: 1500 },
        // Add more dummy sensor data as needed
      ];
    } else {
      // Convert sensorData object to array format required by BarChart
      return Object.entries(sensorData).filter(([key, _]) => key !== 'location').map(([key, value]) => ({
        name: key,
        value: value,
      }));
    }
  };

  const chartData = prepareChartData();

  return (
    <div className='sensor-reading-cmp'>
      <h2>Sensor Readings: {sensorData ? sensorData.location : 'Loading...'}</h2>
      <BarChart
        title="Sensor Data"
        xAxis={[{ id: 'sensor', data: chartData.map(item => item.name), scaleType: 'band' }]}
        series={[{ data: chartData.map(item => item.value) }]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default SensorBars;