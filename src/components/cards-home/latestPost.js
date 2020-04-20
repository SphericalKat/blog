import React from 'react'

class LatestPost extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='latest-post-card'>
        <img src='https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328' />
        <div className='latest-post-card-details'>
          <div className='h blog-card-h latest-post-card-h' style={{ color: '#ffffff', paddingLeft: '20px' }}>
            Why cats movie is soo good.
          </div>
        </div>
      </div>
    )
  }
}

export default LatestPost
