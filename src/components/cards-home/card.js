import React from 'react'
import CommentContainer from './comment-container'
import Preview from '../preview/preview'

class Card extends React.Component {
  constructor (props) {
    super(props)

    // states
    this.userCard = {
      head: 'HEAD', // Topic name needs to passed in here
      tag: '#DEV', // Top tag ie #DEV
      likes: 5, // Number of likes calculated dynamically
      comments: 1, // Number of comments on the post
      name: 'Shizuka', // Who posted the query
      descriptionName: 'Enginner', // What Job description does he give, ex. FullStackDev
      photoLink: ''
    }

    this.content = props.content
  }

  render () {
    return (
      <div className='card-tb'>
        <div className='card-top'>
          <div className='card-top-details'>
            <div className='card-top-details-head'>
              {this.userCard.head}
            </div>
            <div className='space' />
            <div className='card-top-details-dev'>
              {this.userCard.tag}
            </div>
          </div>
        </div>
        <div className='writeup'>
          <Preview content={this.content} />
        </div>
        <div className='functions'>
          <div className='like-box'>
            <div className='like'>
              <img src='http://localhost:3000/svg/thumbs-up.svg' />
              <div className='i'>
                {this.userCard.likes}
              </div>
            </div>
            <div className='like'>
              <img src='http://localhost:3000/svg/message-circle.svg' alt='fuck you' />
              <div className='i'>
                {this.userCard.comments}
              </div>
            </div>
          </div>
          <div className='head-card'>
            <div className='photo-details'>
              <div className='photo-name'>
                {this.userCard.name}
              </div>
              <div className='des'>
                {this.userCard.descriptionName}
              </div>
            </div>
            <img className='head-card-photo' src={this.photoLink} />
          </div>
          <div />
        </div>
        <CommentContainer />
      </div>
    )
  }
}

export default Card
