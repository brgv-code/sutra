import emojiRegex from 'emoji-regex'
import { GitHubRepos, LanguageUsage, Project } from './github'
export async function fetchProjects(): Promise<Project[] | null> {
	const response = await fetch('https://api.github.com/users/brgv-code/repos', {
		headers: {
			...(process.env.GITHUB_PAT && {
				authorization: `token ${process.env.GITHUB_PAT}`,
			}),
		},
	})
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
			}))
		})
		.filter(Boolean)

	const projects = (await Promise.all(projectPromises).then(results =>
		results.filter(Boolean),
	)) as Project[]
	return projects
}
