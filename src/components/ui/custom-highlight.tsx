// components/CustomLink.tsx
'use client'
import React, { useState } from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface CustomHighlightProps {
	children: React.ReactNode
	fontSize?: string
	fontColor?: string
	highlightColor?: string
}

const CustomHighlight: React.FC<CustomHighlightProps> = ({
	children,
	fontColor,
}) => {
	const [show, setShow] = useState(false)

	return (
		<RoughNotation
			type='bracket'
			brackets={['right', 'left']}
			color='#4c81ec'
			padding={[2, 2]}
			strokeWidth={0}
			show={true}
		>
			{children}
		</RoughNotation>
	)
}

export default CustomHighlight
