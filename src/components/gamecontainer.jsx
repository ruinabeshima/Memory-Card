import Title from "./title";
import ScoreBoard from "./scoreboard";
import CardContainer from "./cardcontainer";
import "../styles/game.css"
import { useState } from "react";

function GameContainer(){
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());

  const handleCardClick = (id) => {
    if (clickedCards.has(id)) {
      setScore(0);
      setClickedCards(new Set());
    } else {
      const newClicked = new Set(clickedCards);
      newClicked.add(id);
      setClickedCards(newClicked);
      setScore(score + 1);
      setBestScore(score + 1);
    }
  }

  return (
    <div id="game-container">
      <Title />
      <ScoreBoard score = {score} bestScore = {bestScore}/>
      <CardContainer handleCardClick = {handleCardClick}/>
    </div>
  ); 
}

export default GameContainer