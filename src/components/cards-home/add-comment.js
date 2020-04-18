import React from 'react'
import CreateContent from '../create/create-content'

class AddComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = { content: '' }
  }

  render () {
    return (
      <div className='comment-box'>
        <CreateContent content={this.state.content} />
        <div className='add'>
          <button className='add-btn'>ADD +</button>
        </div>
      </div>
    )
  }
}

export default AddComment
