import Title from "./title";
import ScoreBoard from "./scoreboard";
import GameCard from "./cardcontainer";
import "../styles/game.css"
import { useState } from "react";

function GameContainer(){
  const [score] = useState(0);
  const [bestScore] = useState(0);

  return (
    <div id="game-container">
      <Title />
      <ScoreBoard score = {score} bestScore = {bestScore}/>
      <GameCard />
    </div>
  ); 
}

export default GameContainer