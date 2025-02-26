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

const Links = memo(function Links() {
	const pathname = usePathname()

	return (
		<nav className='flex gap-2' role='navigation' aria-label='Main'>
			{links.map(({ id, url, text }) => (
				<Link
					href={url}
					key={id}
					className={`px-2 transition-opacity hover:opacity-80 ${
						pathname === url ? 'font-bold' : ''
					}`}
					aria-current={pathname === url ? 'page' : undefined}
				>
					{text}
				</Link>
			))}
		</nav>
	)
})

export default Links
