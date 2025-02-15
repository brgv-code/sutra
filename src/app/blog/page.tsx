import Link from 'next/link'
import { getAllFilesFrontMatter } from '@/lib/mdx'

type FrontMatter = {
	title: string
	date: string
	description: string
	slug: string
}

export default async function Blog() {
	const posts = await getAllFilesFrontMatter('blog')

	return (
		<div className='text-white min-h-screen'>
			<div className='max-w-[800px] mx-auto px-4 py-20'>
				<h1 className='text-4xl font-bold mb-4'>Blog</h1>
				<p className='text-gray-400 mb-12'>
					Thoughts on development, design, and technology
				</p>

				{posts.length > 0 ? (
					<div className='divide-y divide-white/10'>
						{posts.map((post: FrontMatter, i: number) => (
							<article key={i} className='py-8 group'>
								<Link href={`/blog/${post.slug}`} className='block space-y-3'>
									<div className='flex items-center gap-2 text-sm text-gray-400'>
										<time>{post.date}</time>
									</div>
									<h2 className='text-2xl font-semibold group-hover:text-gray-300 transition'>
										{post.title}
									</h2>
									<p className='text-gray-400 line-clamp-2'>
										{post.description}
									</p>
									<div className='text-white/60 group-hover:text-white/80 transition flex items-center gap-2'>
										Read more
										<span className='group-hover:translate-x-0.5 transition-transform'>
											→
										</span>
									</div>
								</Link>
							</article>
						))}
					</div>
				) : (
					<p className='text-gray-400'>No blog posts found.</p>
				)}
			</div>
		</div>
	)
}
