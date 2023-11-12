/* eslint-disable react/prop-types */
import { useState } from "react";
import "./StartScreen.css";
import { Button } from "../../components/buttons/Button";
import { Modal } from "../../components/modal/Modal";
import { Rules } from "../../components/rules/Rules";

export const StartScreen = ({ handleButtonClick }) => {
  const [isRulesModalOpen, setRulesModalOpen] = useState(false);

  const handleRulesClick = () => {
    setRulesModalOpen(true);
  };

  const closeModal = () => {
    setRulesModalOpen(false);
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

        <Modal isOpen={isRulesModalOpen} onRequestClose={closeModal}>
          <Rules />
        </Modal>
      </div>
    </section>
  );
};
