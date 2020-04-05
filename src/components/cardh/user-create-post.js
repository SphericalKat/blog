import React from 'react';

const CreatePost = (props) => {
    return(
        <div className='create-post'>
            <div className='create-post-head'>
                <p>New Post</p>
            </div>
            <div className='write'>
                <input placeholder='Write your post...'></input>
            </div>
            <div className='send'>
                <button className='send-btn'>
                <img src='http://localhost:3000/svg/post.svg' />
                </button>
            </div>
        </div>
    )
}

export default CreatePost