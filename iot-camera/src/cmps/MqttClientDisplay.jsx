import React, { useEffect, useState } from 'react';

function MqttClientDisplay() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5173');
        console.log("Connecting to MQTT broker...");
        ws.onmessage = (event) => {
            if (event.data === 'connected') {
                console.log("Connected to MQTT broker");
            }
            const message = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            {messages.length === 0 ? <h2>No messages received</h2> : <h1> Messages Received: {messages.length}</h1>}
            <ul>
                {messages && messages.map((msg, index) => (
                    <li key={index}>{msg.topic}: {msg.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default MqttClientDisplay;