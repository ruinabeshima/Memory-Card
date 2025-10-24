import "../styles/game.css"

function GameCard(props){
  return (
    <div className="game-card">
      <p>{props.name}</p>
      <img src={props.img}></img>
    </div>
  );
}

export default GameCard