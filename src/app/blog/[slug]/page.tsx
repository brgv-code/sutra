'use client'
import CustomBold from '@/components/ui/custom-bold'
import CustomChip from '@/components/ui/custom-chip'
import { TagChip } from '@/components/ui/tag-chip'
import { useBlogStore } from '@/store/BlogStore/blog.store'
import Image from 'next/image'
import { PostNumber1 } from '../../../posts/1'

export default function BlogDetails() {
	const title = useBlogStore(state => state.title)
	const date = useBlogStore(state => state.date)
	const content = useBlogStore(state => state.content)
	const cover = useBlogStore(state => state.cover)
	const tags = useBlogStore(state => state.tags)
	const reading_time = useBlogStore(store => store.reading_time)
	return (
		<>
			<div className='w-1/2 flex flex-col h-full p-6 b-shadow'>
				<p className='flex justify-between'>
					<span>Date: {date}</span> <span> Reading Time: {reading_time} </span>
					<CustomBold>bold text</CustomBold>
				</p>
				<br />
				<br />
				{/* <h1 className='text-3xl text-blue-700 p-8 mb-8 '>{title}</h1>
				 */}
				<span className='self-center'>
					<CustomBold gradientColors={['red', 'purple']}> {title}</CustomBold>
				</span>
				<Image
					src={cover}
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className='opacity-60 max-h-80 w-4/5 rounded-md m-auto mt-12 shadow-xl group-hover:scale-105 duration-500 transition-all ease-in-out'
				></Image>
				{/* <p className='p-8 text-lg'>{content}</p>
				 */}
				<PostNumber1 />
			</div>

			<div className='absolute left-[4%] bottom-[50%]'>
				<span>Categories</span>
				<CustomChip gradientColors={['blue', 'red']}>Tailwind</CustomChip>
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
