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
	fontColor?: string
	fontSize?: string
}

const Underline: React.FC<UnderlineProps> = ({
	children,
	underlineColor = '#bf360c',
	animationDelay = 0,
	animationDuration = 1000,
	show = true,
	fontColor,
	fontSize,
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
				{' '}
				<span className={`text-${fontColor} text-${fontSize} font-bold`}>
					{children}
				</span>
			</RoughNotation>
		</RoughNotationGroup>
	)
}

export default Underline
