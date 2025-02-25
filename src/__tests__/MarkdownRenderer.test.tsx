import React from 'react'
import { render, screen } from '@testing-library/react'
import MarkdownRenderer from '../components/MarkdownRenderer'

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

describe('MarkdownRenderer', () => {
	it('renders markdown content correctly', () => {
		const content = '# Hello World'
		render(<MarkdownRenderer content={content} />)
		expect(screen.getByText('Hello World')).toBeInTheDocument()
	})

	it('renders links with custom component', () => {
		const content = '[Visit Website](https://example.com)'
		render(<MarkdownRenderer content={content} />)
		const link = screen.getByText('Visit Website')
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', 'https://example.com')
	})

	it('renders lists with custom component', () => {
		const content = '- Item 1\n- Item 2'
		render(<MarkdownRenderer content={content} />)
		expect(screen.getByText('Item 1')).toBeInTheDocument()
		expect(screen.getByText('Item 2')).toBeInTheDocument()
	})

	it('renders inline code correctly', () => {
		const content = 'This is `inline code`'
		render(<MarkdownRenderer content={content} />)
		const codeElement = screen.getByText('inline code')
		expect(codeElement.tagName).toBe('CODE')
		expect(codeElement).toHaveClass('px-1', 'py-0.5', 'rounded', 'bg-white/10')
	})

	it('renders code blocks with syntax highlighting', () => {
		const content = '```javascript\nconst x = 1;\n```'
		render(<MarkdownRenderer content={content} />)
		expect(screen.getByText('const x = 1;')).toBeInTheDocument()
	})

	it('applies custom className when provided', () => {
		const content = '# Test'
		const customClass = 'custom-class'
		const { container } = render(
			<MarkdownRenderer content={content} className={customClass} />,
		)
		expect(container.firstChild).toHaveClass(
			'prose',
			'prose-invert',
			'max-w-none',
			customClass,
		)
	})

	it('renders nested markdown structures', () => {
		const content = `
# Main Title
## Subtitle
- List item 1
- List item 2
[Link](https://example.com)
    `
		render(<MarkdownRenderer content={content} />)

		expect(screen.getByText('Main Title')).toBeInTheDocument()
		expect(screen.getByText('Subtitle')).toBeInTheDocument()
		expect(screen.getByText('List item 1')).toBeInTheDocument()
		expect(screen.getByText('List item 2')).toBeInTheDocument()
		expect(screen.getByText('Link')).toHaveAttribute(
			'href',
			'https://example.com',
		)
	})
})
