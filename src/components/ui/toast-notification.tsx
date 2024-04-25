import Image from 'next/image'
import React from 'react'

interface ToastProps {
	message: string
	icon: string
	color: string
}
//add animations
// add a close button
const ToastNotification: React.FC<ToastProps> = ({ message, icon, color }) => {
	return (
		<div
			style={{
				background: 'rgba(0, 0, 0, 0.5)',
				borderRadius: '8px',
				padding: '16px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			}}
			className='grid grid-cols-4 '
		>
			<div
				style={{
					background: 'dark',
					borderRadius: '50%',
					width: '40px',
					height: '40px',
					marginRight: '16px',
				}}
				className='col-span-1'
			>
				<Image src={icon} alt='Icon' width={24} height={24} />
			</div>
			<div style={{ color }}>{message}</div>
		</div>
	)
}

export default ToastNotification
