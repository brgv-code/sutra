'use client'
import React from 'react'
import { books } from '@/../data/books'
const Bookshelf = () => {
	return (
		<div className='grid grid-cols-3 gap-4 p-8'>
			{books.map(book => (
				<div
					key={book.id}
					className='transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
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
