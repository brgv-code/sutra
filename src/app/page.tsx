import { getAllPublished } from '@/lib/notion'
import Blog from './blog/[slug]/page'
import HeroSection from './hero/page'

export default async function Home() {
	const data = await getAllPublished()
	console.log(
		data.map(i => i.cover),
		'data',
	)
	return (
		<div className='w-1/2 '>
			<HeroSection />

			<div className='mt-24 '>
				<div className=' flex justify-between'>
					<span className=''>Recent Posts</span>
					<span className=''>{data.length} Posts</span>
				</div>
				<div className='grid  lg:grid-cols-2  gap-8 px-0'>
					{data.map((item, index) => (
						<Blog
							key={index}
							title={item.title.title[0]?.plain_text}
							content={item.content.rich_text[0]?.plain_text}
							date={item.created}
							cover={item.cover.files[0].file.url}
						></Blog>
					))}
				</div>
			</div>

			{/* <Image src={background}
		className='blur-[2px]'
 alt="Picture of the author"
 placeholder="blur"
 quality={100}
 fill
 sizes="100vw"
 priority
 style={{
   objectFit: 'cover',
   zIndex: -1
   
 }}
		></Image> */}
		</div>
	)
}
