import React, { useState, useEffect } from 'react';
import { connectToMqtt } from '../services/subscriber.service.js';

function SubscribeMqttCmp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Connect to MQTT when the component mounts
    const client = connectToMqtt((message: string) => {
      // Update the state when a message is received
      setData(JSON.parse(message));
    });

    // Disconnect from MQTT when the component unmounts
    return () => {
      client.end();
    };
  }, []);

  // Render the data
  return (
    <div>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default SubscribeMqttCmp;