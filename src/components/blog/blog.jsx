import React from 'react'
import Preview from '../preview/preview'

class Blog extends React.Component {
  constructor (props) {
    super(props)
    this.content = props.content
    this.title = props.title
    this.tags = props.tags
    this.coverImage = props.coverImage

    this.handleImageError = (e) => {
      if (e.target.src !== 'https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg') {
        e.target.style.display = 'none'
      }
    }
  }

  render () {
    const tags = []
    this.tags.forEach((e, i) => {
      tags.push(<div key={i} className='single-blog-single-tag'>{e}</div>)
    })
    return (
      <div className='single-blog'>
        <div className='single-blog-cover-image'>
          <img src={this.coverImage} alt='dsaf' onError={this.handleImageError} />
        </div>
        <div className='single-blog-heading'>
          <h1>{this.title}</h1>
        </div>
        <div className='single-blog-tags'>
          {tags}
        </div>
        <div className='single-blog-content'>
          <Preview content={this.content} />
        </div>
      </div>
    )
  }
}

export default Blog
