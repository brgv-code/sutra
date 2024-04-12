// // components/ProfileCard.tsx
import Image from 'next/image'
// import React from 'react'
// const ProfileCard: React.FC = () => {
// 	return (
// 		<div className=' mt-16 border-red-500 border p-6 rounded-lg  mx-auto'>
// 			<div className='backdrop-blur-md flex flex-col '>
// 				<Image
// 					src='/bg.jpg'
// 					alt='profile'
// 					width={64}
// 					height={64}
// 					className='w-24 h-24 rounded-full border border-red-500'
// 				/>
// 				<div className=''>
// 					<h1 className='text-5xl text-white font-bold'>Bhargav V</h1>
// 				</div>

// 				<div className='mt-4'>
// 					<h2 className='text-white text-lg font-semibold'>
// 						Software Engineer. Photographer. Creator. 🚀
// 					</h2>
// 					<p className='text-gray-400'>📍 Berlin, Germany</p>
// 					<p className='text-gray-400'>🔗 brgv.dev</p>
// 				</div>
// 				{/* <div className='flex items-center justify-between mt-4'>
// 					<div className='flex items-center text-white'>
// 						<span className='font-bold'>443</span>
// 						<span className='ml-1'>Following</span>
// 					</div>
// 					<div className='flex items-center text-white'>
// 						<span className='font-bold'>60</span>
// 						<span className='ml-1'>Followers</span>
// 					</div>
// 				</div> */}
// 			</div>
// 		</div>
// 	)
// }

// export default ProfileCard
// pages/index.tsx or components/ProfileSection.tsx
import React from 'react'

const ProfileSection: React.FC = () => {
	return (
		<div className=' '>
			<div className=' backdrop-blur-xl backdrop-filter bg-white/[0.05] text-white rounded-lg p-8 '>
				{/* <Image
					src='/bg.jpg'
					alt=''
					sizes='100vw'
					width={0}
					height={0}
					className=' h-72  z-[-1]  w-full  rounded-md  shadow-xl border-b-8   '
				/> */}
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
				{/* <button className='bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex items-center'>
					Follow <span className='ml-2'>🐦</span>
				</button> */}
			</div>
		</div>
		// </div>
	)
}

export default ProfileSection
