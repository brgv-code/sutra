import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: `${process.env.BASE_URL}/about`,
		},
	]
}
