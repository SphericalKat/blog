import React from 'react'
import InfoBox from './c4-bio-box'
import Popular from './popular-post'
import SearchCardInfo from './search-card-info'

class SearchCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      click: false
    }
    this.onClick = (event) => {
      this.setState({ click: true })
    }
  }

  render () {
    return (
      <div className='search-page-flex'>
        <div className='c4-second-blog-left'>
          <SearchCardInfo />
          <SearchCardInfo />
          <SearchCardInfo />
        </div>
        <div className='c4-second-blog-right'>
          <InfoBox />
          <Popular />
        </div>
      </div>
    )
  }
}

export default SearchCard
