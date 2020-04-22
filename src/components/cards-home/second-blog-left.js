import React from 'react'
import BlogCard from './blog-cards'

class SecondBlogLeft extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    const category = this.props.category.map(function (head, index) {
      return (
        <div key={index}>
          <div className='c4-second-blog-head'>
            <h1>{head.categoryName}</h1>
          </div>
          <div className='left'>
            <BlogCard posts={head.posts} />
          </div>
        </div>
      )
    })
    return <div className='c4-second-blog-left'>{category}</div>
  }
}

export default SecondBlogLeft
