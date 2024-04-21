// Create BlogContext.js
import { SetStateAction, createContext, useContext, useState } from 'react'
import { BlogCardProps } from '../components/ui/blog-card'

const BlogContext = createContext({})

export const useBlog = () => useContext(BlogContext)

export const BlogProvider = ({
	children,
}: BlogCardProps & { children: React.ReactNode }) => {
	const [blog, setBlog] = useState(null)

	const selectBlog = (blogData: SetStateAction<null>) => {
		setBlog(blogData)
	}

	return (
		<BlogContext.Provider value={{ blog, selectBlog }}>
			{children}
		</BlogContext.Provider>
	)
}
