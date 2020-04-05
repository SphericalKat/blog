import React from 'react';

const CreatePost = (props) => {
    return(
        <div className='create-post'>
            <div className='create-post-head'>
                <p>New Post</p>
            </div>
            <div className='write'>
                <div className='write-head'>
                    Write your post...
                </div>
                <input></input>
            </div>
        </div>
    )
}

export default CreatePost