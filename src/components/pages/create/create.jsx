import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import CreateThread from '../../create/create-thread'

class Create extends React.Component {

  /**
   *
   * @param {{tags,title}}props
   */
  constructor (props) {
    super(props)
    let tags = ''
    let title = ''
    if (this.props.tags) {
      tags = this.props.tags
    }
    if (this.props.title) {
      title = this.props.title
    }

    // States
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      display: 'none',
      title,
      tags
    }

    // Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }

    this.handleTitleInput = (e) => {
      this.setState({ title: e.target.value })
    }

    this.handleTagsInput = (e) => {
      this.setState({ tags: e.target.value })
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop =
        <Backdrop
          handleOnClick={this.onBackdropClick}
        />
    }

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values'>
          <div className='create-thread-container'>
            <div className='create-title-group create-thread-group'>
              <div className='create-title-label create-thread-label'>Title</div>
              <div className='create-title-input-div create-thread-input-div'>
                <input
                  className='create-title-input create-thread-input'
                  placeholder='Title for your post.'
                  value={this.state.title}
                  onChange={this.handleTitleInput}
                />
              </div>
            </div>
            <div className='create-tags-group create-thread-group'>
              <div className='create-tags-label create-thread-label'>Tags</div>
              <div className='create-tags-input-div create-thread-input-div'>
                <input
                  className='create-tags-input create-thread-input'
                  placeholder='For multiple tags use comma `,` to seperate'
                  value={this.state.tags}
                  onChange={this.handleTagsInput}
                />
              </div>
            </div>
            <div className='create-thread-group create-thread-content-group'>
              <CreateThread content='new contente' />
            </div>
            <div className='create-thread-button-group'>
              <button className='create-thread-button'>Publish</button>
              <button className='create-thread-button'>Discard</button>
              <button className='create-thread-button'>Save</button>
            </div>
          </div>
        </div>
      </div>

    return (
      <div>
        {
          ret
        }
      </div>
    )
  }
}

export default Create
