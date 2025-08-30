import emojiRegex from 'emoji-regex'
import { GitHubRepos, LanguageUsage, Project } from './github'
export async function fetchProjects(): Promise<Project[] | null> {
	const response = await fetch(
		'https://api.github.com/users/brgv-code/repos?per_page=100&page=1',
		{
			headers: {
				'User-Agent': 'sutra-blog-app',
				...(process.env.GITHUB_PAT && {
					authorization: `token ${process.env.GITHUB_PAT}`,
				}),
			},
		},
	)
	if (response.status !== 200) {
		const json = (await response.json()) as {
			documentation_url: string
			message: string
		}

		console.error({ error: json })

		return null
	}
	const json = (await response.json()) as GitHubRepos

	const extractLanguages = async (url: string): Promise<LanguageUsage> => {
		const languages = await fetch(
			`https://api.github.com/repos/brgv-code/${url}/languages`,
		)

		const fetchUrl: LanguageUsage = await languages.json()
		return fetchUrl
	}

	const projectPromises = json
		.map(repo => {
			if (!repo.topics.includes('portfolio')) return null
			if (repo.archived) return null

			const trimmedDescription = repo.description.split(' ')
			trimmedDescription.shift()
			const description = trimmedDescription.join(' ')

			return extractLanguages(repo.name).then(languages => ({
				description,
				icon: (() => {
					if (!repo.description) return undefined
					const char = repo.description.split(' ')[0]
					return emojiRegex().test(char) ? char : undefined
				})(),
				homepage: repo.homepage ?? undefined,
				name: repo.name,
				languages,
				url: repo.html_url.toLowerCase(),
				created_at: repo.created_at,
				id: repo.id,
			}))
		})
		.filter(Boolean)

	const projects = (await Promise.all(projectPromises).then(results =>
		results.filter(Boolean),
	)) as Project[]
	return projects.sort((a, b) => {
		return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
	})
}

export async function fetchReadme(
	owner: string,
	repo: string,
): Promise<string | null> {
	const url = `https://api.github.com/repos/brgv-code/${repo}/readme`

	const response = await fetch(url, {
		headers: {
			Accept: 'application/vnd.github.v3.raw',
			'User-Agent': 'sutra-blog-app',
			...(process.env.GITHUB_PAT && {
				Authorization: `token ${process.env.GITHUB_PAT}`,
			}),
		},
	})

	if (response.status !== 200) {
		console.error(`Error fetching README: ${response.statusText}`)
		return null
	}
	const readmeContent = await response.text()
	return readmeContent
}
export async function fetchReadmesForAllProjects(): Promise<{
	[repo: string]: string | null
}> {
	const projects = await fetchProjects()
	if (!projects) return {}

	const readmePromises = projects.map(async (project: { name: string }) => {
		const readme = await fetchReadme('brgv-code', project.name)
		return { [project.name]: readme }
	})

	const readmeResults = await Promise.all(readmePromises)
	return Object.assign({}, ...readmeResults)
}
