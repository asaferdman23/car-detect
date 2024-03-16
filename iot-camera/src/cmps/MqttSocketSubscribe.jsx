import React, { useState, useEffect } from 'react';

function MyMqttComponent(props) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    connectToMqtt();

    if (!isConnected) {
      connectToMqtt();
    }
  }, [isConnected]); // Run only when isConnected changes

  return (
    <div>
      {isConnected ? (
        <div>
          <h2>Connected to MQTT Broker</h2>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Connecting to MQTT Broker...</p>
      )}
    </div>
  );
}

export default MyMqttComponent;
