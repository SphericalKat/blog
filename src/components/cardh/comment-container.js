import React from 'react'

import AddComment from './addComment'
import Comments from './comments'

const CommentContainer = (props) => {
  return (
    <div className='comment'>
      <div className='comment-div'>
        <Comments/>
      </div>
      <div className='add-comment-div'>
        <div className='comment-head'>
          Add Comment
        </div>
        <AddComment/>
      </div>
    </div>
  )
}

export default CommentContainer
