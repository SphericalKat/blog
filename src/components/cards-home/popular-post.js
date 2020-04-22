import React from 'react'

class Popular extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='c4-bio-box pop-box'>
        <h3 className='popular-head'>Popular Posts</h3>
        <div className='pop-post'>
          <div className='h blog-card-h pop-post-card-h'>
            {this.props.popular.trendingPost}
          </div>
          <div className='h blog-card-h pop-post-card-h'>
            {this.props.popular.trendingPost}
          </div>
          <div className='h blog-card-h pop-post-card-h'>
            {this.props.popular.trendingPost}
          </div>
        </div>
      </div>
    )
  }
}

export default Popular
