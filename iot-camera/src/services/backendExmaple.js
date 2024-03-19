const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const mqtt = require('mqtt');

const app = express();
const port = 5173;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// MQTT Client Setup
const options = {
  username: 'mciotlogin',
  password: 'Batw1ngs-Adm1n1!'
};
console.log("before connecting");
const mqttClient = mqtt.connect('mqtt://192.168.0.60:8080', options);

mqttClient.on('connect', () => {
  // Subscribe to a topic
  console.log("trying to connect");
  mqttClient.subscribe("plates/event", (err) => {
    if (!err) {
      console.log('MQTT subscription to plates/event successful');
    } else {
      console.error('MQTT subscription failed', err);
    }
  });
});

// Forward MQTT messages to all connected WebSocket clients
mqttClient.on('message', (topic, message) => {
  console.log(`Received message from MQTT topic ${topic}: ${message.toString()}`);

  // Forward the message to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ topic, message: message.toString() }));
    }
  });
});

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log('Received message from client:', message);
  });
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});