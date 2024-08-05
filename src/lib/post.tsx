interface PostProps {
	title: string

	content: string
}

export function Post(props: PostProps) {
	const { title, content } = props

	return (
		<article className='w-full mb-10 flex flex-col items-center pt-20'>
			<h1 className='text-6xl font-black text-white mb-8'>{title}</h1>
			<div
				className='text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white'
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</article>
	)
}
