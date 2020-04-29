import React from 'react'
import SecondBlogLeft from './second-blog-left'
// import MorePost from './morepost'
// import InfoBox from './c4-bio-box'
// import Popular from './popular-post'
// import Tags from './tags'

class SecondBlog extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='c4-second-blog'>
        <div className='c4-second-blog-details'>
          <SecondBlogLeft category={this.props.category} />
          <div className='c4-second-blog-right'>
            {/* <InfoBox info={this.props.info} /> */}
            {/* <Popular popular={this.props.popular} /> */}
            {/* <Tags tags={this.props.tags} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SecondBlog
