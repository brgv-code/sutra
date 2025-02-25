import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectTechBadge from '../components/ProjectsTechBadge'

jest.mock('framer-motion', () => ({
	motion: {
		span: ({
			children,
			className,
		}: {
			children: React.ReactNode
			className: string
		}) => <span className={className}>{children}</span>,
	},
}))

describe('ProjectTechBadge', () => {
	it('renders the tech name correctly', () => {
		const techName = 'React'
		render(<ProjectTechBadge tech={techName} />)
		expect(screen.getByText(techName)).toBeInTheDocument()
	})

	it('applies the correct styling classes', () => {
		const techName = 'TypeScript'
		const { container } = render(<ProjectTechBadge tech={techName} />)
		const badge = container.firstChild as HTMLElement

		expect(badge).toHaveClass(
			'bg-white/10',
			'px-3',
			'py-1',
			'rounded-full',
			'text-sm',
			'backdrop-blur-md',
			'border',
			'border-white/5',
			'shadow-lg',
			'hover:border-white/10',
			'transition-colors',
		)
	})
})
