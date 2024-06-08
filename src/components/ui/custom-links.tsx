// components/CustomLink.tsx
import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

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
	fontSize = 'text-base',
	fontColor = 'text-white',
	underlineColor = '#fff',
}) => {
	return (
		<Link
			href={href}
			className={classNames(
				'relative inline-block',
				fontSize,
				fontColor,
				'transition duration-300',
			)}
		>
			{children}
			<span
				className={classNames(
					'absolute left-0 bottom-0 w-full h-1',
					'bg-no-repeat bg-center',
					'bg-cover',
					underlineColor,
				)}
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5' stroke='%23${underlineColor.replace(
						'#',
						'',
					)}' stroke-width='3' fill='none'/%3E%3Cpath d='M0 5 Q 10 10, 20 5 T 40 5 T 60 5 T 80 5 T 100 5' stroke='%23${underlineColor.replace(
						'#',
						'',
					)}' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
				}}
			></span>
		</Link>
	)
}

export default CustomLink
