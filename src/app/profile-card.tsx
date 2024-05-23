import Image from 'next/image'
import React from 'react'
import CustomBold from '@/components/ui/custom-bold'
import CustomLink from '@/components/ui/custom-links'
import Link from 'next/link'

const ProfileSection: React.FC = () => {
	return (
		<>
			<div className=' b-shadow  grid grid-cols-4  p-8  pb-4'>
				<p className='mb-4  col-span-1 google-border'>
					<Image
						src='/memoji1.svg'
						alt='Profile picture'
						width={128}
						height={128}
						className=' w-36 h-36  rounded-full bg-black '
					/>
				</p>
				<div className='flex flex-col items-start  col-span-3 '>
					{/* <p className='self-start'> Hello, I am</p> */}
					{/* <br /> */}
					<div className='mb-2 flex space-between text-xl font-bold '>
						<CustomBold
							gradientColors={['#3178c6', '#236c79', '#32BF95']}
							fontSize='xl'
						>
							Bhargav Venkatesh Babu{' '}
						</CustomBold>

						{/* <button className='bg-[#1D9BF0]  hover:bg-[#112a3b] text-white font-bold py-2 px-4 rounded-full'>
							Subscribe <span className='ml-2'>🔔</span>
						</button> */}
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
								className=' mx-1 mb-1'
							/>
						</span>
					</Link>
					<div className='mb-4 text-start'>
						<br />
						Product focused developer. Bringing Loura to life @{' '}
						<Link
							href={
								'https://foundamental-staging.webflow.io/people/bhargav-babu'
							}
							target='_blank'
						>
							F
							<Image
								width={18}
								height={18}
								src={'/foundamental_logo.png'}
								alt={'Foundamental'}
								className='inline-block'
							/>
							ndamental
						</Link>
						{/* <CustomLink
							decoration={false}
							gradientColors={['#0FC2C0', '#023535']}
							text={'/foundament'}
							url={
								'https://foundamental-staging.webflow.io/people/bhargav-babu'
							}
						/>{' '} */}{' '}
						Ready to code, connect, and create something amazing!
						{/* 💻 Software Engineer. 📖 Student(Msc). 📸 Photographer. */}
						<p className='mt-4 text-[9px] text-gray-400'>
							{' '}
							Currently working with
							<span className='text-[15px] m-2 '>
								<span className='text-[#3178c6]'>Typescript,</span>
								<span className='text-white'> NextJS,</span>
								<span className='text-[#61DBFB]'> React,</span>
								<span className='text-[#C6037F]'> GraphQL,</span>
								<span className='text-[#32BF95]'> EdgeDB,</span>
								<span className='text-[#EE2A43]'> NestJS</span>
							</span>
						</p>
						{/* <p className=' text-[9px] ml-[60%] mt-4 text-gray-400'>
							... but always open to learning new things!
						</p> */}
					</div>

					{/* <p className='mb-4'>
						<span className=' p-1 rounded mr-6'> 📍 Berlin</span>
						<span className=' p-1 rounded mr-6'> 🎓 TU Ilmenau</span>
						<span className=' p-1 rounded'>🎂 August 19th</span>
						{/* <span className=' p-1 rounded ml-6'>🗓️ Joined Jan 2023</span> 
					</p> */}
				</div>
			</div>
		</>
	)
}

export default ProfileSection
