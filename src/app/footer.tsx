import CustomBold from '@/components/ui/custom-bold'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<div className=''>
			<span className='text-[#f04c51] text-md mx-4'>{'<'}</span>
			Coded by{' '}
			<Link href='https://x.com/brgv_dev' target='_blank'>
				<CustomBold gradientColors={['#1dd00d', '#1dd00d']} fontSize='md'>
					Bhargav
				</CustomBold>
			</Link>
			<span className='text-[#f04c51] text-md mx-4'>{'>'}</span>
		</div>
	)
}

export default Footer
