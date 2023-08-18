// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li className="list-item">
      <div className="top">
        <h1 className="name">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
