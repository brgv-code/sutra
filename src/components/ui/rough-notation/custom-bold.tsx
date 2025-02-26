import React from 'react'
import Underline from '../blog/underline'

interface CustomBoldProps {
	gradientColors?: string[]
	children?: React.ReactNode
	fontSize?: string
	underline?: boolean
	className?: string
}

const CustomBold: React.FC<CustomBoldProps> = ({
	gradientColors,
	children,
	fontSize = '3xl',
	underline = true,
	className,
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
		<h2
			className={`text-${fontSize} backdrop-blur-xl rounded-2xl  mt-4 ${className}`}
			style={gradientStyle}
		>
			{underline && (
				<Underline
					underlineColor={'#74E193'}
					animationDuration={2500}
					show={true}
				>
					{children}
				</Underline>
			)}
			{!underline && children}
		</h2>
	)
}

export default CustomBold
