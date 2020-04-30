import React from 'react'
import Backdrop from '../../backdrop/backdrop'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import SearchCard from '../../cards-home/search'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.query = this.props.query || ''

    // Component Activity
    this.componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
      this.setState({ loading: true })
    }

    this.user = this.props.user

    // Event Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.backdropClickHandle = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.backdropClickHandle} />
    }

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='search-page'>
          <div className='heading-search'>
            <h1>We found these related to your search!!</h1>
          </div>
          <SearchCard query={this.query} lastDate={Date.now()} />
        </div>
      </div>

    return (
      <div>
        {ret}
      </div>
    )
  }
}

export default Search
