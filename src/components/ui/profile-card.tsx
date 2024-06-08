import Image from 'next/image'
import React from 'react'
import CustomBold from '@/components/ui/custom-bold'
import Link from 'next/link'
import CustomLink from '@/components/ui/custom-links'
import Highlight from '@/components/ui/blog/highlight'

const ProfileSection: React.FC = () => {
	return (
		<>
			<div className='b-shadow p-8 pb-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
				<div className='flex md:justify-start justify-center md:block  col-span-2 md:col-span-1'>
					<Image
						src='/memoji1.svg'
						alt='Profile picture'
						width={128}
						height={128}
						className='w-36 h-36   rounded-full '
					/>
				</div>
				<div className='flex flex-col md:items-start items-center col-span-3'>
					<div className='mb-2 flex space-between text-xl font-bold'>
						<CustomBold
							gradientColors={['#3178c6', '#236c79', '#32BF95']}
							fontSize='xl'
						>
							Bhargav Venkatesh Babu{' '}
						</CustomBold>
					</div>
					<Link
						href={'https://www.linkedin.com/in/bhargavbrgv/'}
						target='_blank'
					>
						<span className='flex'>
							<p className='text-gray-400'>@brgv_dev</p>
							<Image
								src='/t_2.svg'
								alt={''}
								width={15}
								height={15}
								className='mx-1 mb-1'
							/>
						</span>
					</Link>
					<div className='mb-4 md:text-start items-center'>
						<br />
						Produc sed developer. Bringing <Highlight>Loura</Highlight> to life{' '}
						<span className='whitespace-nowrap'>
							{/* <Link
								href={'https://www.foundamental.com/people/bhargav-babu'}
								target='_blank'
							> */}
							<CustomLink href='https://www.foundamental.com/people/bhargav-babu'>
								Foundamental
							</CustomLink>
						</span>{' '}
						Ready to code, connect, and create something amazing!
						<p className='mt-4 text-[9px] text-gray-400'>
							{' '}
							Currently working with
							<span className='text-[15px] m-2'>
								<span className='text-[#3178c6]'>Typescript,</span>
								<span className='text-white'> NextJS,</span>
								<span className='text-[#61DBFB]'> React,</span>
								<span className='text-[#C6037F]'> GraphQL,</span>
								<span className='text-[#32BF95]'> EdgeDB,</span>
								<span className='text-[#EE2A43]'> NestJS</span>
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfileSection
