// components/CustomLink.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface UnderlineProps {
	children: React.ReactNode
	underlineColor?: string
	animationDelay?: number
	animationDuration?: number
	show?: boolean
}

const Underline: React.FC<UnderlineProps> = ({
	children,
	underlineColor = '#bf360c',
	animationDelay = 0,
	animationDuration = 1000,
	show = true,
}) => {
	return (
		<RoughNotationGroup show={show}>
			<RoughNotation
				type='underline'
				strokeWidth={1}
				color={underlineColor}
				animationDelay={animationDelay}
				animationDuration={animationDuration}
			>
				{children}
			</RoughNotation>
		</RoughNotationGroup>
	)
}

export default Underline
