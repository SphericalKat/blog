import React from 'react'

class MorePost extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='more-post-card'>
        <img src='https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328' />
        <div className='post-card-details'>
          <div className='c4-blog-tag'>
            <div className='dev-head'>
              CATS
            </div>
            <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
              APRIL 17,2020
            </div>
          </div>
          <div className='h blog-card-h more-post-card-h'>
            Why isn’t my cat using the litter box? Poops on me!! Need to bath again!
          </div>
        </div>
      </div>
    )
  }
}

export default MorePost
