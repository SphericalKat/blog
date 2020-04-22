import React from 'react'

class BlogCard extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const render = this.props.posts.map(function (posts, index) {
      return (
        <div key={index} className='blog-card'>
          <img src={posts.img} />
          <div className='blog-card-details'>
            <div className='c4-blog-tag '>
              <div className='dev-head'>
                {posts.dev}
              </div>
              <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
                {posts.date}
              </div>
            </div>
            <div className='h blog-card-h'>
              {posts.question}
            </div>
          </div>
        </div>
      )
    })
    return render
  }
}

export default BlogCard
