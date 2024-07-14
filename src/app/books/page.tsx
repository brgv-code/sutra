'use client'
import Bookshelf from '@/components/bookshelf'
import React from 'react'
import Image from 'next/image'

function books() {
	return (
		<div>
			<h1 className='text-4xl font-bold mb-8'>My Bookshelf</h1>
			<p>
				These are some of my fav books I have read over the years. You can
				checkout my{' '}
				<span
					onClick={() =>
						window.open(
							'https://www.goodreads.com/review/list/32487262-bhargav',
							'_blank',
						)
					}
				>
					<Image
						src={'/goodreads.svg'}
						alt='Goodreads'
						width='40'
						height='40'
						className='inline-block cursor-pointer'
					/>{' '}
				</span>
				profile.
			</p>

			<Bookshelf />
		</div>
	)
}

export default books
