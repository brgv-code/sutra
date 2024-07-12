// components/CustomLink.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import Underline from './blog/underline'

interface CustomLinkProps {
	href: string
	children: React.ReactNode
	fontSize?: string
	fontColor?: string
	underlineColor?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
	href,
	children,
	fontColor,
	fontSize,
	underlineColor,
}) => {
	const [show, setShow] = useState(true)

	return (
		<Link
			href={href}
			target='_blank'
			className='hover:no-underline'
			onMouseEnter={() => setShow(false)}
			onMouseLeave={() => setShow(true)}
		>
			<Underline
				underlineColor={underlineColor ?? '#dcc42d'}
				
				animationDuration={2500}
				show={show}
			>
				{children}
			</Underline>
		</Link>
	)
}

export default CustomLink
