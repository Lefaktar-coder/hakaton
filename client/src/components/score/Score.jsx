/* eslint-disable react/prop-types */

import "./Score.css";

const Score = ({ value }) => (
  <div className="game-screen__info">{`Счет: ${value}`}</div>
);

export default Score;
