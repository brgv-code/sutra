import Image from 'next/image'
import { TagChip } from './tag-chip'
export type BlogCardProps = {
	title: string
	date: string
	content: string
	cover: string
}
export const BlogCard: React.FC<BlogCardProps> = ({
	title,
	date,
	content,
	cover,
}) => {
	// make the transitions smoother
	console.log(cover, 'cover')

	return (
		<article className='group mt-4 mb-36 relative hover:scale-100   duration-500 transition-all'>
			<Image
				alt=''
				src={cover}
				sizes='100vw'
				width={0}
				height={0}
				className='h-56 w-full   rounded-md  shadow-xl  group-hover:scale-105 duration-500 transition-all ease-in-out'
			/>
			<div className='m-4 p-3 absolute -translate-y-14 group-hover:-translate-y-20 transition-all duration-500 ease-in-out rounded-md backdrop-blur-md bg-gradient-to-b from-white/[.1] to-transparent justify-center'>
				<TagChip text='React' color1='blue' color2='red' />
				<TagChip text='Typescript' color1='red' color2='green' />
				<a href='#'>
					<h3 className='text-lg font-medium text-white'>{title}</h3>
				</a>
				{/* <p className='mt-2 line-clamp-2 text-sm/relaxed text-gray-500'>
					{content}
				</p> */}
				<div className='mt-3'>
					<span className='text-sm/relaxed text-gray-500'>{date}</span>{' '}
					<span className=' text-sm/relaxed text-gray-500'>|</span>{' '}
					<span className=' text-sm/relaxed text-gray-500'>10 mins read</span>
				</div>
			</div>
		</article>
	)
}
