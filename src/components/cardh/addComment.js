import React from 'react'

const AddComment = (props) => {
  return (
    <div className='comment-box'>
      <textarea className='comment-sec' placeholder='enter comment -- markdown supported' />
      <div className='add'>
        <button className='add-btn'>ADD +</button>
      </div>
    </div>
  )
}

export default AddComment
