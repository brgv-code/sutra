import React from 'react'

interface CustomBoldProps {
	gradientColors?: string[]
	children: React.ReactNode
	fontSize?: string
}

const CustomBold: React.FC<CustomBoldProps> = ({
	gradientColors,
	children,
	fontSize = '3xl',
}) => {
	const defaultGradientColors = ['#fff', '#fff']
	const colors = gradientColors || defaultGradientColors
	const gradientStyle = {
		background: `linear-gradient(to right, ${colors.join(', ')})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		fontWeight: 'bold',
		borderRadius: '10px',
		lineHeight: 'normal',
	}

	return (
		<span
			className={`text-${fontSize} backdrop-blur-xl rounded-2xl`}
			style={gradientStyle}
		>
			{children}
		</span>
	)
}

export default CustomBold
