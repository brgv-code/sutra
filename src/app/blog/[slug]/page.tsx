import { getFileBySlug, getFiles } from '@/lib/mdx'
import 'highlight.js/styles/github-dark.css'
import { Space_Mono } from 'next/font/google'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'

const mono = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-mono',
})

export async function generateStaticParams() {
	const posts = await getFiles('blog')
	return posts.map((post: string) => ({
		slug: post.replace(/\.mdx/, ''),
	}))
}

export default async function BlogPost({
	params,
}: {
	params: { slug: string }
}) {
	const post = await getFileBySlug('blog', params.slug)
	if (!post) {
		notFound()
	}
	return (
		<div
			className={`text-white min-h-screen ${mono.variable} overflow-x-hidden`}
		>
			<div className='w-full flex justify-center'>
				<article className='w-full md:w-3/5 px-4 md:px-8 py-8 md:py-16'>
					<BackButton className='mb-6' />
					<header className='mb-8 md:mb-12'>
						<h1 className='font-mono text-2xl md:text-4xl font-bold mb-4 leading-tight break-words'>
							{post.frontMatter.title}
						</h1>
						<time className='text-sm text-gray-400 block'>
							{post.frontMatter.created}
						</time>
					</header>
					{/* Add tags here with styling similar to technology cards component */}

					<div className='flex flex-wrap gap-2 mb-4'>
						{post.frontMatter.tags?.map(tag => (
							<span
								key={tag}
								className='text-sm text-gray-400 border border-gray-400 bg-gray-900 rounded-full p-2'
							>
								{tag}
							</span>
						))}
					</div>
					<div className='w-full overflow-hidden'>
						<MarkdownRenderer
							className={`border border-white/10 rounded-xl p-5 md:p-6 shadow-xl text-sm md:text-base `}
							content={post.contentHtml}
						/>
					</div>
				</article>
			</div>
		</div>
	)
}
