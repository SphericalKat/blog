import React from 'react'
import Preview from '../preview/preview'

class Blog extends React.Component {
  constructor (props) {
    super(props)
    this.content = props.content
    this.title = props.title
    this.tags = props.tags
    this.coverImage = props.coverImage
    this.author = props.author
    this.profilePic = props.profilePic
    this.date = new Date(props.date)

    this.handleImageError = (e) => {
      if (e.target.src !== 'https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg') {
        e.target.style.display = 'none'
      }
    }
  }

  render () {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let tags = []
    tags = this.tags.map((e, i) => <div key={i} className='single-blog-single-tag'>{e}</div>)

    return (
      <div className='single-blog'>
        <div className='single-blog-heading'>
          <h1>{this.title}</h1>
        </div>

        <div className='single-blog-secondary-heading'>
          <img src={this.profilePic} className='single-blog-secondary-profile-pic' />
          <div className='single-blog-secondary-heading-names'>
            <h5>{this.author}</h5>
            <h5
              style={{ color: 'rgba(0, 0, 0, 0.54)' }}
            >{`${this.date.getDate()} ${months[this.date.getMonth()]} ${this.date.getFullYear()}`}
            </h5>
          </div>
        </div>

        <div className='single-blog-tags'>
          {tags}
        </div>

        <div className='single-blog-cover-image'>
          <img src={this.coverImage} onError={this.handleImageError} style={{ width: '100%' }} />
        </div>

        <div className='single-blog-content'>
          <Preview content={this.content} />
        </div>
      </div>
    )
  }
}

export default Blog
