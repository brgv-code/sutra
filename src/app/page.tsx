import { BlogCard } from '@/components/ui/blog-card'
import ProfileSection from '../components/ui/profile-card'
import { PostLists } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}
export default async function Home() {
	// const data = await getAllPublished()

	return (
		<div className='md:w-1/2 mt-12 w-full h-[90vh]'>
			{/* <HeroSection /> */}
			<ProfileSection />
			<div className=' flex  p-5  justify-between w-full'>
				<span className=''>Recents</span>
				{/* <span className=''>{PostLists.length} Posts</span> */}
			</div>

			<div className=' '>
				<div className='grid grid-cols-1  px-0'>
					{/* {data.map((item, index) => (
						<BlogCard
							key={index}
							id={item.id}
							title={item.title.title[0]?.plain_text}
							content={item.content.map(block => block.text).join(' ')}
							date={item.created}
							cover={item.cover.files[0]?.file.url}
							tags={item.tags}
							reading_time={item.reading_time.formula.string}
						></BlogCard>
					))} */}

					{PostLists.map((item, index) => (
						<BlogCard
							key={index}
							id={item.id}
							title={item.title}
							content={item.content}
							date={item.date}
							cover={item.cover}
							reading_time={item.reading_time}
							tags={item.tags}
						></BlogCard>
					))}
				</div>
			</div>
		</div>
	)
}
