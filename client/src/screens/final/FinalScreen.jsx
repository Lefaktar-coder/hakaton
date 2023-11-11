/* eslint-disable react/prop-types */
import Score from "../../components/score/Score";

export const FinalScreen = ({ score, startGame }) => {
  return (
    <>
      <Score value={score} />
      <button onClick={startGame}>Play again</button>
    </>
  );
};
