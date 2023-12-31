import gsap from 'gsap'
import { useState } from 'react'
import './index.css'
import { FinalScreen } from './screens/final/FinalScreen'
import { GameScreen } from './screens/game/GameScreen'
import { StartScreen } from './screens/start/StartScreen'
import { FEAR_SCORE } from './utils/constants'

const App = () => {
	const [finished, setFinished] = useState(false)
	const [playing, setPlaying] = useState(false)
	const [score, setScore] = useState(0)
	const generateFears = () =>
		new Array(9).fill(0).map(() => ({
			speed: gsap.utils.random(0.5, 1),
			delay: gsap.utils.random(0.5, 4),
			points: FEAR_SCORE,
		}))
	const [fears, setFears] = useState(generateFears())

	const startGame = () => {
		setScore(0)
		setFears(generateFears())
		setPlaying(true)
		setFinished(false)
	}

	const endGame = () => {
		setPlaying(false)
		setFinished(true)
	}

	const onWhack = points => setScore(prevScore => prevScore + points)

	return (
		<div className={`wrapper ${!finished ? 'blur-background' : ''}`}>
			{!playing && !finished && <StartScreen handleButtonClick={() => startGame()} />}
			{playing && (
				<GameScreen
					onWhack={onWhack}
					endGame={endGame}
					score={score}
					fears={fears}
				/>
			)}
			{finished && (
				<FinalScreen
					score={score}
					startGame={startGame}
				/>
			)}
		</div>
	)
}

export default App
