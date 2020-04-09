import React from 'react'
import CommentBox from './comment-box'

class Comments extends React.Component {
  constructor (props) {
    super(props)

    // Object properties
    this.onReadLength = 1
    this.comments = [
      {
        text: '',
        user: {},
        likes: {},
        comments: 1
      }, {
        text: '',
        user: {},
        likes: {},
        comments: 1
      }, {
        text: '',
        user: {},
        likes: {},
        comments: 1
      }
    ]
    const readMoreDisplay = this.comments.length > 1 ? 'auto' : 'none'

    // States
    this.state = {
      currentCount: 1,
      commentsElem: [<CommentBox key={0} comment={this.comments[0]} />],
      readMoreDisplay
    }

    // Event handlers

    this.handleReadMoreClick = (e) => {
      const comms = this.state.commentsElem
      for (let i = 0; i < this.onReadLength && (i + this.state.currentCount) <= this.comments.length; i++) {
        comms.push(
          <CommentBox
            key={this.state.currentCount + i}
            comments={this.comments[this.state.currentCount + i]}
          />
        )
      }
      const currentCount = this.state.currentCount + this.onReadLength
      let readMoreDisplay
      if (currentCount >= this.comments.length) {
        readMoreDisplay = 'none'
      }
      this.setState({ commentsElem: comms, currentCount: this.state.currentCount + this.onReadLength, readMoreDisplay })
    }
  }

  render () {
    return (
      <div>
        <ul className='comments-ul'>
          {this.state.commentsElem}
        </ul>
        <div className='read-more'>
          <div
            className='button-comments'
            style={{ display: this.state.readMoreDisplay }}
            onClick={this.handleReadMoreClick}
          >
            Read more comments
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
