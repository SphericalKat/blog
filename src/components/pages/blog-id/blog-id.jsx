import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import Blog from '../../blog/blog'

class BlogId extends React.Component {
  constructor (props) {
    super(props)

    this.title = props.blog.title
    this.content = props.blog.content
    this.tags = props.blog.tags
    this.coverImage = props.blog.coverImage
    this.user = props.user
    this.author = props.blog.authorName

    if (!this.title) {
      this.title = ''
    }
    if (!this.content) {
      this.content = ''
    }
    if (!this.tags) {
      this.tags = []
    }
    if (!this.coverImage) {
      this.coverImage = ''
    }

    // States
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      display: 'none',
      coverImage: this.coverImage,
      title: this.title,
      tags: this.tags,
      content: this.content,
      currentContent: 1
    }

    // Event Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  render () {
    const date = this.props.blog.dateTime
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }

    // Preview defined
    const preview =
      <div className='single-blog-container'>
        <div className='blog-container'>
          <div className='preview-container'>
            <Blog
              content={this.state.content}
              title={this.state.title}
              coverImage={this.state.coverImage}
              tags={this.state.tags}
              author={this.author}
              profilePic={this.user.profilePicture}
              date={date}
            />
          </div>
        </div>
      </div>

    // Rendered
    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values-blog'>
          <div className='single-blog-card'>
            {preview}
          </div>
        </div>
      </div>

    // Return
    return (
      <div className='react-root'>
        {
          ret
        }
      </div>
    )
  }
}

export default BlogId
