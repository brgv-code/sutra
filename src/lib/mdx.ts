import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeFormat from 'rehype-format'

const root = process.cwd()

// Define the type for the front matter
type FrontMatter = {
	title: string
	date: string
	description: string
	slug: string
	[key: string]: any // Allow for additional properties
}

export async function getFiles(type: string) {
	const files = fs.readdirSync(path.join(root, 'data', type))
	return files.filter(file => file.endsWith('.mdx'))
}

export async function getFileBySlug(type: string, slug: string) {
	try {
		const source = fs.readFileSync(
			path.join(root, 'data', type, `${slug}.mdx`),
			'utf8',
		)

		const { data, content } = matter(source)

		const processedContent = await unified()
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkRehype, {
				allowDangerousHtml: true,
				footnoteLabel: 'Footnotes',
				footnoteBackLabel: 'Back to content',
			})
			.use(rehypeSlug)
			.use(rehypeHighlight)
			.use(rehypeFormat)
			.use(rehypeStringify, { allowDangerousHtml: true })
			.process(content)

		return {
			contentHtml: processedContent.toString(),
			frontMatter: {
				slug: slug || null,
				...data,
			} as FrontMatter,
		}
	} catch (error) {
		console.error(`Error processing ${slug}.mdx:`, error)
		return {
			contentHtml: '<p>Error loading content.</p>',
			frontMatter: {
				slug: slug || null,
				title: 'Error',
				date: '',
				description: 'There was an error loading this content.',
			} as FrontMatter,
		}
	}
}

export async function getAllFilesFrontMatter(
	type: string,
): Promise<FrontMatter[]> {
	try {
		const files = await getFiles(type)

		const posts = await Promise.all(
			files.map(async (file: string) => {
				const source = fs.readFileSync(
					path.join(root, 'data', type, file),
					'utf8',
				)
				const { data } = matter(source)
				return {
					...(data as FrontMatter),
					slug: file.replace('.mdx', ''),
				}
			}),
		)

		return posts
			.filter((post): post is FrontMatter => Boolean(post.date))
			.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			})
	} catch (error) {
		console.error('Error getting all files front matter:', error)
		return []
	}
}
