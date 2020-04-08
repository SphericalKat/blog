import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import UserCard from '../../cardh/user-card'
import Create from '../../cardh/create-card'
import Hashtag from '../../cardh/user-hashtag'
import Card from '../../cardh/card'
import Advertisement from '../../cardh/advertisement'
import Activity from '../../cardh/activity'

class Discussion extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
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
        <Navbar onToggleClick={this.handleToggleClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='render-user'>
          <div className='side-left'>
            <UserCard />
            <Create />
            <Hashtag />
            <Activity />
          </div>
          <div className='side-middle'>
            <Card
              content={'* Lorem ipsum dolor sit amet, \n \n consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui.\n'}
            />
            <Card
              content={'# My name is anshu :blush: :kiss: --- \n \n * This is a new queery. \n \n * '}
            />
            <Card
              content={'Lorem ipsum dolor sit amet, \n \n --- \n \n consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui.\n'}
            />
            <Card
              content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui.\n'}
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

export default Discussion
