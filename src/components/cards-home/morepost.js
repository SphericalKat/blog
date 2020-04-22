import React from 'react'

class MorePost extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    const renderPost = this.props.morePosts.map(function (items, index) {
      return (
        <div key={index} className='more-post-card'>
          <img src={items.img} />
          <div className='post-card-details'>
            <div className='c4-blog-tag'>
              <div className='dev-head'>
                {items.dev}
              </div>
              <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
                {items.date}
              </div>
            </div>
            <div className='h blog-card-h more-post-card-h'>
              {items.question}
            </div>
          </div>
        </div>
      )
    })
    return renderPost
  }
}

export default MorePost
