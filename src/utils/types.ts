// utils/types.ts
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { MotionValue } from 'framer-motion'

export interface Technology {
	name: string
	icon: LucideIcon
	bg_color: string
	border_color: string
	text_color: string
}

export interface SocialLink {
	icon: LucideIcon
	url: string
	label: string
}

export interface Project {
	title: string
	tech: string
}

export interface BentoCardProps {
	children: ReactNode
	className?: string
	colspan?: number
	rowspan?: number
	onHover?: () => string | null | undefined
	gradient?: boolean
	onClick?: () => void
}

export interface HomeContextType {
	hoveredCard: string | null
	setHoveredCard: (card: string | null) => void
	radialGradientPos: MotionValue<string>
}
