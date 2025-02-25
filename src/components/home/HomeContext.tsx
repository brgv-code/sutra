import React, { createContext } from 'react'
import { HomeContextType } from '@/utils/types'
export const HomeContext = createContext<HomeContextType>({
	hoveredCard: null,
	setHoveredCard: () => {},
	radialGradientPos: {} as any,
})
