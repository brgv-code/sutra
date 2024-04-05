import { BlogCard, BlogCardProps } from '../../../components/ui/blog-card'
const Blog: React.FC<BlogCardProps> = ({ title, content, date, cover }) => {
	return (
		<div className=' '>
			<BlogCard title={title} content={content} date={date} cover={cover} />
		</div>
	)
}
export default Blog
