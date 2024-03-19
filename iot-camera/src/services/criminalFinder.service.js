import people from "../assets/data/people.js"; 
import wantedPeople from "../assets/data/wanted.js"; 

function isCriminalFound(carPlateNumber) {
  const matchingPerson = people.find(person => person.carPlateNumber === carPlateNumber);
  if (matchingPerson && matchingPerson.criminal === "yes") {
    return true;
  }

  const isInWantedList = wantedPeople.some(person => person.carPlateNumber === carPlateNumber);
  return isInWantedList;
}
export default isCriminalFound;
