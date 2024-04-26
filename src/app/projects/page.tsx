import { fetchProjects } from '@/lib/projects'
import { Github, Link } from 'lucide-react'

const ProjectList = async () => {
	const response = await fetchProjects()
	if (response == null) return
	function getToday(datestring: Date) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]

		let date = new Date()

		if (datestring) {
			date = new Date(datestring)
		}

		const day = date.getDate()
		const month = months[date.getMonth()]
		const year = date.getFullYear()
		let today = `${month} ${day}, ${year}`

		return today
	}
	console.log(
		response.map(res => res),
		'response',
	)
	const sortedProjects = response.sort(
		(a, b) => Number(a.created_at) - Number(b.created_at),
	)

	return (
		<div className='grid grid-cols-1 w-1/2'>
			{sortedProjects.map((project, index) => (
				<div
					key={index}
					className='b-shadow rounded p-4 m-4 flex justify-between'
				>
					<div className='flex flex-col'>
						<h2 className='text-xl font-bold mb-2 '>
							<span className='mr-2'> {project.icon}</span> {project.name}
						</h2>
						<p>{project.description}</p>
					</div>
					<div className='flex flex-col justify-between'>
						<div className='flex justify-end space-x-4 '>
							<a href={project.url} target='_blank' rel='noopener noreferrer'>
								<Link />
							</a>
							<a
								href={project.homepage}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Github />
							</a>
						</div>
						{/* TODO: fix the fontsof languages */}
						{/* <div className=''>
							<p className='text-sm'>
								{project.languages && Object.keys(project.languages)}
							</p>
						</div> */}
						{getToday(project.created_at)}
					</div>

					{/* {project.languages_url} */}
				</div>
			))}
		</div>
	)
}

export default ProjectList
