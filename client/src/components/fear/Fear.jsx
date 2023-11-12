/* eslint-disable react/prop-types */
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'
import { EMOJIS } from '../../utils/constants'
import './Fear.css'

const Fear = ({ points, delay, speed, onWhack, pointsMin = 10 }) => {
	const buttonRef = useRef(null)
	const bobRef = useRef(null)
	const pointsRef = useRef(points)
	const [whacked, setWhacked] = useState(false)
	const [emoji, setEmoji] = useState(getRandomEmoji())

	function getRandomEmoji() {
		const randomIndex = Math.floor(Math.random() * EMOJIS.length)
		return EMOJIS[randomIndex]
	}

	const whack = useCallback(() => {
		if (!whacked) {
			setWhacked(true)
			onWhack(pointsRef.current)

			gsap.to(buttonRef.current, {
				scale: 2.3,
				opacity: 0,
				y: -100,
				duration: 0.5,
				onComplete: () => {
					setWhacked(false)
					setEmoji(getRandomEmoji())
					pointsRef.current = points
					bobRef.current?.restart()
					gsap.set(buttonRef.current, { y: 0, scale: 1, opacity: 1 })
				},
			})
		}
	}, [whacked, onWhack, getRandomEmoji])

	const initializeAnimation = () => {
		gsap.set(buttonRef.current, {
			yPercent: 50,
			display: 'block',
		})

		bobRef.current = gsap.to(buttonRef.current, {
			yPercent: 300,
			duration: speed,
			yoyo: true,
			repeat: -3,
			delay,
			repeatDelay: delay,
			onRepeat: () => {
				pointsRef.current = Math.floor(Math.max(pointsRef.current * 0.9, pointsMin))
			},
		})
	}

	useEffect(() => {
		initializeAnimation()

		return () => {
			bobRef.current?.kill()
		}
	}, [delay, speed, pointsMin])

	return (
		<div className='fear-hole'>
			<button
				className={`fear ${whacked ? 'whacked' : ''}`}
				ref={buttonRef}
				onClick={whack}>
				{emoji}
			</button>
		</div>
	)
}

export default Fear
