import React from 'react'

class SearchCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      click: false
    }
    this.onClick = (event) => {
      this.setState({ click: true})
    }
  }

  render () {
    return (
      <div className='search-card'>
        <div className='heading'>
          <h3>Why does that do this?</h3>
          <div className='space' />
          <div className='search-hash'>
            #dev
          </div>
        </div>
        <div className='sub-heading'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.
        </div>
      </div>
    )
  }
}

export default SearchCard
