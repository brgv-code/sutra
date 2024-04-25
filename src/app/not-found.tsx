'use client'
import ToastNotification from '@/components/ui/toast-notification'
import { tailwindColors } from '@/lib/tailwindColors'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Notfound = () => {
	return (
		<div
			onClick={() =>
				toast.custom(
					<ToastNotification
						message={'oh No!'}
						icon={'/brgv_logo.png'}
						color={tailwindColors.toast.error}
					/>,
				)
			}
		>
			<h4>Notfound</h4>
			<Link href='/'>Return Home</Link>
		</div>
	)
}

export default Notfound
