import Home from '@/components/home/HomeComponent'
import { getHomeData } from '@/lib/getHomeData'

export default async function Page() {
	const data = await getHomeData()
	return <Home {...data} />
}
