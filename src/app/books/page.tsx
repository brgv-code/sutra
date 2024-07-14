'use client'
import Bookshelf from '@/components/bookshelf'
import React from 'react'
import Image from 'next/image'

function books() {
	return (
		<div>
			<h1 className='text-4xl font-bold mb-8'>My Bookshelf</h1>
			Some of my favorites over the years from my{' '}
			<Image
				src={'/goodreads.svg'}
				alt='Goodreads'
				width='40'
				height='40'
				className='inline-block cursor-pointer'
			/>{' '}
			profile.
			<div>
				<Bookshelf />
			</div>
		</div>
	)
}

export default books
