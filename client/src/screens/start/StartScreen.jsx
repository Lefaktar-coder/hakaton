/* eslint-disable react/prop-types */
import { useState } from "react";
import "./StartScreen.css";
import { Button } from "../../components/buttons/Button";
import { Modal } from "../../components/modal/Modal";
import { Rules } from "../../components/rules/Rules";
import { Legend } from "../../components/legend/Legend";

export const StartScreen = ({ handleButtonClick }) => {
  const [isRulesModalOpen, setRulesModalOpen] = useState(false);
  const [isLegendModalOpen, setLegendModalOpen] = useState(false);

  const handleRulesClick = () => {
    setRulesModalOpen(true);
  };

  const handleLegendClick = () => {
    setLegendModalOpen(true);
  };

  const closeModal = () => {
    setRulesModalOpen(false);
    setLegendModalOpen(false);
  };

  return (
    <section className="startScreen__section">
      <h1 className="startScreen__title">Ловец эмоджи-страхов 🏹</h1>
      <p className="startScreen__text">
        {" "}
        Кликай мышкой по эмоджи - это страхи, которые нужно поймать. У тебя есть
        30 секунд!
      </p>
      <div className="startScreen__button-box">
        <Button text="Играть" handleButtonClick={handleButtonClick} />
        <Button text="Правила" handleButtonClick={() => handleRulesClick()} />
        <Button text="Страхи" handleButtonClick={() => handleLegendClick()} />

        <Modal isOpen={isRulesModalOpen} onRequestClose={closeModal}>
          <Rules />
        </Modal>

        <Modal isOpen={isLegendModalOpen} onRequestClose={closeModal}>
          <Legend />
        </Modal>
      </div>
    </section>
  );
};
