import React from 'react'
import Hashes from '../cardh/user-hashtag'
import Activity from '../cardh/activity'

class SideDrawer extends React.Component {

  constructor (props) {
    super(props)
    this.user = props.user

    if (!this.user) {
      this.user = {
        name: 'anshu',
        emailId: '123@xyz.com',
        Hash: { number: 10, arrayHash: ['hi', 'bye'] },
        likes: 10,
        issuesSolved: 69,
        issues: 96
      }
    }

  }

  render () {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }

    return (
      <nav className={drawerClasses}>
        <div className='user-profile'>
          <img className='user-circle-profile' src=''/*insest photo*/ />
          <div className='user-name-profile'>
            {this.user.name}
            <div className='userId'>
              {this.user.emailId}
            </div>
          </div>
        </div>
        <ul>
          <li><a href='/home'>Home</a></li>
        </ul>
        <div className='hash'>
          <Hashes numberHash={this.user.Hash.number} arrayHash={this.user.Hash.arrayHash} />
          <Activity likes={this.user.likes} issuesSolved={this.user.issuesSolved} issues={this.user.issues} />
        </div>
        <div className='activity-side' />
      </nav>
    )
  }
}

export default SideDrawer
