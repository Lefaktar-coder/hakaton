import { useState } from "react";
import gsap from "gsap";
import { StartScreen } from "./screens/start/StartScreen";
import { GameScreen } from "./screens/game/GameScreen";
import { FinalScreen } from "./screens/final/FinalScreen";
import { FEAR_SCORE } from "./utils/constants";
import "./index.css";

const App = () => {
  const [finished, setFinished] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const generateFears = () =>
    new Array(5).fill(0).map(() => ({
      speed: gsap.utils.random(0.5, 1),
      delay: gsap.utils.random(0.5, 4),
      points: FEAR_SCORE,
    }));
  const [fears, setFears] = useState(generateFears());

  const startGame = () => {
    setScore(0);
    setFears(generateFears());
    setPlaying(true);
    setFinished(false);
  };

  const endGame = () => {
    setPlaying(false);
    setFinished(true);
  };

  const onWhack = (points) => setScore((prevScore) => prevScore + points);

  return (
    <div className="wrapper">
      {!playing && !finished && (
        <StartScreen handleButtonClick={() => startGame()} />
      )}
      {playing && (
        <GameScreen
          onWhack={onWhack}
          endGame={endGame}
          score={score}
          fears={fears}
        />
      )}
      {finished && <FinalScreen score={score} startGame={startGame} />}
    </div>
  );
};


export default App
