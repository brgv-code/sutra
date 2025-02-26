'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ToastNotification from '@/components/ToastNotification'

interface ToastContextType {
	showToast: (message: string, icon: React.ReactNode) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [toast, setToast] = useState<{
		message: string
		icon: React.ReactNode
		color: string
	} | null>(null)
	const pathname = usePathname()

	const getToastColor = () => {
		if (pathname?.startsWith('/blog'))
			return ' border-green-500/50 bg-green-500/20 border'
		if (pathname?.startsWith('/projects'))
			return ' border-purple-500/50 bg-purple-500/20 border'
		if (pathname?.startsWith('/about'))
			return ' border-teal-500/50 bg-teal-500/20 border'
		return ' border-black bg-black/20 border'
	}

	const showToast = (message: string, icon: React.ReactNode) => {
		setToast({ message, icon, color: getToastColor() })

		setTimeout(() => {
			setToast(null)
		}, 2000)
	}

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			{toast && (
				<ToastNotification
					message={toast.message}
					icon={toast.icon}
					color={toast.color}
				/>
			)}
		</ToastContext.Provider>
	)
}

export const useToast = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider')
	}
	return context
}
