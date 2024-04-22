'use client'
import { ClipboardList } from 'lucide-react'
import React, { useState } from 'react'

interface CodeBlockProps {
	children: React.ReactNode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
	//TODO: cutom scrollbar
	//TODO: check transition on copy button
	//TODO Tost notification
	const [toast, setToast] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(children?.toString() || '')
		setToast(true)
	}

	return (
		<div className='b-shadow p-4 my-12 overflow-x-auto overflow-visible w-3/4 m-auto group'>
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
					className='w-4 h-4 text-slate-300 group-hover:block hidden transition-opacity duration-200 ease-in-out cursor-pointer'
					onClick={handleCopy}
				/>
			</div>

			<pre>
				<code>{children}</code>
			</pre>
		</div>
	)
}

export default CodeBlock
