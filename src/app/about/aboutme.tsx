'use client'
import Image from 'next/image'

const AboutMe = () => {
	return (
		<div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8  b-shadow'>
			<div className='flex flex-col items-center lg:flex-row lg:space-x-8'>
				{/* <div className='w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 mb-8 lg:mb-0'>
					<Image
						src='/memoji1.svg'
						alt='Profile Picture'
						width={192}
						height={192}
						className='rounded-full object-cover'
					/>
				</div> */}
				<div>
					Hi I am{' '}
					<h1 className=' inline-block font-extrabold text-red-600 '>
						Bhargav
					</h1>
					<p className='mt-4 text-lg '>
						fullstack dev at Foundamental gmbh, Berlin, Germany where I work on
						a B2B SAAS product, Loura. Before I was a fullstack dev at
						Fraunhofer IOSB, Karlsruhe where I worked for a pipleline project
						with VueJS, docker, drawio, influxDB, Grafana, and more. I am
						enthusiatic about NextJS, Typescript, GraphQL ecosystem -but I am
						interested in all things tech. I'&apos;'m a hobby photographer as
						well and when I am not doing any of the above, I am either reading a
						book or watching a movie.
					</p>
				</div>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-bold '>Work Experience</h2>
				<ul className='mt-2 text-lg  list-disc list-inside'>
					<li>
						Fullstack dev(student) at Foundamental gmBh March 2023 - present
					</li>
					<li>
						Fullstack Dev(student) at Fraunhofer IOSB March 2022 - March 2023
					</li>
					<li>Software Engineer at Accenture,India June 2017 - October 2021</li>
				</ul>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-bold '>Tech Skills</h2>
				<p className='mt-2 text-lg '>
					Proficient in [Skill 1], [Skill 2], [Skill 3], and more.
				</p>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-bold '>Education</h2>
				<ul className='mt-2 text-lg  list-disc list-inside'>
					<li>[Degree] from [Institution]</li>
					<li>[Degree] from [Institution]</li>
				</ul>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-bold '>Language Skills</h2>
				<p className='mt-2 text-lg '>
					Fluent in [Language 1], [Language 2], and [Language 3].
				</p>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-bold '>Hobbies</h2>
				<ul className='mt-2 text-lg  list-disc list-inside'>
					<li>[Hobby 1]</li>
					<li>[Hobby 2]</li>
					<li>[Hobby 3]</li>
				</ul>
			</div>
			{/* <div className='mt-8' >
				<h2 className='text-2xl font-bold '>Additional Information</h2>
				<p className='mt-2 text-lg '>VAT ID: [Your VAT ID]</p>
				<p className='mt-2 text-lg '>
					Registered with the [Your Trade Registry].
				</p>
			</div> */}
		</div>
	)
}

export default AboutMe
