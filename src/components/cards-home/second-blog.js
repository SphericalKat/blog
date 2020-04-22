import React from 'react'
import SecondBlogLeft from './second-blog-left'
import MorePost from './morepost'
import InfoBox from './c4-bio-box'
import Popular from './popular-post'
import Tags from './tags'

class SecondBlog extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const ret = <MorePost morePosts={this.props.morePosts} />

    return (
      <div className='c4-second-blog'>
        <div className='c4-second-blog-details'>
          <SecondBlogLeft category={this.props.category} />
          <div className='c4-second-blog-right'>
            <InfoBox info={this.props.info} />
            <Popular popular={this.props.popular} />
            <Tags tags={this.props.tags} />
          </div>
        </div>
        <div className='c4-second-blog-head c4-forum-blog'>
          <h1>More Blog Posts</h1>
          <div className='c4-more-blog-post'>
            {ret}
          </div>
        </div>
      </div>
    )
  }
}

export default SecondBlog
