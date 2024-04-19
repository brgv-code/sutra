'use client'
import { TagChip } from '@/components/ui/tag-chip'
import { useBlogStore } from '@/store/BlogStore/blog.store'
import Image from 'next/image'

export default function BlogDetails() {
	const title = useBlogStore(state => state.title)
	const date = useBlogStore(state => state.date)
	const content = useBlogStore(state => state.content)
	const cover = useBlogStore(state => state.cover)
	const tags = useBlogStore(state => state.tags)
	const reading_time = useBlogStore(store => store.reading_time)
	return (
		<>
			<div className='w-1/2 h-screen p-6 border border-red-900'>
				<p className='flex justify-between'>
					<span>Date: {date}</span> <span> Reading Time: {reading_time} </span>
				</p>
				<h1 className='text-3xl text-blue-700 p-8 mb-8 '>{title}</h1>
				<Image
					src={cover}
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className='h-56 w-full rounded-md mb-12 shadow-xl group-hover:scale-105 duration-500 transition-all ease-in-out'
				></Image>
				<p className='p-8 text-lg'>{content}</p>
			</div>

			<div className='absolute left-[4%] bottom-[50%]'>
				<span>Categories</span>
				<p>Tailwind</p>
				<p>NextJs</p>
				<p>React</p>
				<p>NodeJs</p>
				<p>ExpressJs</p>
				<p>Typescript</p>
				<p>GraphQL</p>
				<p>PostgreSQL</p>
				<p>MongoDB</p>
				<p>Redis</p>
				<p>Web Development</p>
				<TagChip text='Foundamental' color1='blue' color2='black' />
			</div>
		</>
	)
}
