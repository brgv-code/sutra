import Image from 'next/image'
import React from 'react'

const ProfileSection: React.FC = () => {
	return (
		<div className=' bg-black/50 '>
			<div className=' backdrop-blur-xl backdrop-filter bg-white/[0.05] text-white rounded-lg p-8 '>
				{/* <Image
					src='/bg.webp'
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className=' h-72  z-[-1]  w-full  rounded-md  shadow-xl border-b-8   '
				/>{' '} */}
				{/* <div className='-translate-y-16'> */}
				<div className='mb-4 '>
					<Image
						src='/memoji1.svg'
						alt='Profile picture'
						width={128}
						height={128}
						className='rounded-full w-32 h-32   border-4 border-gray-500'
					/>
				</div>
				<div className='flex justify-between '>
					<div className='mb-2 text-2xl font-bold'>
						Bhargav{' '}
						<Image
							src='/Twitter_Verified_Badge.svg'
							alt={''}
							width={25}
							height={25}
							className='inline-block mb-1'
						/>
					</div>
					<button className='bg-[#1D9BF0] self-end hover:bg-[#112a3b] text-white font-bold py-2 px-4 rounded-full'>
						Subscribe <span className='ml-2'>🔔</span>
					</button>
				</div>
				<p className='text-gray-400'>@brgv_dev</p>

				<div className='mb-4 text-start'>
					<br />
					💻 Software Engineer. 📖 Student(Msc). 📸 Photographer.
				</div>
				<div className='mb-4'>
					<span className=' p-1 rounded mr-6'> 📍 Berlin</span>
					<span className=' p-1 rounded mr-6'> 🎓 TU Ilmenau</span>
					<span className=' p-1 rounded'>🎂 August 19th</span>
					{/* <span className=' p-1 rounded ml-6'>🗓️ Joined Jan 2023</span> */}
				</div>
			</div>
		</div>
		// </div>
	)
}

export default ProfileSection
