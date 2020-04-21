import React from 'react'

class MorePost extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='more-post-card'>
        <img src={this.props.morePosts.img} />
        <div className='post-card-details'>
          <div className='c4-blog-tag'>
            <div className='dev-head'>
              {this.props.morePosts.dev}
            </div>
            <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
              {this.props.morePosts.date}
            </div>
          </div>
          <div className='h blog-card-h more-post-card-h'>
            {this.props.morePosts.question}
          </div>
        </div>
      </div>
    )
  }
}

export default MorePost
