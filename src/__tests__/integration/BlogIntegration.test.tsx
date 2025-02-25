import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import SearchableBlogList from '@/components/SearchableBlogList'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { FrontMatter } from '@/lib/mdx'

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(() => ({
		push: jest.fn(),
		prefetch: jest.fn(),
		pathname: '/blog',
	})),
	usePathname: jest.fn(),
}))

jest.mock('framer-motion', () => ({
	motion: {
		div: ({ children, ...props }: any) => {
			const { whileHover, animate, initial, exit, transition, ...validProps } =
				props
			return <div {...validProps}>{children}</div>
		},
		button: ({ children, ...props }: any) => {
			const { whileHover, animate, initial, exit, transition, ...validProps } =
				props
			return <button {...validProps}>{children}</button>
		},
		article: ({ children, ...props }: any) => {
			const { whileHover, animate, initial, exit, transition, ...validProps } =
				props
			return <article {...validProps}>{children}</article>
		},
	},
	AnimatePresence: ({ children }: any) => <>{children}</>,
}))

jest.mock('lucide-react', () => ({
	Search: () => <span data-testid='search-icon'>Search</span>,
	ChevronLeft: () => <span data-testid='chevron-left'>←</span>,
	ChevronRight: () => <span data-testid='chevron-right'>→</span>,
}))

jest.mock('react-markdown', () => {
	return function MockReactMarkdown({ children, components }: any) {
		const content = children.split('\n').map((line: string, index: number) => {
			if (line.startsWith('# ')) {
				const H1 = components.h1
				return <H1 key={index}>{line.replace('# ', '')}</H1>
			}
			if (line.startsWith('## ')) {
				const H2 = components.h2
				return <H2 key={index}>{line.replace('## ', '')}</H2>
			}
			if (line.startsWith('- ')) {
				const Li = components.li
				return <Li key={index}>{line.replace('- ', '')}</Li>
			}
			if (line.includes('`')) {
				const Code = components.code
				const [before, code, after] = line.split('`')
				return (
					<React.Fragment key={index}>
						{before}
						<Code inline={true}>{code}</Code>
						{after}
					</React.Fragment>
				)
			}
			if (line.startsWith('[')) {
				const A = components.a
				const text = line.match(/\[(.*?)\]/)?.[1]
				const href = line.match(/\((.*?)\)/)?.[1]
				return (
					<A key={index} href={href}>
						{text}
					</A>
				)
			}
			return line
		})
		return <div>{content}</div>
	}
})

jest.mock('@/components/ui/rough-notation/custom-links', () => {
	return function MockCustomLink({ href, children }: any) {
		return <a href={href}>{children}</a>
	}
})

jest.mock('@/components/ui/rough-notation/custom-list', () => {
	return function MockCustomListItem({ children }: any) {
		return <li>{children}</li>
	}
})

jest.mock('@/components/ui/rough-notation/custom-bold', () => {
	return function MockCustomBold({ children }: any) {
		return <h1>{children}</h1>
	}
})

jest.mock('@/components/ui/rough-notation/custom-code-block', () => {
	return function MockCodeBlock({ children }: any) {
		return <div className='code-block'>{children}</div>
	}
})

jest.mock('react-syntax-highlighter', () => ({
	Prism: function MockSyntaxHighlighter({ children }: any) {
		return <code>{children}</code>
	},
}))

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
	oneDark: {},
}))

const mockPosts: FrontMatter[] = [
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
	{
		title: 'Third Blog Post',
		created: '2023-01-03',
		description: 'This is the third blog post',
		slug: 'third-post',
		project: 'Blog',
		tags: ['jest', 'react'],
	},
]

describe('Blog Integration Tests', () => {
	let mockRouter: { push: jest.Mock; prefetch: jest.Mock; pathname: string }

	beforeEach(() => {
		mockRouter = {
			push: jest.fn(),
			prefetch: jest.fn(),
			pathname: '/blog',
		}
		;(useRouter as jest.Mock).mockReturnValue(mockRouter)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('Blog List Page', () => {
		it('renders the blog list with all posts', () => {
			render(<SearchableBlogList posts={mockPosts} />)

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()
			expect(screen.getByText('Second Blog Post')).toBeInTheDocument()
			expect(screen.getByText('Third Blog Post')).toBeInTheDocument()

			expect(
				screen.getByText('This is the first blog post'),
			).toBeInTheDocument()
			expect(
				screen.getByText('This is the second blog post'),
			).toBeInTheDocument()
			expect(
				screen.getByText('This is the third blog post'),
			).toBeInTheDocument()

			expect(screen.getByText('2023-01-01')).toBeInTheDocument()
			expect(screen.getByText('2023-01-02')).toBeInTheDocument()
			expect(screen.getByText('2023-01-03')).toBeInTheDocument()
		})

		it('filters posts based on search query', () => {
			render(<SearchableBlogList posts={mockPosts} />)

			const searchInput = screen.getByPlaceholderText('Search posts...')

			fireEvent.change(searchInput, { target: { value: 'first' } })

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()
			expect(screen.queryByText('Second Blog Post')).not.toBeInTheDocument()
			expect(screen.queryByText('Third Blog Post')).not.toBeInTheDocument()

			fireEvent.change(searchInput, { target: { value: 'react' } })

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()
			expect(screen.queryByText('Second Blog Post')).not.toBeInTheDocument()
			expect(screen.getByText('Third Blog Post')).toBeInTheDocument()

			fireEvent.change(searchInput, { target: { value: '' } })

			expect(screen.getByText('First Blog Post')).toBeInTheDocument()
			expect(screen.getByText('Second Blog Post')).toBeInTheDocument()
			expect(screen.getByText('Third Blog Post')).toBeInTheDocument()
		})

		it('displays "No posts found" when search has no results', () => {
			render(<SearchableBlogList posts={mockPosts} />)

			const searchInput = screen.getByPlaceholderText('Search posts...')

			fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

			expect(screen.getByText('No posts found')).toBeInTheDocument()
			expect(
				screen.getByText('Try adjusting your search query'),
			).toBeInTheDocument()
		})
	})

	describe('Blog Post Rendering', () => {
		it('renders markdown content correctly', () => {
			const markdownContent = `
# Blog Post Title
## Subtitle
This is a paragraph with **bold** text and *italic* text.

- List item 1
- List item 2

[Link to website](https://example.com)

\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`
      `

			render(<MarkdownRenderer content={markdownContent} />)

			expect(screen.getByText('Blog Post Title')).toBeInTheDocument()
			expect(screen.getByText('Subtitle')).toBeInTheDocument()

			// Note: The actual content rendering depends on the mocks for ReactMarkdown
			// and its components, which are already set up in the MarkdownRenderer.test.tsx
		})

		it('applies custom styling to the markdown content', () => {
			const markdownContent = '# Test Content'
			const customClass = 'custom-blog-style'

			const { container } = render(
				<MarkdownRenderer content={markdownContent} className={customClass} />,
			)

			expect(container.firstChild).toHaveClass(customClass)
		})
	})

	describe('Blog Navigation', () => {
		it.skip('navigates to individual blog post when clicked', () => {
			render(<SearchableBlogList posts={mockPosts} />)

			const firstPostLinks = screen.getAllByText('First Blog Post')
			fireEvent.click(firstPostLinks[0])

			expect(mockRouter.push).toHaveBeenCalled()
		})
	})
})
