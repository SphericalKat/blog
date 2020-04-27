import React from 'react'

class BlogCard extends React.Component {
  constructor (props) {
    super(props)
    this.url = 'http://localhost:3000'
  }

  render () {
    const render = this.props.posts.map((posts, index) => {
      const date = new Date(posts.dateTime)
      let tags
      if (posts.tags) {
        tags = posts.tags.map((tag, index) => {
          return (
            <div className='dev-tags' key={index}>
              {tag}
            </div>
          )
        })
      }
      return (
        <div
          key={index} className='blog-card' style={{ cursor: 'pointer' }}
          onClick={
            () => { window.location = `${this.url}/blogs/id/${posts._id}` }
          }
        >
          <img src={posts.coverImage} />
          <div className='blog-card-details'>
            <div className='dev-head'>
              {posts.title}
            </div>
            <div className='c4-blog-tag '>
              <div className='dev-tags'>
                {tags}
              </div>
              <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      )
    })
    return render
  }
}

export default BlogCard
