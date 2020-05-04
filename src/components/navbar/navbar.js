import React from 'react'
import ToggleButton from '../side-drawer/toggle'
// import { search } from 'node-emoji'
import Search from '../search/search'
import Button from '@material-ui/core/Button'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.user = props.user

    this.handleLogoutClick = (e) => {
      // e.preventDefault()
      // this.setCookie("c4pin", "")
      // window.location.reload()
    }

    this.setCookie = (name, value) => {
      document.cookie = name + "=" + value + ";"
    }
  }

  render () {
    let navUser
    let logout
    if (this.user) {
      navUser =
        <div className='nav-user'>
          <img className='nav-user-photo' src={this.user.profilePicture} />
          <a
            className='nav-user-name'
            href='/'
          >
            {this.props.user.firstName}
          </a>
        </div>
      logout =
        <div className='logout nav-user'>
          <Button
            className='nav-user-name'
            style={{ fontWeight: 'lighter', margin: '0 10px' }}
            onClick={this.handleLogoutClick}
          >
            Logout
          </Button>
        </div>
    }
    const onToggleClick = this.props.onToggleClick
    return (
      <header className='navbar'>
        <nav className='navigation'>
          <div>
            <ToggleButton handleOnClick={onToggleClick} />
          </div>
          <div className='nav-logo' style={{ fontWeight: 'bold' }}>
            <img
              className='logo'
              src={'/svg/logo.svg'}
              alt=' c4-logo'
            />
            <a href='/'>C4</a>
          </div>
          <div className='nav-items'>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Forum</a></li>
              <li><a href='/blogs'>Blog</a></li>
            </ul>
          </div>
          <div className='space' />
          <Search />
          {navUser}
          {logout}
        </nav>
      </header>
    )
  }
}

export default Navbar
