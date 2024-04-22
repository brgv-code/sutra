import Link from 'next/link'

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
	// {
	// 	id: 4,
	// 	text: 'Blog',
	// 	url: '/blog/',
	// },
	// {
	// 	id: 5,
	// 	text: 'Resume',
	// 	url: '/resume/',
	// },
	{
		id: 6,
		text: 'Photography',
		url: '/photography/',
	},

	// {
	// 	id: 4,
	// 	text: 'Contact',
	// 	url: '/contact/',
	// },
]

function Links() {
	return (
		<div>
			{links.map(link => {
				const { id, url, text } = link
				return (
					<Link href={url} key={id} className='px-2'>
						{text}
					</Link>
				)
			})}
		</div>
	)
}
export default Links
