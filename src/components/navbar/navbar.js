import React from 'react'
import '../sideDrawer/toggle';
import ToggleButton from '../sideDrawer/toggle';

const Navbar = (props) => {
  return (
    <header className="navbar">
      <nav className="navigation">
        <div>
          <ToggleButton click={props.toggleClickHandle} />
        </div>gti 
        <div className='nav-logo' style={{fontWeight: 'bold'}}><a href='/'>C4</a></div>
        <div className='nav-items'>
          <ul>
            <li><a href='/'>Home</a></li>
            {/* <li><a href='/discussion'>Languages</a></li>
          <li><a href='/#'>ML</a></li>
          <li><a href='/#'>Dev</a></li>
          <li><a href='/#'>Blockchain</a></li> */}
          </ul>
        </div>
        <div className="space" />
        <div className="nav-user"><a href='/'>user</a></div>
      </nav>
    </header>
  )
}
export default Navbar