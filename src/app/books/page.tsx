'use client'
import Bookshelf from '@/components/bookshelf'
import React from 'react'
import Image from 'next/image'

function books() {
	return (
		<div className='max-w-[1200px] mx-auto px-4 py-10 sm:py-16'>
			<h1 className='text-3xl sm:text-4xl font-bold mb-4'>My Bookshelf</h1>
			<p className='mb-6 text-base'>
				Some of my favorites over the years from my{' '}
				<Image
					src={'/goodreads.svg'}
					alt='Goodreads'
					width='30'
					height='30'
					className='inline-block cursor-pointer w-6 h-6 sm:w-8 sm:h-8'
				/>{' '}
				profile.
			</p>
			<div>
				<Bookshelf />
			</div>
		</div>
	)
}

export default books
