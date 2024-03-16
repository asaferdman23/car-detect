/*
  MQTT Message Handling Code
*/

export function fetchMQTTConnection() {
  
    fetch("/mqttConnDetails", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(function (response) {
          return response.json();
        })
    .catch((error) => console.error("Error getting MQTT Connection :", error));

}