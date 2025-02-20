'use client'
import React from 'react'

const books = [
	{
		id: 1,
		cover: '/books/mastering-the-vc-game.webp',
		url: 'https://www.goodreads.com/book/show/7904927-mastering-the-vc-game?from_search=true&from_srp=true&qid=wImIyA76it&rank=1',
	},
	{
		id: 2,
		cover: '/books/fluent-react.webp',
		url: 'https://www.goodreads.com/book/show/62125589-fluent-react',
	},
	{
		id: 3,
		cover: '/books/red-rising.webp',
		url: 'https://www.goodreads.com/book/show/15839976-red-rising',
	},
	{
		id: 4,
		cover: '/books/5am-club.webp',
		url: 'https://www.goodreads.com/book/show/38388230-the-5-am-club',
	},
	{
		id: 5,
		cover: '/books/shoe-dog.webp',
		url: 'https://www.goodreads.com/book/show/27220736-shoe-dog',
	},
	{
		id: 6,
		cover: '/books/ikigai.webp',
		url: 'https://www.goodreads.com/book/show/35789357-ikigai',
	},
	{
		id: 7,
		cover: '/books/the-subtle-art.webp',
		url: 'https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck',
	},
]

const Bookshelf = () => {
	return (
		<div className='grid grid-cols-3 gap-4 p-8'>
			{books.map(book => (
				<div
					key={book.id}
					className='transform transition-transform duration-300 hover:scale-105'
					onClick={() => window.open(book.url, '_blank')}
				>
					<div className='relative w-40 h-60 perspective mx-auto'>
						<div
							className='absolute w-full h-full bg-cover bg-center book-transform'
							style={{ backgroundImage: `url(${book.cover})` }}
						></div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Bookshelf
