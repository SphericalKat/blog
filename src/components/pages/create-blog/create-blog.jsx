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
    if (this.title) {
      this.title = ''
    }
    if (this.content) {
      this.content = ''
    }
    if (this.tags) {
      this.tags = []
    }

    // States
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      input: '',
      display: 'none',
      title: this.title,
      tags: this.tags,
      content: this.content
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

    this.handleInputChange = (event) => {
      this.setState({ input: event.target.value })
    }

    this.handleSubmit = () => {
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }

    const preview =
      <div className='create-blog-preview'>
        <Preview content={this.state.content} />
      </div>

    const edit =
      <div>
        <div className='create-blog-edit-container'>

        </div>
      </div>

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={{}} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values-blog'>
          <div className='create-blog-button-group'>
            <button className='create-blog-button'>
              Preview
            </button>
            <button className='create-blog-button'>
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
            <div className='blog-container'>
              <div className='create-blog-input create-blog-input-title'>
                <textarea placeholder='Title (in 50 characters)' />
              </div>
              <div className='create-blog-input create-blog-input-tags'>
                <textarea placeholder='Tags (separated by a comma `,`)' />
              </div>
              <div className='create-blog-input create-blog-input-content'>
                <textarea placeholder='Type the content of the blog here....' />
              </div>
            </div>
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
