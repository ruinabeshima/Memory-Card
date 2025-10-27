import "../styles/game.css"
import GameCard from "./gamecard";
import {useEffect} from "react"

function CardContainer(){
  useEffect(() => {
    async function GetData(){
      const names = ["bulbasaur", "charmander", "squirtle", "charmeleon", "ivysaur", "metapod", "venusaur", "pikachu", "raichu", "jigglypuff", "poliwag", "golbat", "nidoqueen", "raticate", "kakuna", "clefable", "ekans", "blastoise", "weedle", "fearow"]

      try{
        for (let i=0; i<names.length; i++){
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${names[i]}`)
          const data = await response.json()
          console.log(data.species.name)
        }
        
      } catch (error) {
        console.log("Error", error)
      } 
    }

    GetData()
  }, [])


  return (
    <div className="card-container">
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />   
      <GameCard /> 
      <GameCard /> 

    </div>
  );
}

export default CardContainer