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
	// 	text: 'Goals',
	// 	url: '/goals/',
	// },
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
