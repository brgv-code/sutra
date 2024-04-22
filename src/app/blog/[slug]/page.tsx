'use client'
import CustomChip from '@/components/ui/custom-chip'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Tags = [
	{ name: 'NextJs', color1: 'blue', color2: 'green' },
	{ name: 'ReactJs', color1: 'white', color2: 'red' },
	{ name: 'TailwindCss', color1: 'gray', color2: 'orange' },
	{ name: 'NodeJs', color1: 'yellow', color2: 'black' },
	{ name: 'ExpressJs', color1: 'orange', color2: 'indigo' },
	{ name: 'MongoDB', color1: 'pink', color2: 'indigo' },
	{ name: 'GraphQL', color1: 'gray', color2: 'cyan' },
]
const ChipColors = [
	'blue',
	'red',
	'green',
	'yellow',
	'purple',
	'pink',
	'indigo',
	'cyan',
	'orange',
	'gray',
	'black',
]
export default function BlogDetails() {
	const router = useParams<{ slug: string }>()
	const { slug } = router

	const [DynamicPost, setDynamicPost] = useState(() => () => null)

	useEffect(() => {
		if (slug) {
			const loadDynamicPost = async () => {
				const postComponent = await import('@/posts/' + slug + '.tsx')
				setDynamicPost(() => postComponent.default)
			}
			loadDynamicPost()
		}
	}, [slug])

	return (
		<>
			{/* <div className='text-[#e77670] flex cursor-pointer hover:bg-slate-800 hover:rounded-full w-8 h-8'>
				<MoveLeft className='self-center m-auto' />
			</div> */}
			<div className='fixed flex flex-col  items-center left-[4%] bottom-[40%]'>
				<button className='btn mb-4'>
					<div className='btn-background-wrapper'>
						<div className='btn-background btn-background-1'></div>
						<div className='btn-background btn-background-2'></div>
						<div className='btn-background btn-background-3'></div>
					</div>

					<div className='btn-text'>Categories</div>
				</button>
				<div className='flex w-72 h-42 flex-wrap items-start '>
					{Tags.map((tag, index) => (
						<CustomChip key={index} gradientColors={[tag.color1, tag.color2]}>
							{tag.name}
						</CustomChip>
					))}
				</div>
			</div>
			<div className='w-1/2 flex flex-col min-h-screen mb-12 p-6 b-shadow'>
				{/* <p className='flex justify-between'>
					<span>Date: {date}</span> <span> Reading Time: {reading_time} </span>
					<CustomBold>bold text</CustomBold>
				</p>
				<br />
				<br /> */}
				{/* <h1 className='text-3xl text-blue-700 p-8 mb-8 '>{title}</h1>
				 */}
				{/* <span className='self-center'>
					<CustomBold gradientColors={['red', 'purple']}> {title}</CustomBold>
				</span>
				<Image
					src={cover}
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className='opacity-60 max-h-80 w-4/5 rounded-md m-auto mt-12 shadow-xl group-hover:scale-105 duration-500 transition-all ease-in-out'
				></Image> */}
				{/* <p className='p-8 text-lg'>{content}</p>
				 */}

				{DynamicPost ? (
					<DynamicPost />
				) : (
					<p className='w-1/2 h-full'>Loading...</p>
				)}
				{/* rest of your code */}
			</div>
		</>
	)
}
