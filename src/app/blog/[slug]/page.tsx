import { getFileBySlug, getFiles } from '@/lib/mdx'
import 'highlight.js/styles/github-dark.css'
import { Space_Mono } from 'next/font/google'
import MarkdownRenderer from '@/components/MarkdownRenderer'

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
	console.log(post, 'post')
	return (
		<div className={` text-white min-h-screen ${mono.variable}`}>
			<article className='max-w-[800px] mx-auto px-4 py-20'>
				<header className='mb-16'>
					<h1 className='font-mono text-4xl font-bold mb-4 leading-tight'>
						{post.frontMatter.title}
					</h1>
					<time className='text-sm text-gray-400 block'>
						{post.frontMatter.created}
					</time>
				</header>
				<MarkdownRenderer
					content={post.contentHtml}
                />
			</article> 
		</div>
	)
}
