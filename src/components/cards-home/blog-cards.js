import React from 'react'

class BlogCard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='blog-card'>
        <img src='https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900' />
        <div className='blog-card-details'>
          <div className='c4-blog-tag '>
            <div className='dev-head'>
              CATS
            </div>
            <div className='dev-date' style={{ color: 'rgba(0,0,0,0.5)' }}>
              APRIL 17,2020
            </div>
          </div>
          <div className='h blog-card-h'>
            Why isn’t my cat using the litter box?
          </div>
        </div>
      </div>
    )
  }
}

export default BlogCard