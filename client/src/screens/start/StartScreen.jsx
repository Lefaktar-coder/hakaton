import "./StartScreen.css";
import { Button } from "../../components/buttons/Button";

export const StartScreen = () => {
  const handleStartClick = () => {
    console.log("clicked");
  };

  const handleRulesClick = () => {
    console.log("rules!!!");
  };

  return (
    <section className="startScreen__section">
      <h2>Ловец страхов</h2>
      <p className="startScreen__text">
        {" "}
        Кликай мышкой по страхам, чтобы их поймать. У тебя есть 30 секунд!
      </p>
      <div className="startScreen__button-box">
        <Button text="Начать!" handleButtonClick={() => handleStartClick()} />
        <Button text="Правила" handleButtonClick={() => handleRulesClick()} />
      </div>
    </section>
  );
};
