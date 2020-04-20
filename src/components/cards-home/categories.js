import React from 'react'

class Categories extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='c4-bio-box pop-box'>
        <h3 className='popular-head'>Categories</h3>
        <div className='pop-post'>
          <div className='h blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>Html</a>
            <span style={{ float: 'right' }}>(132)</span>
          </div>
          <div className=' blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>C/C++</a>
            <span style={{ float: 'right' }}>(69)</span>
          </div>
          <div className='h blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>Pyhton</a>
            <span style={{ float: 'right' }}>(420)</span>
          </div>
          <div className='h blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>VIT</a>
            <span style={{ float: 'right' }}>(420)</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories
