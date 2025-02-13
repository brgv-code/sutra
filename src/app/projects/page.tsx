// import { fetchProjects } from '@/lib/projects'
// import { Github, Link } from 'lucide-react'

// const ProjectList = async () => {
// 	const response = await fetchProjects()
// 	if (response == null) return
// 	function getToday(datestring: Date) {
// 		const months = [
// 			'January',
// 			'February',
// 			'March',
// 			'April',
// 			'May',
// 			'June',
// 			'July',
// 			'August',
// 			'September',
// 			'October',
// 			'November',
// 			'December',
// 		]

// 		let date = new Date()

// 		if (datestring) {
// 			date = new Date(datestring)
// 		}

// 		const day = date.getDate()
// 		const month = months[date.getMonth()]
// 		const year = date.getFullYear()
// 		let today = `${month} ${day}, ${year}`

// 		return today
// 	}

// 	return (
// 		// <div className='grid grid-cols-1 w-1/2'>
// 		// 	{response.map((project, index) => (
// 		// 		<div
// 		// 			key={index}
// 		// 			className='b-shadow rounded p-4 m-4 flex justify-between'
// 		// 		>
// 		// 			<div className='flex flex-col'>
// 		// 				<h2 className='text-xl font-bold mb-2 '>
// 		// 					<span className='mr-2'> {project.icon}</span> {project.name}
// 		// 				</h2>
// 		// 				<p>{project.description}</p>
// 		// 			</div>
// 		// 			<div className='flex flex-col justify-between'>
// 		// 				<div className='flex justify-end space-x-4 '>
// 		// 					<a
// 		// 						href={project.homepage}
// 		// 						target='_blank'
// 		// 						rel='noopener noreferrer'
// 		// 					>
// 		// 						<Link />
// 		// 					</a>
// 		// 					<a href={project.url} target='_blank' rel='noopener noreferrer'>
// 		// 						<Github />
// 		// 					</a>
// 		// 				</div>
// 		// 				{/* TODO: fix the fontsof languages */}
// 		// 				{/* <div className=''>
// 		// 					<p className='text-sm'>
// 		// 						{project.languages && Object.keys(project.languages)}
// 		// 					</p>
// 		// 				</div> */}
// 		// 				{getToday(project.created_at)}
// 		// 			</div>

// 		// 			{/* {project.languages_url} */}
// 		// 		</div>
// 		// 	))}
// 		// </div>

// 		<div className='bg-black text-white min-h-screen'>
// 			<div className='max-w-[1200px] mx-auto px-4 py-20'>
// 				<h1 className='text-4xl font-bold mb-4'>Projects</h1>
// 				<p className='text-gray-400 mb-12'>
// 					A collection of my recent work and experiments
// 				</p>

// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 					{[
// 						{
// 							title: 'E-commerce Platform',
// 							description:
// 								'A full-featured online store built with Next.js and Stripe, featuring real-time inventory management and analytics.',
// 							tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
// 							link: '#',
// 						},
// 						{
// 							title: 'AI Chat Interface',
// 							description:
// 								'An intelligent chat interface powered by OpenAI, featuring real-time responses and conversation memory.',
// 							tech: ['React', 'OpenAI', 'TypeScript'],
// 							link: '#',
// 						},
// 						{
// 							title: 'Analytics Dashboard',
// 							description:
// 								'Real-time data visualization dashboard with customizable widgets and automated reporting.',
// 							tech: ['Next.js', 'D3.js', 'PostgreSQL'],
// 							link: '#',
// 						},
// 						{
// 							title: 'Task Management App',
// 							description:
// 								'A collaborative task management platform with real-time updates and team features.',
// 							tech: ['React', 'Socket.io', 'Node.js'],
// 							link: '#',
// 						},
// 					].map((project, i) => (
// 						<div
// 							key={i}
// 							className='border border-white/10 rounded-lg p-8 hover:bg-white/5 transition'
// 						>
// 							<h2 className='text-2xl font-semibold mb-4'>{project.title}</h2>
// 							<p className='text-gray-400 mb-6'>{project.description}</p>
// 							<div className='flex flex-wrap gap-2 mb-6'>
// 								{project.tech.map((tech, i) => (
// 									<span
// 										key={i}
// 										className='bg-white/10 px-3 py-1 rounded-full text-sm'
// 									>
// 										{tech}
// 									</span>
// 								))}
// 							</div>
// 							<a
// 								href={project.link}
// 								className='text-white hover:text-gray-300 transition inline-flex items-center gap-2'
// 							>
// 								View Project →
// 							</a>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default ProjectList
import Link from 'next/link'

const projects = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A full-featured online store built with Next.js and Stripe, featuring real-time inventory management and analytics.',
		tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
		slug: 'e-commerce-platform',
	},
	{
		id: 2,
		title: 'AI Chat Interface',
		description:
			'An intelligent chat interface powered by OpenAI, featuring real-time responses and conversation memory.',
		tech: ['React', 'OpenAI', 'TypeScript'],
		slug: 'ai-chat-interface',
	},
	{
		id: 3,
		title: 'Analytics Dashboard',
		description:
			'Real-time data visualization dashboard with customizable widgets and automated reporting.',
		tech: ['Next.js', 'D3.js', 'PostgreSQL'],
		slug: 'analytics-dashboard',
	},
	{
		id: 4,
		title: 'Task Management App',
		description:
			'A collaborative task management platform with real-time updates and team features.',
		tech: ['React', 'Socket.io', 'Node.js'],
		slug: 'task-management-app',
	},
]

export default function Projects() {
	return (
		<div className='bg-black text-white min-h-screen'>
			<div className='max-w-[1200px] mx-auto px-4 py-20'>
				<h1 className='text-4xl font-bold mb-4'>Projects</h1>
				<p className='text-gray-400 mb-12'>
					A collection of my recent work and experiments
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projects.map(project => (
						<div
							key={project.id}
							className='border border-white/10 rounded-lg p-8 hover:bg-white/5 transition'
						>
							<h2 className='text-2xl font-semibold mb-4'>{project.title}</h2>
							<p className='text-gray-400 mb-6'>{project.description}</p>
							<div className='flex flex-wrap gap-2 mb-6'>
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className='bg-white/10 px-3 py-1 rounded-full text-sm'
									>
										{tech}
									</span>
								))}
							</div>
							<Link
								href={`/projects/${project.slug}`}
								className='text-white hover:text-gray-300 transition inline-flex items-center gap-2'
							>
								View Project →
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
