import mqtt from 'mqtt';

export function connectToMqtt(onMessage) {
  const options = {
    username: 'mciotlogin',
    password: 'Batw1ngs-Adm1n1!'
  };

  const client = mqtt.connect("ws://10.100.100.100:1883/mqtt", options);

  client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe("plates/event");
  });

  // mciotlogin
  // Batw1ngs-Adm1n1!

  client.on('message', function (topic, message){
    // Call the onMessage callback when a message is received
    onMessage(message.toString());
  });

  return client;
}