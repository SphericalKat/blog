import React from 'react'
import CommentContainer from './comment-container'
import Preview from '../preview/preview'

class Card extends React.Component {
  constructor (props) {
    super(props)

    // states
    this.card = {
      head: 'HEAD', // Topic name needs to passed in here
      tag: '#DEV', // Top tag ie #DEV
      likes: 5, // Number of likes calculated dynamically
      comments: 1, // Number of comments on the post
      name: 'Shizuka', // Who posted the query
      descriptionName: 'Enginner', // What Job description does he give, ex. FullStackDev
      photoLink: ''
    }

  }

  render () {
    return (
      <div className='card-tb'>
        <div className='card-top'>
          <div className='card-top-details'>
            <div className='card-top-details-head'>
              {this.card.head}
            </div>
            <div className='space'/>
            <div className='card-top-details-dev'>
              {this.card.tag}
            </div>
          </div>
        </div>
        <div className='writeup'>
          <Preview content={this.props.content}/>
        </div>
        <div className='read-more'>
          <div className='button'>...Read More</div>
        </div>
        <div className='functions'>
          <div className='like-box'>
            <div className='like'>
              <img src='http://localhost:3000/svg/thumbs-up.svg'/>
              <div className='i'>
                {this.card.likes}
              </div>
            </div>
            <div className='like'>
              <img src='http://localhost:3000/svg/message-circle.svg' alt='fuck you'/>
              <div className='i'>
                {this.card.comments}
              </div>
            </div>
          </div>
          <div className='head-card'>
            <div className='photo-details'>
              <div className='photo-name'>
                {this.card.name}
              </div>
              <div className='des'>
                {this.card.descriptionName}
              </div>
            </div>
            <img className='photo' src={this.photoLink}/>
          </div>
          <div/>
        </div>
        <CommentContainer/>
      </div>
    )
  }
}

export default Card
