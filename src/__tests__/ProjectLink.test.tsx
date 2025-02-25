import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectLink from '../components/ProjectLink'

jest.mock('framer-motion', () => ({
	motion: {
		a: ({ children, href, className, target, rel }: any) => (
			<a href={href} className={className} target={target} rel={rel}>
				{children}
			</a>
		),
	},
}))

describe('ProjectLink', () => {
	const defaultProps = {
		githubUrl: 'https://github.com/user/repo',
		hostedUrl: 'https://example.com',
		description: 'Project description',
	}

	it('renders GitHub and hosted links', () => {
		render(<ProjectLink {...defaultProps} />)

		const links = screen.getAllByRole('link')
		expect(links).toHaveLength(2)

		expect(links[0]).toHaveAttribute('href', defaultProps.githubUrl)
		expect(links[1]).toHaveAttribute('href', defaultProps.hostedUrl)
	})

	it('renders additional links when provided', () => {
		const otherLinks = ['https://link1.com', 'https://link2.com']
		render(<ProjectLink {...defaultProps} otherLinks={otherLinks} />)

		const links = screen.getAllByRole('link')
		expect(links).toHaveLength(4) // GitHub + hosted + 2 other links

		expect(links[2]).toHaveAttribute('href', otherLinks[0])
		expect(links[3]).toHaveAttribute('href', otherLinks[1])
	})

	it('applies correct styling to links', () => {
		render(<ProjectLink {...defaultProps} />)

		const links = screen.getAllByRole('link')
		links.forEach(link => {
			expect(link).toHaveClass(
				'p-2',
				'rounded-xl',
				'bg-gray-800/50',
				'text-gray-400',
				'hover:text-white',
				'hover:bg-gray-700/50',
				'transition-colors',
			)
		})
	})

	it('opens links in new tab with security attributes', () => {
		render(<ProjectLink {...defaultProps} />)

		const links = screen.getAllByRole('link')
		links.forEach(link => {
			expect(link).toHaveAttribute('target', '_blank')
			expect(link).toHaveAttribute('rel', 'noopener noreferrer')
		})
	})
})
