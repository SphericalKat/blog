import React from 'react'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href='/discussion'>Languages</a></li>
        <li><a href='/#'>ML</a></li>
        <li><a href='/#'>Dev</a></li>
        <li><a href='/#'>Blockchain</a></li>
      </ul>
    </nav>
  )
}

export default sideDrawer
