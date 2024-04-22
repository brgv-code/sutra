'use client'
import Link from 'next/link'
import React from 'react'
import { TagChip } from './tag-chip'
import { useBlogStore } from '@/store/BlogStore/blog.store'
import Image from 'next/image'

export type BlogCardProps = {
	title: string
	date: string
	content: string
	cover: string
	tags: string[]
	id: string
	reading_time: string
}

export const BlogCard: React.FC<BlogCardProps> = ({
	title,
	date,
	content,
	cover,
	id,
	tags,
	reading_time,
}) => {
	const setTitle = useBlogStore(state => state.setTitle)
	const setDate = useBlogStore(state => state.setDate)
	const setContent = useBlogStore(state => state.setContent)
	const setCover = useBlogStore(state => state.setCover)
	const setTags = useBlogStore(state => state.setTags)
	const setReadingTime = useBlogStore(state => state.setReadingTime)

	const handleClick = () => {
		setTitle(title)
		setDate(date)
		setContent(content)
		setCover(cover)
		setTags(tags)
		setReadingTime(reading_time)
	}

	return (
		<Link href={`/blog/${encodeURIComponent(id)}`} onClick={handleClick}>
			<article className='group b-shadow mt-4 mb-36 relative hover:scale-100 duration-500 transition-all hover:cursor-pointer'>
				<Image
					alt=''
					src={cover}
					sizes='100vw'
					width={0}
					height={0}
					className='h-56 w-full rounded-2xl  shadow-xl group-hover:scale-105 duration-500 transition-all ease-in-out'
				/>
				<div
					className=' p-4 w-full absolute -translate-y-14 group-hover:-translate-y-20 transition-all duration-500 ease-in-out 
                rounded-md backdrop-blur-md bg-gradient-to-b from-white/[.1] to-transparent justify-center'
				>
					{tags?.map((tag, index) => <TagChip key={index} text={tag} />)}
					<h3 className='text-lg font-medium text-white'>{title}</h3>
					<div className='mt-3'>
						<span className='text-sm/relaxed text-gray-500'>{date}</span>{' '}
						<span className='text-sm/relaxed text-gray-500'>|</span>{' '}
						<span className='text-sm/relaxed text-gray-500'>
							{reading_time}
						</span>
					</div>
				</div>
			</article>
		</Link>
	)
}
