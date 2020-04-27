import React from 'react'
import ToggleButton from '../side-drawer/toggle'
// import { search } from 'node-emoji'
import Search from '../search/search'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.url = 'http://localhost:3000'
    this.user = props.user
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
          <a
            className='nav-user-name'
            href='/' style={{ fontWeight: 'lighter', margin: '0 10px' }}
          >
            Logout
          </a>
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
              src={`${this.url}/svg/logo.svg`}
              alt=' c4-logo'
            />
            <a href='/'>C4</a>
          </div>
          <div className='nav-items'>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Forum</a></li>
              <li><a href='/'>Blog</a></li>
              <li><a href='/'>Blog</a></li>
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
