import React from 'react'

const PostBody = ({ post }) => (
  <div>
    <div className='forum-post-title'> {post.title} </div>
    <p className='forum-post-body'> {post.body}</p>
    <button className='post-forum-reply-button'>Reply</button>
  </div>
)

export default PostBody
