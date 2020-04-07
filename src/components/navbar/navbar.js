import React from 'react'
import '../sideDrawer/toggle';
import ToggleButton from '../sideDrawer/toggle';

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navigation">
        <div>
          <ToggleButton click={props.toggleClickHandle} />
        </div>
        <div className='nav-logo' style={{fontWeight: 'bold'}}><img className='logo' src='http://localhost:3000/svg/logo.svg'></img><a href='/'>C4</a></div>
        <div className='nav-items'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/discussion'>Blog</a></li>
          <li><a href='/#'></a></li>
          <li><a href='/#'>Dev</a></li>
          <li><a href='/#'>Blockchain</a></li>
          </ul>
        </div>
        <div className="space" />
        <div className="nav-user"><a href='/'>user</a></div>
      </nav>
    </header>
  )
}
export default Navbar