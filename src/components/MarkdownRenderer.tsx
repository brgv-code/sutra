import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
		h1: (props: any) => {
			const id =
				typeof props.children === 'string'
					? props.children
							.toLowerCase()
							.replace(/\s+/g, '-')
							.replace(/[^\w-]/g, '')
					: ''
			return <CustomBold id={id} {...props} />
		},
		h2: (props: any) => {
			const id =
				typeof props.children === 'string'
					? props.children
							.toLowerCase()
							.replace(/\s+/g, '-')
							.replace(/[^\w-]/g, '')
					: ''
			return <CustomBold id={id} fontSize='2xl' underline={false} {...props} />
		},
		h3: (props: any) => {
			const id =
				typeof props.children === 'string'
					? props.children
							.toLowerCase()
							.replace(/\s+/g, '-')
							.replace(/[^\w-]/g, '')
					: ''
			return <CustomBold id={id} fontSize='xl' {...props} />
		},
		a: (props: any) => <CustomLink {...props} />,
		li: (props: any) => <CustomListItem {...props} />,
		table: (props: any) => (
			<div className='overflow-x-auto my-4'>
				<table
					className='min-w-full border-collapse border border-gray-700'
					{...props}
				/>
			</div>
		),
		thead: (props: any) => <thead className='bg-gray-800' {...props} />,
		tbody: (props: any) => <tbody className='bg-gray-900' {...props} />,
		tr: (props: any) => <tr className='border-b border-gray-700' {...props} />,
		th: (props: any) => (
			<th
				className='px-4 py-2 text-left font-bold border-r border-gray-700 last:border-r-0'
				{...props}
			/>
		),
		td: (props: any) => (
			<td
				className='px-4 py-2 border-r border-gray-700 last:border-r-0'
				{...props}
			/>
		),
		img: (props: any) => (
			<img
				{...props}
				className='inline-block mr-1 mb-0 align-middle'
				style={{ display: 'inline-block' }}
			/>
		),
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
		<div
			className={`prose prose-invert max-w-none ${className}`}
			data-testid='markdown-renderer'
		>
			<ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export default MarkdownRenderer
