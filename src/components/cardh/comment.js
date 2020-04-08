import React from 'react'

import CommentBox from './comment-box'
import AddComment from './addComment'

const Comment = (props) => {
    return (
        <div className='comment'>
            <div className='comment-div'>
                <div className='comment-head'>
                    COMMENTS
                </div>
                <CommentBox />
                <CommentBox />
                <CommentBox />
            </div>
            <div className='add-comment-div'>
                <div className='comment-head'>
                    ADD COMMENT
                </div>
                <AddComment />
            </div>
        </div>
    )
}

export default Comment