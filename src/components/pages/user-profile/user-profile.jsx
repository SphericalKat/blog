import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import UserCard from '../../cards-home/user-card'
import Create from '../../cards-home/create-card'
import Hashtag from '../../cards-home/user-hashtag'
import Card from '../../cards-home/card'
import Advertisement from '../../cards-home/advertisement'
import Activity from '../../cards-home/activity'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.user = {
      name: 'Shizuka',
      descriptionUser: 'FullStackDev',
      Hash: {
        number: 1,
        arrayHash: ['#Dev']
      },
      likes: 420,
      issues: 69,
      issuesSolved: 0,
      photo: '',
      emailId: 'example@gmail.com'
    }

    // Component Lifecycle
    this.componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
      this.setState({ loading: true })
    }

    // Event Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }

    const ret =
      <div className='center' style={{ height: '100%', paddingBottom: '20px' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='render-user'>
          <div className='side-left'>
            <UserCard name={this.user.name} descriptionUser={this.user.descriptionUser} />
            <Create />
            <Hashtag numberHash={this.user.Hash.number} arrayHash={this.user.Hash.arrayHash} />
            <Activity likes={this.user.likes} issues={this.user.issues} issuesSolved={this.user.issuesSolved} />
          </div>
          <div className='side-middle'>
            {/* The cards for the user profile goes here */}
            <Card
              content={'* Lorem ipsum dolor sit amet, \n \n consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor sit amet, \n # consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui.\n'}
            />
            <Card
              content={'* Lorem ipsum dolor sit amet, \n \n consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor'}
            />
          </div>
          <div className='side-right'>
            <Advertisement />
          </div>
        </div>
      </div>

    return (
      <div>
        {
          // this.state.loading ?<div className='main'> <Cube color="blue"/></div> :
          ret
        }
      </div>
    )
  }
}

export default UserProfile
