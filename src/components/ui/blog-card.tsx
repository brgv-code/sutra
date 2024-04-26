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
				<div className='flex flex-col'>
					<h2 className='text-xl font-bold mb-2 '>
						<span className='mr-2'> i</span> {title}
					</h2>
					<p>{date}</p>
				</div>
			</Link>

			<div className='flex space-x-4 '>
				{/* < href={project.url} target='_blank' rel='noopener noreferrer'>
							{project.icon}
							{/* <img src={project.icon} alt='GitHub' className='w-6 h-6' /> 
						</a> */}

				{/* TODO: fix handlecopying link */}
				{/* <div
					className='cursor-pointer z-10 hover:text-red-900'
					onClick={() => handleLinkCopy}
				>
					<Clipboard />
				</div> */}

				{/* give shareable link */}

				<a
					href={`https://twitter.com/intent/tweet?text=Hey! check out this blog post &url=${encodeURIComponent(
						`https://bhargav.dev/blog/${id}`,
					)}&via=brgvdev`}
					target='_blank'
					onClick={() => console.log('clicked')}
					className='cursor-pointer'
				>
					{/* TODO:add a counter and a tooltip */}
					<TwitterIcon />
				</a>
			</div>
		</div>
	)
}
