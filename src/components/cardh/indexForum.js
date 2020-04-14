import React from 'react'
import Post from './indexForumUser'

class IndexForumCard extends React.Component {
  constructor (props) {
    super(props)
    this.user = props.user
  }

  render () {
    return (
      <div className='indexforum-first'>
        <div className='indexforum-boxes'>
          <div className='indexforum-first-header'>
            Latest Queries
          </div>
          <Post user={this.user} />
          <Post user={this.user} />
          <Post user={this.user} />
        </div>
      </div>
    )
  }
}

export default IndexForumCard
