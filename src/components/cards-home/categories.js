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
            <a href='#'>{this.props.category.categoryName}</a>
          </div>
          <div className=' blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>{this.props.category.categoryName}</a>
          </div>
          <div className='h blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>{this.props.category.categoryName}</a>
          </div>
          <div className='h blog-card-h pop-post-card-h categories-comp'>
            <a href='#'>{this.props.category.categoryName}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories
