// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list">
      {blogsList.map(blog => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  )
}

export default BlogList
