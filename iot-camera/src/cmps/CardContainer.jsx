import CardModel from "./CardModel"; // Assuming Card component is in the same directory
import people from "../assets/data/people.js";

function CardContainer() {
  const myData = people.map((person) => ({
    id: person.id,
    imageSrc: person.imgSrc,
    title: "Card Title 1",
    description: "Card description 1",
  }));

  // Access the last element directly:
  const lastPerson = myData[myData.length - 1];
  console.log(lastPerson);
  return (
    <div className="card-container">
      {/* Render only the last card */}
      <CardModel key={lastPerson.imageSrc} {...lastPerson} />
    </div>
  );
}

export default CardContainer;
