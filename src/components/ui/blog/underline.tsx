// components/CustomLink.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface UnderlineProps {
	children: React.ReactNode
	underlineColor?: string
}

const Underline: React.FC<UnderlineProps> = ({
	children,
	underlineColor = '#bf360c',
}) => {
	return (
		<RoughNotation
			type='underline'
			strokeWidth={1}
			color={underlineColor}
			show={true}
		>
			{children}
		</RoughNotation>
	)
}

export default Underline
