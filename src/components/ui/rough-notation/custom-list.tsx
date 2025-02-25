import React, { FC } from 'react'
import clsx from 'clsx'
import { Asterisk } from 'lucide-react'

interface CustomListItemProps {
	children?: React.ReactNode
	className?: string
}

const CustomListItem: FC<CustomListItemProps> = ({ children, className }) => {
	return (
		<li

			className={clsx(
				'group transition-all duration-300 ease-in-out  ml-12 my-4 transform hover:translate-x-2',
				className,
			)}
		>
			<Asterisk
				className='absolute left-[-1.5em] top-1.5 w-4 h-4 text-purple-500'
				strokeWidth={1.5}
			/>
			{children}
		</li>
	)
}

export default CustomListItem
