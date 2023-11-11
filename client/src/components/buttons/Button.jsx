/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, handleButtonClick }) => {
  const onButtonClick = () => {
    handleButtonClick();
  };

  return (
    <button className="button" onClick={onButtonClick}>
      {text}
    </button>
  );
};
