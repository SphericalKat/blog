import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'

class IndexForum extends React.Component {
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
      emailId: 'example@gmail.com',
      time: '4 hrs ago'
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
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='indexforum-container'>
          <div className='indexforum-header'>
            C4 Forum
          </div>
          <div className='indexforum-message'>
            Hello! We build! We share! We solve! BLa bla bla
          </div>
          <div className='indexforum-sec-container'>
            <div className='component-box'>
              <div className='indexforum-first'>
                <div className='indexforum-boxes'>
                  <div className='indexforum-first-header'>
                    Latest Queries
                  </div>
                  <div className='indexforum-first-box'>
                    <div className='indexforum-question'>
                      <div className='indexforum-first-box-header'>
                        What is dev?
                      </div>
                      <div className='indexforum-first-box-details'>
                        I need to know this!!
                      </div>
                    </div>
                    <div className='indexforum-user'>
                      <div className='indexforum-user-name'>
                        {this.user.name}
                      </div>
                      <div className='indexforum-user-des'>
                        {this.user.descriptionUser}
                      </div>
                    </div>
                    <div className='indexforum-time'>
                      {this.user.time}
                    </div>
                  </div>
                </div>
              </div>
              <div className='indexforum-second'>
                <div className='indexforum-second-box'>
                  <ul>
                    <li>#DEV</li>
                    <li>#</li>
                    <li>#</li>
                    <li>#</li>
                  </ul>
                </div>
              </div>
            </div>
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

export default IndexForum 