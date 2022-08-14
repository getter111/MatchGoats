import { Scoreboard } from "./mainComponents/scoreboard";
import { CharacterGrid } from "./mainComponents/CharacterGrid";

export const Main = (props) => {
  const {characters, handleClick, currentScore,bestScore,} = props

  
  return(
    <main className="main">
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <CharacterGrid characters={characters} handleClick={handleClick} />
    </main>
  ) 
};
