import ProjectCard from '@/components/ProjectsCard'
import { fetchProjects } from '@/lib/projects'

export default async function Projects() {
	const response = await fetchProjects()
	if (!response) return <div>No projects found</div>

	return (
		<>
			<div className=' text-white min-h-screen relative'>
				<div className='max-w-[1200px] mx-auto px-4 py-20'>
					<h1 className='text-4xl font-bold mb-4'>Projects</h1>
					<p className='text-gray-400 mb-12'>
						A collection of my recent work and experiments
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{response?.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
