import React from 'react'

const CommentBox = (props) => {
    return (
        <div className='comment-box'>
            <div className={'comment-box-header'} style={{display: 'flex'}}>
            <div className='comment-photo'>
            </div>
            <div className='user-comment'>
                <div className='user-comment-name'>
                    Shizuka
                    </div>
                <div className='user-des'>
                    Engineer
                    </div>
            </div>
            </div>
            <div className='comments'>
                Hello whats up
                    </div>
            <div className='comment-like'>
                <img className='func' src='http://localhost:3000/svg/thumbs-up.svg' />
                <img className='func' src='http://localhost:3000/svg/message-circle.svg' />
            </div>
        </div>
    )
}

export default CommentBox
