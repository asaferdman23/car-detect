import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { BarChart } from '@mui/x-charts/BarChart'; // Ensure this import is correct

import "../assets/css/index.css";

const SensorBars = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const client = mqtt.connect('wss://mqtt-broker-address:port', {
      username: 'edgeRtu',
      password: 'Batw1ngs-User12!',
    });

    client.on('connect', () => {
      console.log('Connected to MQTT broker via WebSocket');
      client.subscribe('/halo/sensors');
    });

    client.on('message', (topic, message) => {
      if (topic === '/halo/sensors') {
        const data = JSON.parse(message.toString());
        // Transform data to chart format here
        const chartData = Object.entries(data).map(([key, value]) => {
          return { sensor: key, value: value };
        });
        setSensorData(chartData);
      }
    });

    return () => {
      client.end(); // Clean up connection when component unmounts
    };
  }, []);

  return (
    <div className='sensor-reading-cmp'>
        <h2>Sensor Readings</h2>
        <div className='sensors-event'>
            <BarChart
            title='Sensor Readings'
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['Temp', 'Lux',
                    'TVOC',
                    'CO2eq',
                    'PM2.5',
                    'PM10',
                    'NH3',
                    'NO2',
                    'CO',
                    'Noise',
                    'Move',
                    'AQI',], // Example static data
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
                    },
                ]}
                width={500}
                height={300}
                />
                </div>
                <div className='sensors-sensors'></div>
                <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['Temp', 'Lux',
                    'TVOC',
                    'CO2eq',
                    'PM2.5',
                    'PM10',
                    'NH3',
                    'NO2',
                    'CO',
                    'Noise',
                    'Move',
                    'AQI',], // Example static data
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
                    },
                ]}
                width={500}
                height={300}
                />
    </div>
  );
};

export default SensorBars;
// location:Halo_Sensor_Toha,
// Temp=70.1,
// RH=47.9,
// Lux=2003.4,
// TVOC=193,
// CO2eq=583,
// PM2.5=0,
// PM10=0,
// NH3=0,
// NO2=10.4,
// CO=0.45,
// Noise=52.5,
// Move=16,
// AQI=4,