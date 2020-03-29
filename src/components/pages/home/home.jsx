import React from 'react'
import Navbar from '../../navbar/navbar'
import { Cube } from 'styled-loaders-react'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import Card from '../../cardh/cardh'

class Discussion extends React.Component {

  constructor (props) {
    super(props)
    this.state = { 
      text: '', 
      inputText: '', 
      mode: 'view', 
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
      return {sideDrawerOpen : !pevState.sideDrawerOpen}; //passing reference
    })
  };

  backdropClickHandle = () => {
    this.setState({sideDrawerOpen : false})
  }


  render () {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandle}/>
    }

    const ret = <div style={{height: '100%'}}>
                  <Navbar toggleClickHandle={this.toggleClickHandle}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                <div className='rendered-values'>
                  <Card />
                  <Card />
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