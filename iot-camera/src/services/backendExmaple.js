const express = require('express');
const { MongoClient } = require('mongodb');
const mqtt = require('mqtt');

const app = express();
const port = 3000; // Port for the Express server
const mongoUrl = 'mongodb://localhost:27017'; // MongoDB connection string
const dbName = 'myDatabase'; // Database name
const collectionName = 'mqttMessages'; // Collection name

// Connect to the MQTT broker
const mqttClient = mqtt.connect('mqtt://your_mqtt_broker_address', {
  username: 'yourUsername',
  password: 'yourPassword',
});

// Connect to MongoDB
MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Subscribe to the MQTT broker
  mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttClient.subscribe('your/topic', (err) => {
      if (err) throw err;
    });
  });

  // Handle incoming MQTT messages
  mqttClient.on('message', (topic, message) => {
    const messageObject = { topic, message: message.toString(), timestamp: new Date() };
    // Insert message into MongoDB
    collection.insertOne(messageObject, (err, result) => {
      if (err) throw err;
      console.log("Message inserted into MongoDB", messageObject);
    });
  });

  // Express route to fetch data
  app.get('/data', async (req, res) => {
    try {
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
  });
});