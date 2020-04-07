import React from 'react'
import Navbar from '../../navbar/navbar'
import { Cube } from 'styled-loaders-react'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import UserCard from '../../cardh/user-card'
import Create from '../../cardh/create-card'
import Hashtag from '../../cardh/user-hashtag'
import CreatePost from '../../cardh/user-create-post'
import Card from '../../cardh/card'
import Advertisement from '../../cardh/advertisement'
import Activity from '../../cardh/activity'


class Discussion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false,
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
    this.setState({ loading: true })
  }

  toggleClickHandle = () => {
    this.setState((pevState) => {
      return { sideDrawerOpen: !pevState.sideDrawerOpen }; //passing reference
    })
  };

  backdropClickHandle = () => {
    this.setState({ sideDrawerOpen: false })
  }


  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandle} />
    }

    const ret = <div className='center' style={{ height: '100%', paddingBottom: '20px' }}>
      <Navbar toggleClickHandle={this.toggleClickHandle} />
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
            <CreatePost />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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