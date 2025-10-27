import "../styles/game.css"

function GameCard(props){
  return (
    <div className="game-card" onClick={() => props.handleCardClick(props.dataid)}>
      <p>{props.name}</p>
      <img src={props.image}></img>
    </div>
  );
}

export default GameCard