import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import { compareResults, pickRandomChoice } from "../helpers/gameHelpers";

export default function Game(props) {
  const [isCheating, setIsCheating] = useState(true);
  const [winner, setWinner] = useState(null);
  // const [playerChoice, setPlayerChoice] = useState(null)

  const toggleCheating = () => setIsCheating(!isCheating);

  const determineWinner = (playerChoice) => {
    if (isCheating) {
      return setTimeout(() => {
        setWinner("computerWin");
      }, 1500);
    }

    const computerChoice = pickRandomChoice(Math.random());

    const winner = compareResults(playerChoice, computerChoice);
    setTimeout(() => {
      setWinner(winner);
    }, 1500);
  };

  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleCheating={toggleCheating} />
        <Player determineWinner={determineWinner} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
