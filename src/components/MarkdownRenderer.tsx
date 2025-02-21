// components/MarkdownRenderer.tsx
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'
import CustomLink from '@/components/ui/custom-links'
import CustomListItem from '@/components/ui/custom-list'
import CodeBlock from './ui/custom-code-block'
import CustomBold from './ui/custom-bold'

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
	const components: Components = {
		code: ({ children, className, ...props }) => {
			const match = /language-(\w+)/.exec(className || '')
			const isInline = !match && !className

			if (isInline) {
				return (
					<InlineCode className={className} {...props}>
						{children}
					</InlineCode>
				)
			}

			return (
				<CodeBlock className={className} {...props}>
					{children}
				</CodeBlock>
			)
		},
		a: ({ node, children, href }) => (
			<CustomLink href={href}>{children}</CustomLink>
		),
		li: CustomListItem,
		h1: CustomBold,
		h2: ({ children, ...props }) => {
			return (
				<CustomBold
					fontSize={'xl'}
					style={{ marginTop: '1rem', marginBottom: '1rem' }}
					{...props}
				>
					{children}
				</CustomBold>
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
