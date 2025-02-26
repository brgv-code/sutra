type WebVitalsMetric = {
	id: string
	name: string
	value: number
	rating: 'good' | 'needs-improvement' | 'poor'
	delta: number
	entries: PerformanceEntry[]
}

export function reportWebVitals(metric: WebVitalsMetric) {
	if (typeof window === 'undefined' || typeof performance === 'undefined') {
		return
	}

	if (
		metric.name === 'FCP' ||
		metric.name === 'LCP' ||
		metric.name === 'CLS' ||
		metric.name === 'FID' ||
		metric.name === 'TTFB'
	) {
		if (process.env.NODE_ENV === 'development') {
			console.log(metric.name, metric.value, metric.rating)
		}

		if (process.env.NODE_ENV === 'production') {
			const body = {
				name: metric.name,
				delta: metric.delta,
				id: metric.id,
				value: metric.value,
				rating: metric.rating,
			}
		}
	}
}
