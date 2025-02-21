'use client'
import { ClipboardList } from 'lucide-react'
import React, { useState } from 'react'

interface CodeBlockProps {
	children?: React.ReactNode
	className?: string
	node?: any
	inline?: boolean
}

const CodeBlock: React.FC<CodeBlockProps> = ({
	children,
	className,
	inline,
}) => {
	//TODO: custom scrollbar
	//TODO: check transition on copy button
	//TODO Tost notification
	const [toast, setToast] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(children?.toString() || '')
		setToast(true)
	}

	return (
		<div className=' border-2 border-gray-200/30 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-4  overflow-x-auto overflow-visible w-3/4 m-auto group '>
			<div className='flex justify-between'>
				<div className='flex items-start gap-2 mb-4'>
					{' '}
					<span className=' mac-close red '></span>
					<span className=' mac-close yellow '></span>
					<span className=' mac-close green '></span>
				</div>

				<span className='group-hover:hidden block transition-opacity duration-200 ease-in-out text-sm'>
					tsx
				</span>

				<ClipboardList
					className='w-4 h-4 group-hover:block hidden transition-opacity duration-200 ease-in-out cursor-pointer'
					onClick={handleCopy}
				/>
			</div>

			<pre>
				<code className={className}>{children}</code>
			</pre>
		</div>
	)
}

export default CodeBlock
