// criminalFinder.service.js
import people from '../assets/data/people.js'; // Adjust the path according to your file structure

export function isCriminalFound(carPlateNumber) {
  // Find a person in the people array by the car plate number
  const person = people.find(p => p.carPlateNumber === carPlateNumber);
  console.log(`isCriminalFound Person found: ${JSON.stringify(person)}}`);
  // If a person is found and is marked as suspicious, return true
  if (person && person.suspicious === "yes") {
    console.log(`Suspicious person found: ${person.name}`);
    return true;
  } else {
    console.log('No suspicious person found for this car plate number.');
    return false;
  }
}

