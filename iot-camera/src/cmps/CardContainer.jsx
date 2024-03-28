import CardModel from "./CardModel"; // Assuming Card component is in the same directory
import people from "../assets/data/people.js";
import "../assets/css/index.css"

function CardContainer({imgSrc,isCardCriminal}) {


  return (
    <div className={`card-container ${isCardCriminal ? "criminal-card-container" : ""}`}>
      {/* Render only the last card */}
      <CardModel isBgCriminal={isCardCriminal} imageSrc={imgSrc} />
    </div>
  );
}

export default CardContainer;
