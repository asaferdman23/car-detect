import { useEffect, useState } from "react";

import DataCmp from "../cmps/DataCmp";
import Header from "../cmps/Header";
import SideBarCmp from "../cmps/SideBarMenu";
import CardContainer from "../cmps/CardContainer";

import { connectToMqtt } from "../services/subscriber.service.js"; // Assuming the file path is correct
import criminalFinder from "../services/criminalFinder.service.js"; // Assuming the file path is correct

export function Home() {
  const [mqttData, setMqttData] = useState(null);
  const [isCriminal, setIsCriminal] = useState(false);
  const [matchingWanted, setMatchingWanted] = useState(null); // State for matchingWanted
  const [clientFromService, setClientFromService] = useState(null);

  useEffect(() => {
    const client = criminalFinder.start();
    console.log("Client connected to MQTT:", client); // Use commas for concatenation

    setClientFromService(client);

    connectToMqtt((message) => {
      setMqttData(JSON.parse(message));
    });

    return () => {
      client.end(); // Disconnect on unmount
    };
  }, []);
  return (
    <div className="home-main">
      {mqttData && (
            <pre>{JSON.stringify(mqttData, null, 2)}</pre>
      )}
      {/* <AdminNavbar/> */}
      <Header />
      <SideBarCmp />
      <DataCmp />
      <CardContainer  />
    </div>
  );
}

export default Home;
