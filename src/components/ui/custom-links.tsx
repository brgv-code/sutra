// components/CustomLink.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

interface CustomLinkProps {
	href: string
	children: React.ReactNode
	fontSize?: string
	fontColor?: string
	underlineColor?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
	const [show, setShow] = useState(true)

	return (
		<Link
			href={href}
			target='_blank'
			className='hover:no-underline'
			onMouseEnter={() => setShow(false)}
			onMouseLeave={() => setShow(true)}
		>
			<RoughNotation type='underline' color='#dcc42d' show={show}>
				{children}
			</RoughNotation>
		</Link>
	)
}

export default CustomLink
