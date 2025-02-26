'use client'
import { memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{
		id: 1,
		text: 'Home',
		url: '/',
	},
	{
		id: 2,
		text: 'About',
		url: '/about/',
	},
	{
		id: 3,
		text: 'Projects',
		url: '/projects/',
	},
	{
		id: 4,
		text: 'Books',
		url: '/books/',
	},
	{
		id: 5,
		text: 'Blog',
		url: '/blog/',
	},
	// {
	// 	id: 5,
	// 	text: 'Books',
	// 	url: '/books/',
	// },
	// {
	// 	id: 6,
	// 	text: 'Photography',
	// 	url: '/photography/',
	// },

	// {
	// 	id: 7,
	// 	text: 'Notes',
	// 	url: '/notes/',
	// },
] as const

interface LinksProps {
	onLinkClick?: () => void
}

const Links = memo(function Links({ onLinkClick }: LinksProps) {
	const pathname = usePathname()

	return (
		<nav
			className='flex sm:flex-row flex-col gap-6 sm:gap-2'
			role='navigation'
			aria-label='Main'
		>
			{links.map(({ id, url, text }) => (
				<Link
					href={url}
					key={id}
					className={`px-2 py-2 text-lg sm:text-base transition-opacity hover:opacity-80 ${
						pathname === url ? 'font-bold' : ''
					}`}
					aria-current={pathname === url ? 'page' : undefined}
					onClick={onLinkClick}
				>
					{text}
				</Link>
			))}
		</nav>
	)
})

export default Links
