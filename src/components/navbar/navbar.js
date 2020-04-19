import React from 'react'
import ToggleButton from '../side-drawer/toggle'

const Navbar = (props) => {
  const onToggleClick = props.onToggleClick
  return (
    <header className='navbar'>
      <nav className='navigation'>
        <div>
          <ToggleButton handleOnClick={onToggleClick} />
        </div>
        <div className='nav-logo' style={{ fontWeight: 'bold' }}>
          <img
            className='logo'
            src='http://localhost:3000/svg/logo.svg'
            alt='c4-logo'
          />
          <a href='/'>C4</a>
        </div>
        <div className='nav-items'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Forum</a></li>
            <li><a href='/discussion'>Blog</a></li>
          </ul>
        </div>
        <div className='space' />

        <div className='nav-user'>
          <img className='nav-user-photo' src={props.user.photoLink} />
          <a
            className='nav-user-name'
            href='/'
          >
            {props.user.name}
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
