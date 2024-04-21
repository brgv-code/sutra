import React from 'react'

interface CodeBlockProps {
	children: React.ReactNode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
	return (
		<pre>
			<code>{children}</code>
		</pre>
	)
}

export default CodeBlock
