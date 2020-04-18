import React from 'react'
import SecondBlogLeft from './second-blog-left'
import MorePost from './morepost'
import InfoBox from './c4-bio-box'
import Popular from './popular-post'

class SecondBlog extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='c4-second-blog'>
        <div className='c4-second-blog-head'>
          <h1>Developer Category</h1>
        </div>
        <div className='c4-second-blog-details'>
          <SecondBlogLeft />
          <div className='c4-second-blog-right'>
            <InfoBox />
            <Popular />
          </div>
        </div>
        <div className='c4-second-blog-head'>
          <h1>More Blog Posts</h1>
          <div className='c4-more-blog-post'>
            <MorePost />
            <MorePost />
            <MorePost />
          </div>
        </div>
      </div>
    )
  }
}

export default SecondBlog
