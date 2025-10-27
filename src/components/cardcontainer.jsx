import "../styles/game.css"
import GameCard from "./gamecard";
import {useEffect, useState} from "react"

function CardContainer(props){
  const [allData, setAllData] = useState([])

  useEffect(() => {
    async function GetData(){
      try{

        let names = ["bulbasaur", "charmander", "squirtle", "charmeleon", "ivysaur", "metapod", "venusaur", "pikachu", "raichu", "jigglypuff", "poliwag", "golbat", "nidoqueen", "raticate", "kakuna", "clefable", "ekans", "blastoise", "weedle", "fearow"]

        const responses = await Promise.all(
          names.map(async (name) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            return res.json();
          })
        );

        setAllData(responses)
      } catch (error) {
        console.log("Error", error)
      } 
    }

    GetData()
  }, [])

  function shuffleArray(array) {
    const newArr = array.map(item => ({
    ...item,
    name: item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()
  }));
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  
  return (
    <div className="card-container">
      {shuffleArray(allData).map(data => (
        <GameCard key={data.id} name={data.name} image={data.sprites.front_default} handleCardClick = {props.handleCardClick} dataid={data.id}/>
      ))}
    </div>
  );
}

export default CardContainer