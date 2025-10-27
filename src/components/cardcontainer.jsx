import "../styles/game.css"
import GameCard from "./gamecard";
import {useEffect, useState} from "react"

function CardContainer(){
  const [allData, setAllData] = useState([])

  useEffect(() => {
    async function GetData(){
      try{

        const names = ["bulbasaur", "charmander", "squirtle", "charmeleon", "ivysaur", "metapod", "venusaur", "pikachu", "raichu", "jigglypuff", "poliwag", "golbat", "nidoqueen", "raticate", "kakuna", "clefable", "ekans", "blastoise", "weedle", "fearow"]

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


  return (
    <div className="card-container">
      {allData.map(data => (
        <GameCard name={data.name} />
      ))}
    </div>
  );
}

export default CardContainer