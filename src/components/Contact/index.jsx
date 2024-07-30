import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    console.log(formattedData)

    this.setState({
      blogsData: formattedData,
      isLoaded: true,
    })
  }

  render() {
    const {blogsData, isLoaded} = this.state

    return (
      <div>
        {isLoaded ? (
          blogsData.map(eachBlogData => (
            <BlogItem blogData={eachBlogData} key={eachBlogData.id} />
          ))
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
