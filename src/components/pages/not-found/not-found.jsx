import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'

class NotFound extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      navbarOpen: true,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.user = this.props.user

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
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }
    return (
      <div className='center' style={{ height: '100%', paddingBottom: '20px' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='error'>
          <img src='http://localhost:3000/svg/error.svg' />
          <h1>Page not found!</h1>
          <div className='error-description'>
            There's nothing here. That's all we know.
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
