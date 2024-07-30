import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {imageUrl, title, avatarUrl, topic, author, id} = blogData

    return (
      <Link to={`/blogs/${id}`} className="item-link">
        <div className="blog-item-container">
          <div className="blog-item-img-container">
            <img className="blog-item-img" src={imageUrl} alt="blog img" />
          </div>
          <div>
            <p>{topic}</p>
            <h1 className="blog-item-title">{title}</h1>
            <div>
              <img
                className="blog-item-avatar-url"
                src={avatarUrl}
                alt="avatar img"
              />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
