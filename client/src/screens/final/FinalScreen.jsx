/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Score from "../../components/score/Score";
import "./FinalScreen.css";
import { Button } from "../../components/buttons/Button";
import confetti from "canvas-confetti";

export const FinalScreen = ({ score, startGame }) => {
  useEffect(() => {
    if (score > 300) {
      const timeoutId = setTimeout(() => {
        confetti({
          particleCount: 300,
          spread: 160,
          origin: { y: 0.6 },
        });
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [score]);

  return (
    <section className="finalScreen__section">
      <Score value={score} />
      <Button text="Играть еще" handleButtonClick={startGame}>
        Играть еще
      </Button>
    </section>
  );
};
