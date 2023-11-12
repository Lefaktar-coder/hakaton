/* eslint-disable react/prop-types */
import Fears from "../../components/fears/Fears";
import Score from "../../components/score/Score";
import Timer from "../../components/timer/Timer";
import { Button } from "../../components/buttons/Button";
import { TIME_LIMIT } from "../../utils/constants";
import "./GameScreen.css";

export const GameScreen = ({ onWhack, endGame, score, fears }) => {
  return (
    <div className="game-screen__wrapper">
      <Button
        className="end-game"
        text="Закончить игру"
        handleButtonClick={endGame}
      />
      <div className="game-screen__info-box">
        <Timer time={TIME_LIMIT} onEnd={endGame} />
        <Score value={score} />
      </div>
      <Fears fears={fears} onWhack={onWhack}></Fears>
    </div>
  );
};
