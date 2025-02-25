import React from 'react'
import { render, screen } from '@testing-library/react'
import ToastNotification from '../components/ToastNotification'

describe('ToastNotification', () => {
	const mockIcon = <span data-testid='mock-icon'>✓</span>

	it('renders the message correctly', () => {
		const message = 'Test notification message'
		render(
			<ToastNotification
				message={message}
				icon={mockIcon}
				color='bg-green-500'
			/>,
		)

		expect(screen.getByText(message)).toBeInTheDocument()
	})

	it('renders the icon', () => {
		render(
			<ToastNotification
				message='Test message'
				icon={mockIcon}
				color='bg-green-500'
			/>,
		)

		expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
	})

	it('applies the correct color class', () => {
		const { container } = render(
			<ToastNotification
				message='Test message'
				icon={mockIcon}
				color='bg-green-500'
			/>,
		)

		const colorElement = container.querySelector('.bg-green-500')
		expect(colorElement).toBeInTheDocument()
	})
})
