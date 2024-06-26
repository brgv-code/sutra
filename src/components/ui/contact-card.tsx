'use client'
import React from 'react'
import Image from 'next/image'
import { Contact } from '@/lib/contact'
import CustomBold from './custom-bold'

export function ContactCard() {
	// TODO add copy on hover and externallinks to social media

	const handleMediaNavigation = (url: string) => {
		window.open(url, '_blank')
	}
	return (
		<div className='flex flex-col justify-between relative cursor-auto'>
			<div className='w-full h-1/2 relative'>
				<Image
					src={'/berlin_dark.webp'}
					width={'0'}
					height={'0'}
					sizes='50vh'
					alt=''
					className='w-64 h-72 rounded-2xl border border-slate-200'
				/>
				<Image
					src={'/contact.png'}
					sizes={'50vh'}
					width={0}
					height={0}
					className='w-24 h-24 contact-border absolute top-60 left-5 contact-gradient'
					alt=''
				/>
			</div>
			<div className='pt-14'>
				<div className='flex'>
					<CustomBold fontSize='xl' gradientColors={['red', 'green']}>
						Bhargav
					</CustomBold>

					<div className='status ml-1 mt-1'>
						<svg
							className='status__online'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 10 10'
						>
							<circle cx='5' cy='5' r='5' fill='#43e648' />
						</svg>
						<div className='status__pulse'></div>
					</div>
				</div>
				<p className='text-sm text-gray-400 pt-2'>@brgv_dev</p>
				<p className='pt-4'>
					You can reach me via my email{' '}
					<CustomBold fontSize='sm'> hello@brgv.dev</CustomBold>
				</p>

				<p className='pt-12'>You can also find me on</p>
			</div>
			<ul className='flex h-screen gap-4  justify-between p-8'>
				{Contact.map((item, index) => {
					const IconComponent = item.icon
					const color = `text-${item.color}`
					return (
						<div
							key={index}
							className='relative flex cursor-pointer b-shadow mb-4 h-12 justify-center items-center w-12 group'
						>
							<div className=''>
								<IconComponent
									onClick={() => handleMediaNavigation(item.url)}
									className={`${color}`}
								/>
							</div>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default ContactCard
