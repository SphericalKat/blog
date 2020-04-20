import React from 'react'

class SearchBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputText: ''
    }

    this.handleText = (event) => {
      this.setState({ inputText: event.target.value })
    }
  }

  render () {
    return (
      <div className='search-box'>
        <input className='search-input' value={this.state.inputText} onChange={this.handleText} />
        <div className='search-box-svg'>
          <img src='http://localhost:3000/svg/search.svg' />
        </div>
      </div>
    )
  }
}

export default SearchBox
