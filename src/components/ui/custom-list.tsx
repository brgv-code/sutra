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
    <ul className="list-disc list-inside mt-2 ml-4">
		<li
			className={clsx(
				'group transition-all duration-300 ease-in-out transform hover:translate-x-2',
				className,
			)}
		>
			{children}
		</li>
    </ul>
	)
}

export default CustomListItem
