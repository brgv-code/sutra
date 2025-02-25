import React from 'react'
import { render } from '@testing-library/react'
import AnimatedGradient from '../components/AnimatedGradient'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
	usePathname: jest.fn(),
}))

jest.mock('framer-motion', () => ({
	motion: {
		div: ({ className, children }: any) => (
			<div className={className}>{children}</div>
		),
	},
}))

describe('AnimatedGradient', () => {
	it('renders with default gradient for home page', () => {
		;(usePathname as jest.Mock).mockReturnValue('/')
		const { container } = render(<AnimatedGradient />)

		const baseGradient = container.querySelector('.absolute.inset-0')
		expect(baseGradient).toBeInTheDocument()
		expect(baseGradient).toHaveClass('absolute', 'inset-0')
	})

	it('renders with correct gradient for projects page', () => {
		;(usePathname as jest.Mock).mockReturnValue('/projects')
		const { container } = render(<AnimatedGradient />)

		const baseGradient = container.querySelector('.absolute.inset-0')
		expect(baseGradient).toHaveClass(
			'bg-gradient-to-br',
			'from-purple-500/15',
			'via-transparent',
			'to-emerald-500/15',
		)
	})

	it('renders with correct gradient for blog page', () => {
		;(usePathname as jest.Mock).mockReturnValue('/blog')
		const { container } = render(<AnimatedGradient />)

		const baseGradient = container.querySelector('.absolute.inset-0')
		expect(baseGradient).toHaveClass(
			'bg-gradient-to-br',
			'from-red-500/15',
			'via-transparent',
			'to-cyan-500/15',
		)
	})

	it('matches dynamic routes correctly', () => {
		;(usePathname as jest.Mock).mockReturnValue('/blog/my-post')
		const { container } = render(<AnimatedGradient />)

		const baseGradient = container.querySelector('.absolute.inset-0')
		expect(baseGradient).toHaveClass(
			'bg-gradient-to-br',
			'from-blue-500/15',
			'via-transparent',
			'to-green-500/15',
		)
	})

	it('renders animated gradient when animation is enabled', () => {
		;(usePathname as jest.Mock).mockReturnValue('/projects')
		const { container } = render(<AnimatedGradient />)

		const animatedGradient = container.querySelector(
			'.bg-\\[radial-gradient\\(circle_at_50\\%_50\\%\\,_rgba\\(255\\,255\\,255\\,0\\.1\\)\\,transparent\\)\\]',
		)
		expect(animatedGradient).toBeInTheDocument()
	})
})
