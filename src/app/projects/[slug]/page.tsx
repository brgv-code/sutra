import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchProjects } from '@/lib/projects'
import ProjectTechBadge from '@/components/ProjectsTechBadge'

async function getProjects() {
	const projectsPromise = fetchProjects()
	const [projects] = await Promise.all([projectsPromise])
	return projects
}
export async function generateStaticParams() {
	const projects = await getProjects()

	return (
		projects?.map(project => ({
			slug: project.name,
		})) || []
	)
}
export default async function ProjectDetail({
	params,
}: {
	params: { slug: string }
}) {
	const projects = await getProjects()
	const project = projects?.find(p => p.name === params.slug)

	if (!project) {
		notFound()
	}
	return (
		<div className='relative text-white min-h-screen'>
			<div className='max-w-[800px] mx-auto px-4 py-20'>
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h1 className='text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
							{project.name}
						</h1>

						<div className='flex flex-wrap gap-2'>
							{project.languages &&
								Object.keys(project.languages).map((tech, i) => (
									<ProjectTechBadge key={i} tech={tech} />
								))}
						</div>
					</div>

					<div className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl'>
						<div className='prose prose-invert max-w-none'>
							{project.description.split('\n').map((paragraph, i) => (
								<p key={i} className='text-gray-300'>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
