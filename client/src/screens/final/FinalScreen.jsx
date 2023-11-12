/* eslint-disable react/prop-types */
import Score from '../../components/score/Score'

export const FinalScreen = ({ score, startGame }) => {
	return (
		<div>
			<Score value={score} />
			<button
				className='end-game'
				onClick={startGame}>
				Play again
			</button>
		</div>
	)
}
