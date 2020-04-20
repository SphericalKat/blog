import React from 'react'
import { search } from 'node-emoji'
import Backdrop from '../backdrop/backdrop'
import SearchBox from './search-box'

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      click: false
    }

    this.handleSearch = (event) => {
      this.setState({ click: true })
    }

    this.backdropSearchClickHandle = () => {
      this.setState({ click: false })
    }
  }

  render () {
    let backdrop
    let search

    if (this.state.click) {
      backdrop = <Backdrop handleOnClick={this.backdropSearchClickHandle} />
      search = <SearchBox handleOnClick={this.backdropSearchClickHandle} />
    }

    return (
      <div className='search'>
        <img src='http://localhost:3000/svg/search.svg' onClick={this.handleSearch} />
        {backdrop}
        {search}
      </div>
    )
  }
}

export default Search
