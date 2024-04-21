import { BlogCardProps } from '@/components/ui/blog-card'
import { MultiSelectTags } from '@/lib/notion'
import { create } from 'zustand'

type BlogActions = {
	setTitle: (title: BlogCardProps['title']) => void
	setDate: (date: BlogCardProps['date']) => void
	setContent: (content: BlogCardProps['content']) => void
	setCover: (cover: BlogCardProps['cover']) => void
	setTags: (tags: BlogCardProps['tags']) => void
	setReadingTime: (reading_time: BlogCardProps['reading_time']) => void
}

export const useBlogStore = create<BlogCardProps & BlogActions>(set => ({
	title: '',
	date: '',
	content: '',
	cover: '',
	tags: [],
	id: '',
	reading_time: '',
	setTitle: (title: BlogCardProps['title']) =>
		set(state => ({ ...state, title })),
	setDate: (date: string) => set(state => ({ ...state, date })),
	setContent: (content: string) => set(state => ({ ...state, content })),
	setCover: (cover: string) => set(state => ({ ...state, cover })),
	setTags: (tags: MultiSelectTags[]) => set(state => ({ ...state, tags })),
	setReadingTime: (reading_time: string) =>
		set(state => ({ ...state, reading_time })),
}))
