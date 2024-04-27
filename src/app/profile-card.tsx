import Image from 'next/image'
import React from 'react'
import CustomBold from '@/components/ui/custom-bold'

const ProfileSection: React.FC = () => {
	return (
		<>
			<div className=' b-shadow  grid grid-cols-4  p-8 '>
				{/* <Image
					src='/berlin_1.webp'
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className=' h-72  z-[-1]  w-full  rounded-md  shadow-xl border-b-8   '
				/>{' '}
				{/* <Image
					src={'/berlin_3.webp'}
					width={960}
					height={200}
					alt={''}
					className='backdrop-filter'
				/> */}

				<p className='mb-4  col-span-1'>
					<Image
						src='/memoji1.svg'
						alt='Profile picture'
						width={128}
						height={128}
						className='rounded-full w-36 h-36   border-4 border-gray-500'
					/>
				</p>
				<div className='flex flex-col items-start  col-span-3 '>
					<p className='self-start'> Hello, I am</p>
					<br />
					<div className='mb-2 flex space-between  font-bold '>
						<CustomBold fontSize='5xl'>{`<Bhargav/>`} </CustomBold>

						{/* <button className='bg-[#1D9BF0]  hover:bg-[#112a3b] text-white font-bold py-2 px-4 rounded-full'>
							Subscribe <span className='ml-2'>🔔</span>
						</button> */}
					</div>
					{/* <span className='flex'>
						<p className='text-gray-400'>@brgv_dev</p>

						<Image
							src='/t_2.svg'
							alt={''}
							width={15}
							height={15}
							className=' mx-1 mb-1'
						/>
					</span> */}
					<p className='mb-4 text-start'>
						<br />I am a working student @ Foundamental in Berlin. I am also
						pursuing my master&apos;s degree in computer science from TU
						Ilmenau.
						{/* 💻 Software Engineer. 📖 Student(Msc). 📸 Photographer. */}
					</p>

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
