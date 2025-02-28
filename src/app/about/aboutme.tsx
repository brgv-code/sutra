'use client'
import Image from 'next/image'
import CustomLink from '@/components/ui/rough-notation/custom-links'
import CustomBold from '@/components/ui/rough-notation/custom-bold'
import { Dot, GitCommitHorizontal } from 'lucide-react'

const AboutMe = () => {
	return (
		<>
			{/* TODO: animatedgradient needs a fix here */}
			{/* <div className='bg-[#831919] w-screenflex justify-center'>
				This page is under construction
			</div> */}
			<div className='max-w-4xl min-h-screen mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
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
					<div className='w-full'>
						<h2 className='text-xl sm:text-2xl font-bold'>About</h2>

						<div className='leading-relaxed py-3 sm:py-4 pl-2 sm:pl-10 text-sm sm:text-base'>
							Hi I am{' '}
							<CustomBold
								className='inline-block'
								gradientColors={['#4c297b', '#4c297b']}
							>
								Bhargav
							</CustomBold>
							,
							<div className='mt-3 sm:mt-4 text-sm sm:text-base'>
								I am developer(student) at{' '}
								<CustomLink
									href='https://www.foundamental.com/people/bhargav-babu'
									underlineColor='#48F782'
								>
									Foundamental gmbH,
								</CustomLink>{' '}
								Berlin, Germany where I am building an internal CRM SAAS product
								called{' '}
								<CustomBold className='inline-block' fontSize='md'>
									Loura
								</CustomBold>
								. Simultaneously, I am completing my masters thesis in DevOps at{' '}
								<CustomLink href='https://www.tu-ilmenau.de/en/'>
									TU Ilmenau,
								</CustomLink>{' '}
								where I am pursuing my masters in{' '}
								<CustomLink
									underlineColor='#48F782'
									href='https://www.tu-ilmenau.de/en/university/departments/department-of-computer-science-and-automation/study/research-in-computer-systems-engineering-msc'
								>
									RCSE
								</CustomLink>
								.
							</div>
							<div className='mt-3 sm:mt-4'>
								I have a hunger to learn more and create meaningful products. I
								love my job as a developer, working on software that help people
								ease their lives. Coming from an electronics engineering
								background, for the effort I put in to learn web development and
								still learning today, I can say am living my dream. Hence, I do
								not restrict the type of work I do or the technologies I work
								with. I am always open to learning and exploring new things.
							</div>
							<div className='mt-3 sm:mt-4 text-sm sm:text-base'>
								{' '}
								{/* I am currently writing my Master thesis on Docker and
								Kubernetes.{' '} */}
							</div>
							<div className='mt-3 sm:mt-4 text-sm sm:text-base'>
								{' '}
								I am enthusiastic about{' '}
								<span className='font-bold'>NextJS</span>,{' '}
								<span className='font-bold'>Typescript</span>,{' '}
								<span className='font-bold'>GraphQL</span>. I use{' '}
								<span className='font-bold'>Jest</span> for API testing and{' '}
								<span className='font-bold'>Storybook</span> for documentation
								and frontend tests. I have started working with{' '}
								<span className='font-bold'> Python</span> for data science
								projects at work. I am also learning about{' '}
								<CustomLink
									underlineColor='#48F782'
									href='https://www.edgedb.com/'
								>
									Edgedb
								</CustomLink>{' '}
								and{' '}
								<CustomLink underlineColor='#48F782' href='https://n8n.io/'>
									n8n
								</CustomLink>{' '}
							</div>
						</div>
					</div>
				</div>
				<div className='mt-6 sm:mt-8'>
					<h2 className='text-xl sm:text-2xl font-bold'>Work Experience</h2>

					<ul className='mt-2 ml-2 sm:ml-8 text-sm sm:text-md list-inside '>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 p-2 sm:p-4 mt-2 sm:mt-4'>
							<div className='flex flex-col sm:flex-row sm:items-center'>
								<Image
									src={'/work/foundamental.png'}
									alt={'Foundamental logo'}
									width={35}
									height={35}
									style={{ display: 'inline-block', borderRadius: '50%' }}
									className='mb-2 sm:mb-0'
								/>
								<span className='flex flex-col sm:flex-row sm:items-center sm:ml-2'>
									<span className='font-medium'>App Developer</span>
									<div className='hidden sm:flex items-center'>
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#6E00FD]' />
										Foundamental gmBh
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#6E00FD]' />
										March 2023 - present
									</div>
									<div className='text-xs text-gray-400 mt-1 sm:hidden'>
										Foundamental gmBh | March 2023 - present
									</div>
								</span>
							</div>
							<div className='ml-2 sm:ml-8 text-[#9ca3af] text-xs sm:text-sm leading-relaxed mt-2'>
								My work mainly involves around Loura, internal CRM tool. I work
								on the frontend with Nextjs, Typescript, GraphQL, NestJS.
								Backend with Edgedb. For automation I use n8n hosted on onsite
								server. Loura is deployed on GCP with Kubernetes.
								<p className='py-2 leading-relaxed'>
									I use Python for data science related projects which help
									scrape data for startups and feed into our existing
									applications.
								</p>
							</div>
						</li>
					</ul>
					<ul className='mt-2 ml-2 sm:ml-8 text-sm sm:text-md list-inside '>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 p-2 sm:p-4 mt-2 sm:mt-4'>
							<div className='flex flex-col sm:flex-row sm:items-center'>
								<Image
									src={'/work/fraunhofer.png'}
									alt={'Fraunhofer logo'}
									width={30}
									height={30}
									style={{ display: 'inline-block', borderRadius: '50%' }}
									className='mb-2 sm:mb-0'
								/>
								<span className='flex flex-col sm:flex-row sm:items-center sm:ml-2'>
									<span className='font-medium'>Fullstack Dev(student)</span>
									<div className='hidden sm:flex items-center'>
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#1C9074]' />
										Fraunhofer IOSB
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#1C9074]' />
										March 2022 - March 2023
									</div>
									<div className='text-xs text-gray-400 mt-1 sm:hidden'>
										Fraunhofer IOSB | March 2022 - March 2023
									</div>
								</span>
							</div>
							<p className='ml-2 sm:ml-8 text-[#9ca3af] leading-relaxed text-xs sm:text-sm p-2 sm:p-4 mt-2'>
								I worked on the frontend for state gas pipeline data using VueJs
								with Vite, dynamically rendering drawio diagrams. Created a
								headless service to process diagrams and map data to SVG parts,
								and deployed it in a Docker container. Using InfluxDB and
								Graphana, enabling real-time data visualization as part of a
								larger project to monitor and adjust heat consumption from the
								pipelines.
							</p>
						</li>
					</ul>
					<ul className='mt-2 ml-2 sm:ml-8 text-sm sm:text-md list-inside '>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 p-2 sm:p-4 mt-2 sm:mt-4'>
							<div className='flex flex-col sm:flex-row sm:items-center'>
								<Image
									src={'/work/accenture.png'}
									alt={'Accenture logo'}
									width={35}
									height={35}
									style={{
										display: 'inline-block',
										borderRadius: '50%',
									}}
									className='mb-2 sm:mb-0'
								/>
								<span className='flex flex-col sm:flex-row sm:items-center sm:ml-2'>
									<span className='font-medium'>Software Engineer</span>
									<div className='hidden sm:flex items-center'>
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#9800FD]' />
										Accenture, India
										<GitCommitHorizontal className='mx-2 sm:mx-4 text-[#9800FD]' />
										June 2017 - October 2021
									</div>
									<div className='text-xs text-gray-400 mt-1 sm:hidden'>
										Accenture, India | June 2017 - October 2021
									</div>
								</span>
							</div>
							<p className='ml-2 sm:ml-8 text-[#9ca3af] leading-relaxed text-xs sm:text-sm p-2 sm:p-4 mt-2'>
								I joined Accenture as a fresher out of college. I graduated with
								an Electronics degree and had just five days to join the
								company. I worked for over 4.5 years with technologies like
								Angular, SQL, Katalon, Shellscript and a few more.
							</p>
						</li>
					</ul>
				</div>
				<div className='mt-6 sm:mt-8'>
					<h2 className='text-xl sm:text-2xl font-bold'>Education</h2>
					<ul className='mt-2 text-sm sm:text-lg list-disc list-inside pl-2 sm:pl-10'>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-2'>
							<span className='flex flex-col sm:flex-row sm:items-center'>
								<span className='font-medium'>Master in Science (Msc)</span>
								<div className='hidden sm:flex items-center'>
									<Dot className='text-[#129270]' />
									<span className='text-[#129270] text-sm'>2021 - present</span>
								</div>
								<div className='text-xs text-[#129270] mt-1 sm:hidden'>
									2021 - present
								</div>
							</span>
							<div className='pl-4 sm:pl-16 py-1 sm:py-3 text-gray-300 text-xs'>
								Technische Universität Ilmenau, Germany
							</div>
						</li>
						<li className='transition-all duration-500 ease-in-out transform hover:translate-x-2 py-2'>
							<span className='flex flex-col sm:flex-row sm:items-center'>
								<span className='font-medium'>
									Bachelor of Engineering (BE)
								</span>
								<div className='hidden sm:flex items-center'>
									<Dot className='text-[#129270]' />
									<span className='text-[#129270] text-sm'>2013 - 2017</span>
								</div>
								<div className='text-xs text-[#129270] mt-1 sm:hidden'>
									2013 - 2017
								</div>
							</span>
							<div className='pl-4 sm:pl-16 py-1 sm:py-3 text-gray-300 text-xs'>
								The National Institute of Engineering, Mysuru, India
							</div>
						</li>
					</ul>
				</div>
				<div className='mt-6 sm:mt-8'>
					<h2 className='text-xl sm:text-2xl font-bold'>Language Skills</h2>
					<div className='mt-2 text-sm sm:text-lg pl-2 sm:pl-10'>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-1 sm:py-2'>
							English 🇬🇧 (fluent)
						</li>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-1 sm:py-2'>
							German 🇩🇪 (A1)
						</li>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-1 sm:py-2'>
							Kannada 🇮🇳 (fluent)
						</li>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-1 sm:py-2'>
							Hindi 🇮🇳 (fluent)
						</li>
						<li className='transition-all duration-500 animate-slow transform hover:translate-x-2 py-1 sm:py-2'>
							Telugu 🇮🇳 (fluent, mothertongue)
						</li>
					</div>
				</div>
				<div className='mt-6 sm:mt-8'>
					<h2 className='text-xl sm:text-2xl font-bold'>Hobbies</h2>
					<p className='py-2 sm:py-4 leading-relaxed pl-2 sm:pl-10 text-sm sm:text-base'>
						I have been practicing photography from a few years now. I just like
						the process of filmmaking and capturing pictures. Lately, I
						haven&apos;t had the time to go out and shoot, but I have some
						footage to edit for my documentary on european cities.
					</p>
					<p className='py-2 leading-relaxed pl-2 sm:pl-10 text-sm sm:text-base'>
						Though I used to dread reading, I was more of a visual learner. I am
						slowly developing a habit of reading. I generally read about tech,
						biographies and business. My current read is{' '}
						<CustomLink
							href={
								'https://www.goodreads.com/book/show/7904927-mastering-the-vc-game?from_search=true&from_srp=true&qid=Bj3Im1bVwM&rank=1'
							}
						>
							Mastering the VC Game
						</CustomLink>
					</p>
				</div>
			</div>
		</>
	)
}

export default AboutMe
