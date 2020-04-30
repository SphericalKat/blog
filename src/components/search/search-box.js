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

    this.handleKeyPress = (event) => {
      const buffer = Buffer.from(this.state.inputText).toString('base64')
      if (event.key === 'Escape') {
        const target = event.target.parentNode.parentNode
        target.querySelector('.backdrop').click()
      }
      if (event.key === 'Enter') {
        window.location = `${window.location.origin}/blogs/search?q=${buffer}`
      }
    }
  }

  componentDidMount () {
    document.querySelector('.search-input').focus()
  }

  render () {
    return (
      <div className='search-box'>
        <input
          className='search-input' onKeyDown={this.handleKeyPress}
          value={this.state.inputText}
          onChange={this.handleText}
        />
        <div className='search-box-svg'>
          <img src='http://localhost:3000/svg/search.svg' />
        </div>
      </div>
    )
  }
}

export default SearchBox
