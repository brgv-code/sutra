'use client'
import Image from 'next/image'
import CustomHighlight from '../../components/ui/custom-highlight'
import CustomLink from '@/components/ui/custom-links'
import CustomListItem from '@/components/ui/custom-list'
import CustomBold from '@/components/ui/custom-bold'
import { Flame } from 'lucide-react'

const AboutMe = () => {
	return (
		<>
			<div className='bg-[#831919] w-screenflex justify-center'>
				This page is under construction
			</div>
			<div className='max-w-4xl h-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8  b-shadow'>
				<div className='flex flex-col items-center lg:flex-row lg:space-x-8 '>
					{/* <div className='w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 mb-8 lg:mb-0'>
					<Image
						src='/memoji1.svg'
						alt='Profile Picture'
						width={192}
						height={192}
						className='rounded-full object-cover'
					/>
				</div> */}
					<div className='leading-8'>
						Hi I am{' '}
						<h1 className=' inline-block font-extrabold text-red-600 '>
							Bhargav
						</h1>
						,
						<p className='mt-4 text-md '>
							I am developer(student) at{' '}
							<CustomLink href='https://www.foundamental.com/people/bhargav-babu'>
								Foundamental
							</CustomLink>{' '}
							gmbh, Berlin, Germany where I am building an internal{' '}
							<CustomLink href='https://en.wikipedia.org/wiki/Customer_relationship_management'>
								CRM
							</CustomLink>{' '}
							SAAS <CustomHighlight>Software As A Service</CustomHighlight>{' '}
							product called {'<'} Loura{'>'}. I am also a student at{' '}
							<CustomLink href='https://www.tu-ilmenau.de/en/'>
								TU Ilmenau
							</CustomLink>{' '}
							where I am pursuing my masters in{' '}
							<CustomLink href='https://www.tu-ilmenau.de/en/university/departments/department-of-computer-science-and-automation/study/research-in-computer-systems-engineering-msc'>
								RCSE
							</CustomLink>
							.
						</p>
						<p className='mt-4'>
							{' '}
							I am currently writing my Master thesis on Docker and Kubernetes.{' '}
						</p>
						<p className='mt-4 text-md'>
							{' '}
							I am enthusiatic about NextJS, Typescript, GraphQL ecosystem -but
							I am interested in all things tech. I&apos;m a hobby photographer
							as well and when I am not doing any of the above, I am either
							reading a book or watching a movie.
						</p>
					</div>
				</div>
				<div className='mt-8'>
					<h2 className='text-2xl font-bold '>Work Experience</h2>
					<ul className='mt-2 ml-8 text-md  list-disc list-inside '>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 b-shadow p-4 mt-4'>
							<span className='inline-flex transition-all duration-500 ease-in-out transform hover:translate-x-2 '>
								<CustomBold fontSize='md'>App Developer</CustomBold>
								{'  '} <Flame className='mx-4' /> {'  '}Foundamental gmBh {'  '}{' '}
								<Flame className='mx-4' /> {'  '}
								March 2023 - present
							</span>
							<p className='ml-8 transition-all duration-500 ease-in-out p-4 transform hover:translate-x-2 text-[#9ca3af] text-sm leading-relaxed '>
								My work mainly involves around Loura. I work on the frontend
								with Nextjs, Typescript, GraphQL, NestJS. Backend with Edgedb.
								For automation I use n8n hosted on onsite server. Loura is
								deployed on GCP with Kubernetes. I also work with data science
								projects using python.
							</p>
						</li>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 b-shadow p-4 mt-4'>
							<span className='inline-flex  '>
								Fullstack Dev(student) <Flame className='mx-4' /> Fraunhofer
								IOSB <Flame className='mx-4' /> March 2022 - March 2023
							</span>
							<p className='ml-8 transition-all duration-500 ease-in-out transform hover:translate-x-2 text-[#9ca3af] leading-relaxed text-sm p-4'>
								I built the frontend for state gas pipeline data using VueJs
								with Vite, dynamically rendering drawio diagrams. I created a
								headless service to process diagrams and map data to SVG parts,
								and deployed it in a Docker container. Using InfluxDB and
								Graphana, I enabled real-time data visualization as part of a
								larger project to monitor and adjust heat consumption from the
								pipelines.
							</p>
						</li>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 b-shadow p-4 mt-4'>
							<span className='inline-flex '>
								Software Engineer <Flame className='mx-4 text-red-900' />{' '}
								Accenture,India <Flame className='mx-4 text-green-900' />
								June 2017 - October 2021
							</span>
							<p className='ml-8 transition-all duration-500 ease-in-out transform hover:translate-x-2 text-[#9ca3af] leading-relaxed text-sm p-4'>
								I joined Accenture as a fresher out of college. I graduated with
								an Electronics degree and had just five days to join the
								company. I worked for over 4.5 years with technologies like
								Angular, SQL, Katalon, Shellscript and a few more.
							</p>
						</li>
					</ul>
				</div>
				{/* <div className='mt-8'>
					<h2 className='text-2xl font-bold '>Tech Skills</h2>
					<p className='mt-2 text-lg '>
						
					</p>
				</div> */}
				<div className='mt-8'>
					<h2 className='text-2xl font-bold '>Education</h2>
					<ul className='mt-2 text-lg  list-disc list-inside'>
						<li className=' transition-all duration-500 animate-slow transform hover:translate-x-2 '>
							<span className='inline-flex  '>
								Msc in RCSE from TU Ilmenau,Germany
							</span>
						</li>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2  '>
							<span className='inline-flex  '>B.E. from NIE,Mysuru,India </span>
						</li>
					</ul>
				</div>
				<div className='mt-8'>
					<h2 className='text-2xl font-bold '>Language Skills</h2>
					<p className='mt-2 text-lg '>
						Fluent in English, Kannada, Telugu, Hindi. German(A1)
					</p>
				</div>
				{/* <div className='mt-8'>
				<h2 className='text-2xl font-bold '>Hobbies</h2>
				<ul className='mt-2 text-lg  list-disc list-inside'>
					<li>[Hobby 1]</li>
					<li>[Hobby 2]</li>
					<li>[Hobby 3]</li>
				</ul>
			</div> */}
			</div>
		</>
	)
}

export default AboutMe
