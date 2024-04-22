'use client'
import { useEffect, useState } from 'react'

type ToastProps = {
	duration: number
	type: string
	color: string
	text: string
}

const ToastNotification: React.FC<ToastProps> = ({
	duration,
	type,
	color,
	text,
}) => {
	const [showToast, setShowToast] = useState(false)

	useEffect(() => {
		setShowToast(true)

		const timer = setTimeout(() => {
			setShowToast(false)
		}, duration)

		return () => {
			clearTimeout(timer)
		}
	}, [duration])
	const toastBg = {
		position: 'fixed',
		top: '12px',
		right: '12px',
		padding: '12px',
		borderRadius: '25%',
		zIndex: 10,
		height: '80px',
		width: '256px',
		translate: `${showToast ? 'translate-x-0' : '-translate-x-full'}`,
		backgroundColor: `bg-${color}-500`,
		color: 'white',
	}
	return (
		<div className={`${toastBg}`}>
			<div className='flex items-center'>
				<div
					className={`mr-2 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}
				>
					{type === 'success' ? '✅' : '❌'}
				</div>
				<div>{text}</div>
			</div>
		</div>
	)
}

export default ToastNotification
