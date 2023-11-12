/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Score from "../../components/score/Score";
import "./FinalScreen.css";
import { Button } from "../../components/buttons/Button";
import confetti from "canvas-confetti";

export const FinalScreen = ({ score, startGame }) => {
  const [congratulation, setCongratulation] = useState(
    "Многие страхи пока на свободе! Попробуешь еще раз?"
  );

  useEffect(() => {
    if (score >= 50) {
      setCongratulation("Ого, вот это результат!");
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
      <p className="finalScreen__congratulation">{congratulation}</p>
      <Button text="Играть еще" handleButtonClick={startGame} />
    </section>
  );
};
