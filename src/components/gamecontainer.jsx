import Title from "./title";
import ScoreBoard from "./scoreboard";
import "../styles/game.css"
import { useState } from "react";

function GameContainer(){
  const [score] = useState(0);
  const [bestScore] = useState(0);

  return (
    <div id="game-container">
      <Title />
      <ScoreBoard score = {score} bestScore = {bestScore}/>
    </div>
  ); 
}

export default GameContainer