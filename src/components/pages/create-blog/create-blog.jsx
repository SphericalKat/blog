import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import Preview from '../../preview/preview'

class CreateBlog extends React.Component {
  constructor (props) {
    super(props)

    this.title = props.title
    this.content = props.content
    this.tags = props.tags
    this.coverImage = props.coverImage

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
      this.coverImage = '' // TODO add a blank image
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
      currentContent: 0
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

    this.handleEnterKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
    }

    this.handleTitleChange = (e) => {
      this.setState({ title: e.target.value })
      if (e.target.value.length > 120) {
        e.target.style.background = 'rgba(19,19,19,0.5)'
      } else {
        e.target.style.background = 'white'
      }
    }

    this.handleTagChange = (e) => {
      const tags = e.target.value.split(',')
      this.setState({ tags: tags })
      console.log(tags)
    }

    this.handleCoverChange = (e) => {
      this.setState({ coverImage: e.target.value })
    }

    this.handleContentChange = (e) => {
      this.setState({ content: e.target.value })
    }

    this.handlePreviewClick = (e) => {
      this.setState({ currentContent: 1 })
      e.target.style.display = 'none'
      const edit = e.target.parentNode.querySelector('.create-blog-button-edit')
      edit.style.display = 'block'
    }

    this.handleEditClick = (e) => {
      this.setState({ currentContent: 0 })
      e.target.style.display = 'none'
      const preview = e.target.parentNode.querySelector('.create-blog-button-preview')
      preview.style.display = 'block'
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }

    const preview =
      <div className='create-blog-preview'>
        <div className='blog-container'>
          <div className='preview-container'>
            <Preview content={this.state.content} />
          </div>
        </div>
      </div>

    const edit =
      <div className='create-blog-container'>
        <div className='blog-container'>
          <div className='create-blog-input create-blog-input-title'>
            <textarea
              onKeyDown={this.handleEnterKeyPress}
              onChange={this.handleTitleChange}
              placeholder='Title (in 50 characters)'
            />
          </div>
          <div
            className='create-blog-input create-blog-input-cover-image'
            onKeyDown={this.handleEnterKeyPress}
            onChange={this.handleCoverChange}
          >
            <textarea placeholder='Link for cover image' />
          </div>
          <div
            className='create-blog-input create-blog-input-tags'
            onKeyDown={this.handleEnterKeyPress}
            onChange={this.handleTagChange}
          >
            <textarea placeholder='Tags (separated by a comma `,`)' />
          </div>
          <div
            className='create-blog-input create-blog-input-content'
            onChange={this.handleContentChange}
          >
            <textarea placeholder='Type the content of the blog here....' />
          </div>
        </div>
      </div>

    let currentContent
    if (this.state.currentContent === 0) {
      currentContent = edit
    } else {
      currentContent = preview
    }

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={{}} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values-blog'>
          <div className='create-blog-button-group'>
            <button
              className='create-blog-button create-blog-button-preview'
              onClick={this.handlePreviewClick}
            >
              Preview
            </button>
            <button
              className='create-blog-button create-blog-button-edit'
              style={{ display: 'none' }}
              onClick={this.handleEditClick}
            >
              Edit
            </button>
            <button className='create-blog-button'>
              Save
            </button>
            <button className='create-blog-button'>
              Publish
            </button>
          </div>
          <div className='create-blog-card'>
            {currentContent}
          </div>
        </div>
      </div>
    return (
      <div className='react-root'>
        {
          ret
        }
      </div>
    )
  }
}

export default CreateBlog
