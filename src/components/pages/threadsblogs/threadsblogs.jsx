import React from 'react'
import Navbar from '../../navbar/navbar'
import { Cube } from 'styled-loaders-react'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import Card from '../../cardh/cardtb'

class Threadsblogs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false,
      isBlog: false,
      isThread: true
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

    const ret = <div className='center' style={{ height: '100%' }}>
      <Navbar toggleClickHandle={this.toggleClickHandle} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <div className='rendered-values'>
      <div className='home-space'></div> 
        <div className='cards'>
        <div className='previous-heading'>
          #Dev
      </div>
      <div className='btnc'>
      <button type="submit" className="create-btn" value="">CREATE</button>
      </div>
       
          <Card />
          <Card />
          <Card />  
        
      </div>
      <div className='home-space'></div>
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

export default Threadsblogs