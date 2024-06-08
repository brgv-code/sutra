'use client'
import React from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface HighlightProps {
	children: React.ReactNode
	fontSize?: string
	fontColor?: string
	highlightColor?: string
}

const Highlight: React.FC<HighlightProps> = ({
	children,
	highlightColor = '#454242',
}) => {
	return (
		<RoughNotation type='highlight' color={highlightColor} show={true}>
			<span style={{ color: '#e7d95c' }}>{children}</span>
		</RoughNotation>
	)
}

export default Highlight
