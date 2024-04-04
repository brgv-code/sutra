import { BlogCard, BlogCardProps } from '../../../components/ui/blog-card'
const Blog: React.FC<BlogCardProps> = ({ title, content, date }) => {
	return (
		<div className=' grid grid-cols-1 lg:grid-cols-2 place-content-start gap-8 px-0'>
			<BlogCard title={title} content={content} date={date} />
			<BlogCard title={title} content={content} date={date} />
		</div>
	)
}
export default Blog
