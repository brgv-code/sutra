import { notFound } from 'next/navigation'
import Image from 'next/image'

const projects = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A full-featured online store built with Next.js and Stripe, featuring real-time inventory management and analytics.',
		tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
		slug: 'e-commerce-platform',
		fullDescription: `
      This e-commerce platform is a comprehensive solution for online retailers. Built with Next.js for optimal performance and SEO, it integrates seamlessly with Stripe for secure payments and Tailwind CSS for a sleek, responsive design.

      Key Features:
      - Real-time inventory management
      - Advanced analytics dashboard
      - Customizable product pages
      - User authentication and profiles
      - Order tracking and history
      - Admin panel for easy store management

      The platform is designed to be scalable and easily customizable, allowing businesses to quickly set up their online presence and start selling.
    `,
		image: '/placeholder.svg?height=400&width=600',
	},
	// ... other projects
]

export async function generateStaticParams() {
	return projects.map(project => ({
		slug: project.slug,
	}))
}

export default function ProjectDetail({
	params,
}: {
	params: { slug: string }
}) {
	const project = projects.find(p => p.slug === params.slug)

	if (!project) {
		notFound()
	}

	return (
		<div className='bg-black text-white min-h-screen'>
			<div className='max-w-[800px] mx-auto px-4 py-20'>
				<h1 className='text-4xl font-bold mb-4'>{project.title}</h1>
				<Image
					src={project.image || '/placeholder.svg'}
					alt={project.title}
					width={600}
					height={400}
					className='w-full h-auto rounded-lg mb-8'
				/>
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
				<div className='prose prose-invert max-w-none'>
					{project.fullDescription.split('\n').map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			</div>
		</div>
	)
}
