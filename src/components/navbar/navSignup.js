import React from 'react';

const Navbar = (props) => {
  return(
  <header className="navbar">
    <nav className="navigation">
      <div className='nav-logo'><a href='/'>-hacx</a></div>
      <div className="space" />
      <div className='nav-user'><a href='/'>user</a></div>
    </nav>
  </header>
  )
}
export default Navbar