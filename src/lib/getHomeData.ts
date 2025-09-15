// src/lib/getHomeData.ts
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { fetchProjects } from '@/lib/projects'
import type { BlogPostSummary, Project } from '@/types/index'

export async function getHomeData(): Promise<{
	latestPosts: BlogPostSummary[]
	projects: Project[] | null
}> {
	const [posts, projects] = await Promise.all([
		getAllFilesFrontMatter('blog'),
		fetchProjects(),
	])

	const latestPosts: BlogPostSummary[] = posts.slice(0, 3).map(post => ({
		title: post.title,
		slug: post.slug,
	}))

	return { latestPosts, projects }
}
