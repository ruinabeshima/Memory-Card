import "../styles/game.css"

function ScoreBoard(props){
  return (
    <div id="scoreboard">
      <p>Score: {props.score}</p>
      <p>Best Score: {props.bestScore}</p>
    </div>
  );
}

export default ScoreBoard