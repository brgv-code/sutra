import { getFileBySlug, getFiles } from '@/lib/mdx'
import 'highlight.js/styles/github-dark.css'
import { Space_Mono } from 'next/font/google'

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

	return (
		<div className={` text-white min-h-screen ${mono.variable}`}>
			<article className='max-w-[800px] mx-auto px-4 py-20'>
				<header className='mb-16'>
					<h1 className='font-mono text-4xl font-bold mb-4 leading-tight'>
						{post.frontMatter.title}
					</h1>
					<time className='text-sm text-gray-400 block'>
						{post.frontMatter.date}
					</time>
				</header>
				<div
					className={`
            prose prose-invert max-w-none
            font-mono
            prose-h1:font-mono prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
            prose-h2:font-mono prose-h2:text-xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-12
            prose-h3:font-mono prose-h3:text-lg prose-h3:font-bold prose-h3:mb-4 prose-h3:mt-8
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-blue-300 prose-code:bg-gray-800/50 
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
            prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700
            prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-6
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-300 prose-li:mb-2 prose-li:leading-relaxed
            [&>h2]:text-white [&>h2]:font-mono [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-12
            [&>h3]:text-white [&>h3]:font-mono [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8
            [&>p]:text-base [&>p]:leading-7
          `}
					dangerouslySetInnerHTML={{ __html: post.contentHtml }}
				/>
			</article>
		</div>
	)
}
