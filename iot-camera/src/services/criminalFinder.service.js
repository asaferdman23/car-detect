import { connectToMqtt } from "../services/subscriber.service.js"; // Assuming correct path
import wantedPeople from "../assets/data/wanted.js"; // Assuming correct path

const criminalFinder = {
  start: () => {
    const client = connectToMqtt((message) => {
      const plateNumber = message.toString();
      const matchingWanted = wantedPeople.people.find(
        (person) => person.carPlateNumber === plateNumber
      );

      // Update criminal state and potentially trigger actions based on the result
      console.log(`Criminal Alert: ${matchingWanted ? 'Yes' : 'No'}`); // Log alert status
      // You can further extend this to trigger actions like sending notifications

      // ... other processing logic as needed
    });

    return client; // Return the client instance for potential cleanup (optional)
  },
};

export default criminalFinder;
