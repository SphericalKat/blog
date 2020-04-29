import React from 'react'
// import Hashes from '../cards-home/user-hashtag'
// import Activity from '../cards-home/activity'

class SideDrawer extends React.Component {
  constructor (props) {
    super(props)
    this.user = props.user
  }

  render () {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }
    let userProfile
    if (this.user) {
      userProfile =
        <div className='user-profile'>
          <img className='user-circle-profile' src={this.user.profilePicture}/* insest photo */ />
          <div className='user-name-profile'>
            {this.user.firstName} {this.user.lastName}
            <div className='userId'>
              {this.user.email}
            </div>
          </div>
        </div>
    }

    return (
      <nav className={drawerClasses}>
        {userProfile}
        <ul className='side-drawer-ul'>
          <li><a href='/home'>Home</a></li>
          <li><a href='/'>Forum</a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>Blog</a></li>
        </ul>
      </nav>
    )
  }
}

export default SideDrawer
