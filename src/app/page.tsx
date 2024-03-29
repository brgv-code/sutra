import { getAllPublished } from '@/lib/notion'
import Blog from './blog/[slug]/page'

export default function Home() {
	const data = getAllPublished()
	console.log(data.metadata, 'blogs')
	return (
		<div className='w-1/2  border-red-800 border'>
			<h1 className='font-bold text-5xl pb-5'>BRGV</h1>
			{/* <h2 className='font-bold text-3xl px-20'>Design & Development</h2> */}
			<div className='w-[80%] border border-white '>
				<span>Hi, How are you?</span>
				<p>
					<br />
					You visited my blog, my name is Bhargav <br />I am a software engineer
					based in Berlin. About my dev journey, my projects, my thoughts and my
					learnings. <br />
				</p>
			</div>
			<Blog></Blog>
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
