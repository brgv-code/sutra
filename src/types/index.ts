import type { FrontMatter } from '@/lib/mdx'
import type { Project as GithubProject } from '@/lib/github'

export type BlogPostFrontMatter = FrontMatter

export type BlogPostSummary = {
	title: string
	slug: string
}

export type Project = GithubProject
