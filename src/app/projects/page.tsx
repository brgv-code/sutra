const projects = [
	{
		title: 'Project 1',
		githubLink: 'https://github.com/project1',
		websiteLink: 'https://project1.com',
	},
	{
		title: 'Project 2',
		githubLink: 'https://github.com/project2',
		websiteLink: 'https://project2.com',
	},
	{
		title: 'Project 3',
		githubLink: 'https://github.com/project3',
		websiteLink: 'https://project3.com',
	},
	{
		title: 'Project 4',
		githubLink: 'https://github.com/project4',
		websiteLink: 'https://project4.com',
	},
	{
		title: 'Project 5',
		githubLink: 'https://github.com/project5',
		websiteLink: 'https://project5.com',
	},
]

const ProjectList = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			{projects.map((project, index) => (
				<div key={index} className='b-shadow rounded p-4'>
					<h2 className='text-xl font-bold mb-2'>{project.title}</h2>
					<p>This is a dummy project title</p>
					<div className='flex space-x-4'>
						<a
							href={project.githubLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src='/t_1.svg' alt='GitHub' className='w-6 h-6' />
						</a>
						<a
							href={project.websiteLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src='/t_2.svg' alt='Website' className='w-6 h-6' />
						</a>
					</div>
				</div>
			))}
		</div>
	)
}

export default ProjectList
