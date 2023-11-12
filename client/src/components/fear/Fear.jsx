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
				scale: 3.5,
				opacity: 0,
				duration: 0.5,
				onComplete: () => {
					setWhacked(false)
					setEmoji(getRandomEmoji())
					pointsRef.current = points
					bobRef.current?.restart()
					gsap.set(buttonRef.current, { scale: 1, opacity: 1 })
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

	useEffect(() => {
		if (whacked) {
			pointsRef.current = points
			bobRef.current.pause()
			gsap.to(buttonRef.current, {
				yPercent: 300,
				duration: 0.1,
				onComplete: () => {
					gsap.delayedCall(gsap.utils.random(1, 3), () => {
						setWhacked(false)
						setEmoji(getRandomEmoji())
						bobRef.current?.restart()
					})
				},
			})
		}
	}, [whacked])

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
