import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import Adds from '../../cards-home/advertisement'

class CreateBlog extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      input: '',
      display: 'none'
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

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={{}} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='rendered-values-blog'>
          <form className='create-input' onSubmit={this.handleSubmit}>
            <div className='blog-form'>
              <h5>
                Create Blog
              </h5>
              <div className='textarea'>
                <div className='side'>
                  <Adds />
                </div>
                <textarea
                  className='create-blog-text' onChange={this.handleInputChange}
                  value={this.state.input}
                />
                <div className='side'>
                  <Adds />
                </div>
              </div>
            </div>
            <button className='create-blog-btn' onSubmit={this.handleSubmit}>Submit</button>
          </form>
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

export default CreateBlog
