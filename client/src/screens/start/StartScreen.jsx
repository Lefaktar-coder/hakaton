/* eslint-disable react/prop-types */
import "./StartScreen.css";
import { Button } from "../../components/buttons/Button";

export const StartScreen = ({ handleButtonClick }) => {
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
        <Button text="Начать" handleButtonClick={handleButtonClick} />
        <Button text="Правила" handleButtonClick={() => handleRulesClick()} />
      </div>
    </section>
  );
};
