// components/MarkdownRenderer.tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'
import CustomLink from '@/components/ui/custom-links'
import CustomListItem from '@/components/ui/custom-list'
import CodeBlock from './ui/custom-code-block'
import CustomBold from './ui/custom-bold'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import CustomCode from './ui/custom-code-block'
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
		h2: (props: any) => <CustomBold  fontSize='2xl' underline={false} {...props} />,
		h3: (props: any) => <CustomBold  fontSize='xl'  {...props} />,
		a: (props: any) => <CustomLink {...props} />,
		li: (props: any) => <CustomListItem {...props} />,
		code({ node, inline, className, children, ...props }: any) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				
				<CustomCode
				className='m-auto '
				><SyntaxHighlighter
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
						}
					}}
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
				</CustomCode>
			) : (
				<InlineCode className={className} {...props}>
					{children}
				</InlineCode>
			)
		}
	}

	return (
		<div className={`prose prose-invert max-w-none ${className}`}>
			<ReactMarkdown components={components}>{content}</ReactMarkdown>
		</div>
	)
}

export default MarkdownRenderer
