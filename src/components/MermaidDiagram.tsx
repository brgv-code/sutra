'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
	startOnLoad: false,
	theme: 'dark',
	securityLevel: 'loose',
	fontFamily: 'Fira Mono',
})

interface MermaidProps {
	chart: string
}

export default function MermaidDiagram({ chart }: MermaidProps) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const renderDiagram = async () => {
			if (ref.current) {
				ref.current.innerHTML = chart

				try {
					const { svg } = await mermaid.render(
						`mermaid-${Math.random().toString(36).substr(2, 9)}`,
						chart,
					)
					ref.current.innerHTML = svg
				} catch (error) {
					console.error('Error rendering mermaid diagram:', error)
					ref.current.innerHTML = 'Error rendering diagram'
				}
			}
		}

		renderDiagram()
	}, [chart])

	return (
		<div
			className='mermaid my-8 flex justify-center bg-black/20 p-4 rounded-lg'
			ref={ref}
		>
			{chart}
		</div>
	)
}
