import React from 'react'

const PostForumProfileHeader = ({ user }) => (
  <div className='post-forum-profile-header'>
    <img className='post-forum-user-image' src={user.photo} />
    <div className='post-forum-user-details'>
      <div className='post-forum-user-metadata'>
        <div>{user.name}</div>
        <div className='post-forum-user-birthdate'>{user.time}</div>
      </div>
      <div className='post-forum-user-bio'>{user.descriptionUser}</div>
    </div>
  </div>
)

export default PostForumProfileHeader
