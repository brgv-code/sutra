import { BlogCard } from '@/components/ui/blog-card'
import { getAllPublished } from '@/lib/notion'
import ProfileSection from './profile-card'
import { PostLists } from '@/lib/utils'

export default async function Home() {
	const data = await getAllPublished()

	return (
		<div className='w-1/2 mt-12 backdrop-blur-3xl  backdrop-filter '>
			{/* <HeroSection /> */}
			<ProfileSection />
			<div className=' flex  p-5  justify-between w-full'>
				<span className=''>Recent Posts</span>
				<span className=''>{data.length} Posts</span>
			</div>

			<div className=' '>
				<div className='grid  lg:grid-cols-2  w-full grid-cols-1 gap-8 px-0'>
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
