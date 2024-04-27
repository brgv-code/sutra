'use client'
import Image from 'next/image'
import { TagChip } from '../../components/ui/tag-chip'

function HeroSection() {
	return (
		// <div className='flex flex-col items-center justify-center h-1/4'>
		// 	<h1 className='text-4xl font-bold'>Welcome to Hero Page</h1>
		// 	<h1 className='font-bold text-5xl pb-5'>BRGV</h1>
		// 	{/* <h2 className='font-bold text-3xl px-20'>Design & Development</h2> */}
		// 	<div className='w-[80%] '>
		// 		<span>Hi, How are you?</span>
		// 		<p>
		// 			<br />
		// 			You visited my blog, my name is Bhargav <br />I am a software engineer
		// 			based in Berlin. . <br />
		// 		</p>
		// 	</div>
		// </div>
		<section className='bg-transparent pr-8 py-12'>
			<div className='flex flex-col items-start'>
				<Image
					src={'/berlin_3.webp'}
					width={960}
					height={200}
					alt={''}
					className='backdrop-filter'
				/>
				{/* <h4 className='mb-6'>Hi, my name is</h4>
				<h1 className='text-7xl  mb-6 text-[#F2C335]   font-mono font-extrabold	'>
					Bhargav{' '}
				</h1> */}
				{/* <NameAnimation /> */}
				{/* <p className='text-lg font-light mb-6 text-[#233554]'>
					Crafting Digital Experiences
				</p>
                
				<p className='text-lg font-light mb-6'>
					<span className='text-[#595959]'>Engineer</span> |{' '}
					<span className='text-[#262626]'>Photographer</span> |
					<span className='text-[#D9D0C7]'>Creator</span>
				</p> */}
				{/* <p>I live in 📍 Berlin. A full time master student and an Intern at </p>
				<TagChip text='Foundamental' color1='blue' color2='black' /> */}
			</div>
		</section>
	)
}

export default HeroSection
