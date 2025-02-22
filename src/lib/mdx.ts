import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export type FrontMatter = {
	title: string
	created: string
	description: string
	slug: string
	project: string
	tags?: string[]
	[key: string]: any
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

		return {
			contentHtml: content,
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
				created: '',
				description: 'There was an error loading this content.',
				project: '',
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

		const a = posts
			.filter((post): post is FrontMatter => Boolean(post.created))
			.sort((a, b) => {
				return new Date(b.created).getTime() - new Date(a.created).getTime()
			})
		return a
	} catch (error) {
		console.error('Error getting all files front matter:', error)
		return []
	}
}

export async function pullReadyMarkdownFiles(
	vaultPath: string,
): Promise<string[]> {
	const readyFiles: string[] = []
	const files = fs.readdirSync(vaultPath)

	for (const file of files) {
		if (file.endsWith('.md')) {
			const filePath = path.join(vaultPath, file)
			const content = fs.readFileSync(filePath, 'utf-8')
			// Check if the file contains the status "ready"
			if (content.includes('status: ready')) {
				readyFiles.push(filePath)
			}
		}
	}

	return readyFiles
}
