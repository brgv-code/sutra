import {
	useMotionValue,
	useSpring,
	useTransform,
	MotionValue,
} from 'framer-motion'
import { useEffect } from 'react'

export const useMouseGradientEffect = (): MotionValue<string> => {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const springConfig = { damping: 25, stiffness: 150 }
	const smoothX = useSpring(mouseX, springConfig)
	const smoothY = useSpring(mouseY, springConfig)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [mouseX, mouseY])

	const radialGradientPos = useTransform(
		[smoothX, smoothY],
		([x, y]) => `${x}px ${y}px`,
	)

	return radialGradientPos
}
