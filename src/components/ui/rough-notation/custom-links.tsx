'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Underline from '../blog/underline'

interface CustomLinkProps {
	href?: string
	children?: React.ReactNode
	underlineColor?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
	href,
	children,
	underlineColor,
}) => {
	const [show, setShow] = useState(true)
	const isExternal = href?.startsWith('http')

	return (
		<Link
			href={href ?? ''}
			target={isExternal ? '_blank' : undefined}
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
