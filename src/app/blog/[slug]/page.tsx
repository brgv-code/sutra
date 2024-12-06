// 'use client'
import { getPageBySlug, getPageContent, notion } from '@/lib/notion'
import { Undo2 } from 'lucide-react'
import { notFound, useParams, useRouter } from 'next/navigation'
import { NotionRenderer } from '@notion-render/client'
import hljsPlugin from '@notion-render/hljs-plugin'
import bookmarkPlugin from '@notion-render/bookmark-plugin'
import { Post } from '@/components/post'

const Tags = [
	{ name: 'NextJs', color1: 'blue', color2: 'green' },
	{ name: 'ReactJs', color1: 'white', color2: 'red' },
	{ name: 'TailwindCss', color1: 'gray', color2: 'orange' },
	{ name: 'NodeJs', color1: 'yellow', color2: 'black' },
	{ name: 'ExpressJs', color1: 'orange', color2: 'indigo' },
	{ name: 'MongoDB', color1: 'pink', color2: 'indigo' },
	{ name: 'GraphQL', color1: 'gray', color2: 'cyan' },
]
const ChipColors = [
	'blue',
	'red',
	'green',
	'yellow',
	'purple',
	'pink',
	'indigo',
	'cyan',
	'orange',
	'gray',
	'black',
]

// how to make use of the generateMetadata funtion in client component. alternative
//extract the parts which require client side rendering and put them in a separate file and use meta data here
//TODO: use the opengraph.tsx compoent to use the title above the thumnail for x

// export async function generateStaticParams() {
// 	const router = useParams<{ slug: string }>()
// 	const { slug } = router
// 	const response = await import('@/posts/' + slug + '.tsx')
// // }
// export function BlogDetails() {
// 	const { slug } = useParams<{ slug: string }>()
// 	const router = useRouter()
// 	const [DynamicPost, setDynamicPost] = useState(() => () => null)
// 	const goBack = () => {
// 		router.back()
// 	}

// 	useEffect(() => {
// 		if (slug) {
// 			const loadDynamicPost = async () => {
// 				const postComponent = await import('@/posts/' + slug + '.tsx')
// 				setDynamicPost(() => postComponent.default)
// 			}
// 			loadDynamicPost()
// 		}
// 	}, [slug])

// 	return (
// 		<>
// 			<div
// 				onClick={goBack}
// 				className='md:flex gap-2 text-[#929293] text-sm hover:cursor-pointer h-5 hidden'
// 			>
// 				<Undo2 size={'14px'} />
// 				<span>Go back</span>
// 			</div>
// 			<div className='md:w-full lg:w-1/2 flex flex-col  mt-12 mb-12 p-6 b-shadow'>
// 				{DynamicPost ? (
// 					<DynamicPost />
// 				) : (
// 					<p className='w-1/2 h-full'>Loading...</p>
// 				)}
// 			</div>
// 		</>
// 	)
// }

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPageBySlug(params.slug)

	if (!post) notFound()
	const content = await getPageContent(post.id)

	const notionRenderer = new NotionRenderer({
		client: notion,
	})

	notionRenderer.use(hljsPlugin({}))
	notionRenderer.use(bookmarkPlugin(undefined))
	const allBlocks = [...content.blocks, ...content.relatedContent]

	const html = await notionRenderer.render(...allBlocks)

	return (
       <Post
			Name={(post.properties.Name as any).title[0].plain_text}
			content={html}
		/>




 

  )
}
