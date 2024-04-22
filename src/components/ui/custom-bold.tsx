import React from 'react'

interface CustomBoldProps {
	gradientColors?: string[]
	children: React.ReactNode // Add this line
}

const CustomBold: React.FC<CustomBoldProps> = ({
	gradientColors,
	children,
}) => {
	const defaultGradientColors = ['#1b7783', '#1e8d50']
	const colors = gradientColors || defaultGradientColors
	const gradientStyle = {
		background: `linear-gradient(to right, ${colors.join(', ')})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		borderRadius: '10px',
	}

	return (
		<span
			className='text-3xl backdrop-blur-xl rounded-2xl'
			style={gradientStyle}
		>
			{children}
		</span>
	)
}

export default CustomBold
