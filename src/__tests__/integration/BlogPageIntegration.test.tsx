import React from 'react'
import { render, screen } from '@testing-library/react'
import Blog from '@/app/blog/page'
import BlogPost from '@/app/blog/[slug]/page'
import { getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

jest.mock('@/lib/mdx', () => ({
	getAllFilesFrontMatter: jest.fn(),
	getFileBySlug: jest.fn(),
	getFiles: jest.fn(),
}))

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
	usePathname: jest.fn(),
	notFound: jest.fn(),
}))

jest.mock('@/components/SearchableBlogList', () => {
	return function MockSearchableBlogList({ posts }: any) {
		return (
			<div data-testid='searchable-blog-list'>
				<h1>Blog Posts</h1>
				<ul>
					{posts.map((post: any) => (
						<li key={post.slug}>
							<h2>{post.title}</h2>
							<p>{post.description}</p>
							<time>{post.created}</time>
							{post.tags && (
								<div>
									{post.tags.map((tag: string) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		)
	}
})

jest.mock('@/components/MarkdownRenderer', () => {
	return function MockMarkdownRenderer({ content, className }: any) {
		return (
			<div data-testid='markdown-renderer' className={className}>
				{content}
			</div>
		)
	}
})

const mockPosts = [
	{
		title: 'First Blog Post',
		created: '2023-01-01',
		description: 'This is the first blog post',
		slug: 'first-post',
		project: 'Blog',
		tags: ['react', 'nextjs'],
	},
	{
		title: 'Second Blog Post',
		created: '2023-01-02',
		description: 'This is the second blog post',
		slug: 'second-post',
		project: 'Blog',
		tags: ['typescript', 'testing'],
	},
]

const mockBlogPost = {
	contentHtml:
		'# First Blog Post\n\nThis is the content of the first blog post.',
	frontMatter: {
		title: 'First Blog Post',
		created: '2023-01-01',
		description: 'This is the first blog post',
		slug: 'first-post',
		project: 'Blog',
		tags: ['react', 'nextjs'],
	},
}

describe('Blog Page Integration Tests', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	describe('Blog List Page', () => {
		it('renders the blog list page with posts', async () => {
			;(getAllFilesFrontMatter as jest.Mock).mockResolvedValue(mockPosts)

			const BlogComponent = await Blog()
			render(BlogComponent)

			const blogList = screen.getByTestId('searchable-blog-list')
			expect(blogList).toBeInTheDocument()

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()
			expect(screen.getByText('Second Blog Post')).toBeInTheDocument()
			expect(
				screen.getByText('This is the first blog post'),
			).toBeInTheDocument()
			expect(
				screen.getByText('This is the second blog post'),
			).toBeInTheDocument()

			expect(getAllFilesFrontMatter).toHaveBeenCalledWith('blog')
		})

		it('handles empty blog posts gracefully', async () => {
			;(getAllFilesFrontMatter as jest.Mock).mockResolvedValue([])

			const BlogComponent = await Blog()
			render(BlogComponent)

			const blogList = screen.getByTestId('searchable-blog-list')
			expect(blogList).toBeInTheDocument()

			expect(screen.queryByText('First Blog Post')).not.toBeInTheDocument()
			expect(screen.queryByText('Second Blog Post')).not.toBeInTheDocument()
		})
	})

	describe('Individual Blog Post Page', () => {
		it('renders an individual blog post correctly', async () => {
			;(getFileBySlug as jest.Mock).mockResolvedValue(mockBlogPost)

			const BlogPostComponent = await BlogPost({
				params: { slug: 'first-post' },
			})
			render(BlogPostComponent)

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()

			expect(screen.getByText('2023-01-01')).toBeInTheDocument()

			const markdownRenderer = screen.getByTestId('markdown-renderer')
			expect(markdownRenderer).toBeInTheDocument()

			expect(markdownRenderer).toHaveTextContent('First Blog Post')
			expect(markdownRenderer).toHaveTextContent(
				'This is the content of the first blog post',
			)

			expect(getFileBySlug).toHaveBeenCalledWith('blog', 'first-post')
		})

		it('generates static params for all blog posts', async () => {
			;(getFiles as jest.Mock).mockResolvedValue([
				'first-post.mdx',
				'second-post.mdx',
			])

			const { generateStaticParams } = require('@/app/blog/[slug]/page')
			const params = await generateStaticParams()

			expect(params).toEqual([{ slug: 'first-post' }, { slug: 'second-post' }])

			expect(getFiles).toHaveBeenCalledWith('blog')
		})
	})
})
