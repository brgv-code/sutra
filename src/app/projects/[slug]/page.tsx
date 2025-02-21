import { notFound } from 'next/navigation'
import { fetchProjects, fetchReadme } from '@/lib/projects'
import ProjectTechBadge from '@/components/ProjectsTechBadge'
import { convertMarkdownToHtml } from '@/lib/markdown'
import ProjectLink from '@/components/ProjectLink'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '@/components/ui/custom-code-block'
import CustomListItem from '@/components/ui/custom-list'
import CustomLink from '@/components/ui/custom-links'
import MarkdownRenderer from '../../../components/MarkdownRenderer'
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
	if (!project) return
	const readme = await fetchReadme('brgv-code', project?.name)
	if (!readme) return
	const sanitizedReadme = await convertMarkdownToHtml(readme)
	if (!project) {
		notFound()
	}
	console.log(sanitizedReadme, 'sanitizedReadme')
	console.log(readme, 'readme')
	return (
		<div className='relative text-white min-h-screen'>
			<div className='max-w-[800px] mx-auto px-4 py-20'>
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h1 className='text-4xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
							{project.name}
						</h1>
						<ProjectLink
							githubUrl={project.url}
							hostedUrl={project.homepage || ''}
							description={project.description}
						/>
						<div className='flex flex-wrap gap-2'>
							{project.languages &&
								Object.keys(project.languages).map((tech, i) => (
									<ProjectTechBadge key={i} tech={tech} />
								))}
						</div>
					</div>

					{/* <div className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl'> */}
					{/* <div className='prose prose-invert max-w-none'> */}
					{/* {readme.split('\n').map((paragraph, i) => (
								<p key={i} className='text-gray-300'>
									{paragraph}
								</p>
							))} */}
					<div className='border border-white/10 rounded-xl p-6 shadow-xl'>
						<div className='prose prose-invert max-w-none'>
							<MarkdownRenderer content={readme} />
							{/* </div> */}
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
