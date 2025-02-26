import React from 'react'
import ReactMarkdown from 'react-markdown'
import CustomLink from '@/components/ui/rough-notation/custom-links'
import CustomListItem from '@/components/ui/rough-notation/custom-list'
import CustomBold from './ui/rough-notation/custom-bold'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import CodeBlock from './ui/rough-notation/custom-code-block'
import MermaidDiagram from './MermaidDiagram'

interface CodeProps {
	children?: React.ReactNode
	className?: string
}

const InlineCode: React.FC<CodeProps> = ({ children, className }) => (
	<code className={`${className} px-1 py-0.5 rounded bg-white/10`}>
		{children}
	</code>
)

interface MarkdownRendererProps {
	content: string
	className?: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
	content,
	className = '',
}) => {
	const components = {
		h1: (props: any) => <CustomBold {...props} />,
		h2: (props: any) => (
			<CustomBold fontSize='2xl' underline={false} {...props} />
		),
		h3: (props: any) => <CustomBold fontSize='xl' {...props} />,
		a: (props: any) => <CustomLink {...props} />,
		li: (props: any) => <CustomListItem {...props} />,
		code({ node, inline, className, children, ...props }: any) {
			const match = /language-(\w+)/.exec(className || '')

			if (!inline && match && match[1] === 'mermaid') {
				return <MermaidDiagram chart={String(children).trim()} />
			}

			return !inline && match ? (
				<CodeBlock className='m-auto w-full'>
					<SyntaxHighlighter
						style={{
							...oneDark,
							'pre[class*="language-"]': {
								...oneDark['pre[class*="language-"]'],
								background: 'transparent',
								fontSize: '1rem',
							},
							'code[class*="language-"]': {
								...oneDark['code[class*="language-"]'],
								background: 'transparent',
								fontSize: '1rem',
								whiteSpace: 'pre-wrap',
							},
						}}
						language={match[1]}
						PreTag='div'
						{...props}
					>
						{children}
					</SyntaxHighlighter>
				</CodeBlock>
			) : (
				<InlineCode className={className} {...props}>
					{children}
				</InlineCode>
			)
		},
	}

	return (
		<div className={`prose prose-invert max-w-none ${className}`}>
			<ReactMarkdown components={components}>{content}</ReactMarkdown>
		</div>
	)
}

export default MarkdownRenderer
