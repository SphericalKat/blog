import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import Markdown from '../../markdown/markdown'

class Create extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      input: ''
    }
  }

  toggleClickHandle = () => {
    this.setState((pevState) => {
      return { sideDrawerOpen: !pevState.sideDrawerOpen }; //passing reference
    })
  };

  backdropClickHandle = () => {
    this.setState({ sideDrawerOpen: false })
  }

  inputChangeHandle = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {

    const input = this.state.input;

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandle} />
    }

    const ret = <div className='center' style={{ height: '100%' }}>
      <Navbar toggleClickHandle={this.toggleClickHandle} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <div className='rendered-values'>
        <div className="input-div two">
          <div>
            <h5>Password</h5>
            <input onChange={this.inputChangeHandle} className={'input'} type="text"
              value={this.state.input} />
          </div>
        </div>
        <Markdown />
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

export default Create