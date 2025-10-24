import "../styles/game.css"
import GameCard from "./gamecard";

function CardContainer(){
  return (
    <div className="card-container">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />   
    </div>
  );
}

export default CardContainer