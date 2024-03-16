const express = require('express');
const bodyParser = require('body-parser'); // Enable JSON parsing

const app = express();
const port = 3000;

// Configure environment variables (replace with secure methods)
require('dotenv').config();

// Template engine (if applicable)
app.set('view engine', 'ejs'); // Example: EJS template engine

// Serve static files
app.use(express.static('public'));

// Body parsing middleware
app.use(bodyParser.json());

// Route to provide MQTT connection details
app.get('/mqttConnDetails', (req, res) => {
  // Consider security implications of directly returning connection details:
  // - Sanitize or obfuscate sensitive information if necessary.
  const mqttServer = 'ws://10.100.100.100:8080/mqtt'; // Example configuration
  const mqttTopic = 'plates/event'; // Example configuration

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ mqttServer, mqttTopic }));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});