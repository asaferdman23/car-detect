// mqtt.js
import mqtt from 'mqtt';

export function connectToMqtt(onMessage) {
  const options = {
    username: 'edgeRtu',
    password: 'Batw1ngs-User12!'
  };

  const client = mqtt.connect('mqtt://10.100.100.100:1883', options);

  client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe("/plates/event");
  });

  client.on('message', function (topic, message){
    // Call the onMessage callback when a message is received
    onMessage(message.toString());
  });

  return client;
}