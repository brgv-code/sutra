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
	}

	return (
		<button className='custom-button' style={gradientStyle}>
			{children}
		</button>
	)
}

export default CustomChip
