import React from 'react'
import ToggleButton from '../sideDrawer/toggle'

import Search from '../cardh/search'

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
            <li><a href='/discussion'>Blog</a></li>
          </ul>
        </div>
        <div className='space'><Search /></div>
        <div className='nav-user'><a href='/'>user</a></div>
      </nav>
    </header>
  )
}
export default Navbar
