'use client'
import Link from 'next/link'
import React from 'react'
import { TagChip } from './tag-chip'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { tailwindColors } from '@/lib/tailwindColors'
import ToastNotification from './toast-notification'
import {
	Clipboard,
	ClipboardCheckIcon,
	Github,
	Twitter,
	TwitterIcon,
} from 'lucide-react'
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
	// const setTitle = useBlogStore(state => state.setTitle)
	// const setDate = useBlogStore(state => state.setDate)
	// const setContent = useBlogStore(state => state.setContent)
	// const setCover = useBlogStore(state => state.setCover)
	// const setTags = useBlogStore(state => state.setTags)
	// const setReadingTime = useBlogStore(state => state.setReadingTime)

	// const handleClick = () => {
	// 	// setTitle(title)
	// 	// setDate(date)
	// 	// setContent(content)
	// 	// setCover(cover)
	// 	// setTags(tags)
	// 	// setReadingTime(reading_time)
	// 	return {
	// 		toast('Opened a blog')
	// 	}
	// }
	const handleLinkCopy = () => {
		console.log('hey')
		navigator.clipboard.writeText(`https://bhargav.dev/blog/${id}`)
		toast.custom(
			<ToastNotification
				message={'Copied the url'}
				icon={'/t_1.svg'}
				color={tailwindColors.toast.success}
			/>,
		)
		toast.success('this working lmao')
	}
	console.log(content, 'content')
	return (
		<div className='b-shadow rounded p-4 m-4 flex justify-between'>
			<Link
				href={`/blog/${encodeURIComponent(id)}`}
				onClick={() =>
					toast.custom(
						<ToastNotification
							message={'Hello'}
							icon={'/t_1.svg'}
							color={tailwindColors.toast.success}
						/>,
					)
				}
			>
				<div className='flex flex-col w-4/5'>
					<h2 className='text-md font-bold mb-2 '>
						<span className='mr-2'> i</span> {title}
					</h2>
					<h5 className='text-gray-400 mt-2 mb-4'>
						{content.split(' ').slice(0, 20).join(' ')}
						...
					</h5>

					<p className='text-sm text-gray-700'>
						{date} | {reading_time}
					</p>
				</div>
			</Link>
			<div className='flex flex-col justify-between w-3/4'>
				<div className='flex space-x-4 justify-end'>
					{/* TODO: fix handlecopying link */}
					<div
						className='cursor-pointer z-10 hover:text-red-900'
						onClick={() => handleLinkCopy}
					>
						<Clipboard />
					</div>
					{/* {/* give shareable link  */}

					<a
						href={`https://twitter.com/intent/tweet?text=Hey! check out this blog post &url=${encodeURIComponent(
							`https://bhargav.dev/blog/${id}`,
						)}&via=brgvdev`}
						target='_blank'
						onClick={() => console.log('clicked')}
						className='cursor-pointer hover:text-red-900'
					>
						{/* {/* TODO:add a counter and a tooltip  */}
						<TwitterIcon />
					</a>
				</div>
				<div className='flex  justify-end space-x-4'>
					{tags.map((tag, index) => (
						<TagChip key={index} text={tag} />
					))}
				</div>
			</div>
		</div>
	)
}
