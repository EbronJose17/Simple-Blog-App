import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlogData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({
      blogData: updatedBlogData,
      isLoaded: true,
    })
  }

  renderBlog = () => {
    const {blogData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogData
    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="blog-author-info-container">
          <img
            className="blog-details-author-img"
            src={avatarUrl}
            alt="avatar img"
          />
          <p>{author}</p>
        </div>
        <div>
          <img className="blog-details-img" src={imageUrl} alt={title} />
        </div>
        <p className="blog-details-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoaded} = this.state
    return (
      <div className="blog-details-container">
        {isLoaded ? (
          this.renderBlog()
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
