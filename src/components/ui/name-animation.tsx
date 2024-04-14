// BhargavAnimation.tsx
import React from 'react'

const NameAnimation: React.FC = () => {
	return (
		<div className='flex justify-center items-center h-screen bg-gradient-to-r from-white-100 to-blue-200'>
			<svg
				width='960'
				height='300'
				viewBox='0 0 960 300'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g fill='none' stroke='white' strokeWidth='2'>
					{/* Simplified paths for illustration; you should create accurate paths for each letter */}
					<path className='stroke-animate' d='M10,10 l0,200' /> {/* B */}
					<path
						className='stroke-animate'
						d='M30,10 l0,200 M30,10 l50,0 M30,110 l50,0 M30,210 l50,0'
					/>{' '}
					{/* h */}
					<path
						className='stroke-animate'
						d='M100,210 l0,-200 l50,0 l0,200'
					/>{' '}
					{/* a */}
					<path
						className='stroke-animate'
						d='M170,210 l0,-200 l50,0 l0,200'
					/>{' '}
					{/* r */}
					<path
						className='stroke-animate'
						d='M240,210 l0,-200 l50,0 l0,200'
					/>{' '}
					{/* g */}
					<path
						className='stroke-animate'
						d='M310,210 l0,-200 l50,0 l0,200'
					/>{' '}
					{/* a */}
					<path className='stroke-animate' d='M380,10 l0,200' /> {/* v */}
					{/* Closing tag */}
					<path
						className='stroke-animate'
						d='M420,210 l30,-30 M450,210 l30,-30'
					/>{' '}
					{/* </ */}
					<path className='stroke-animate' d='M510,180 l0,30' /> {/* > */}
				</g>
			</svg>
		</div>
	)
}

export default NameAnimation
