import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      <img src='Logo.png' className='navbar-logo' alt='logo' />
      <a className='lang' href='#'>Programming Language</a>
      <ul className='container'>
        <a className='right-navbar navbar-branches' href='#'>ML and AI</a>
        <a className='right-navbar navbar-branches' href='#'>Dev and DevOps</a>
        <a className='right-navbar navbar-branches' href='#'>Electrical</a>
        <a className='right-navbar navbar-branches' href='#'>Mechanical</a>
        <a className='right-navbar navbar-user' href='#'>
          <img className='right-navbar navbar-user-image' alt='' /> Username
        </a>
      </ul>
    </nav>
  )
}
export default Navbar
