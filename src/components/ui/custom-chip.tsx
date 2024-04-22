import React from 'react'

interface CustomChipProps {
	children: React.ReactNode
	gradientColors: string[]
}

const CustomChip: React.FC<CustomChipProps> = ({
	children,
	gradientColors,
}) => {
	const gradientStyle = {
		background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		borderRadius: '10px',
	}

	return (
		<button
			className='m-1 p-1 opacity-80 backdrop-blur-xl rounded-2xl border border-[#1b7783] '
			style={gradientStyle}
		>
			{children}
		</button>
	)
}

export default CustomChip
