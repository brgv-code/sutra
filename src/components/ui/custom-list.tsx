import React, { Children, FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface CustomListItemProps {
	href: string
	children: React.ReactNode
	className?: string
}

const CustomListItem: FC<CustomListItemProps> = ({
	href,
	children,
	className,
}) => {
	return (
		<li
			className={clsx(
				'group transition-all duration-300 ease-in-out transform hover:translate-x-2',
				className,
			)}
		>
			{children}
		</li>
	)
}

export default CustomListItem
