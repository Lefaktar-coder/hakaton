/* eslint-disable react/prop-types */
import Fear from '../fear/Fear'
import './Fears.css'

const Fears = ({ fears, onWhack }) => {
	return (
		<div className='fears'>
			{fears.map(({ speed, delay, points }, id) => (
				<Fear
					key={id}
					onWhack={onWhack}
					points={points}
					delay={delay}
					speed={speed}
				/>
			))}
		</div>
	)
}

export default Fears
