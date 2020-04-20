import React from 'react'
import InfoBox from './c4-bio-box'
import Popular from './popular-post'
import SearchCardInfo from './search-card-info'
import InfiniteLoader from 'react-infinite-loader'

class SearchCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    this.loadItems()
  }

  loadItems () {
    /* just simulating a load of more items from an api here */
    setTimeout(() => {
      let items = this.state.items.slice()
      items = items.concat(this.getItems())
      this.setState({ items: items })
    }, 1000)
  }

  handleVisit () {
    this.loadItems()
  }

  getItems () {
    let items = []
    for (var i = 0; i < 5; i++) {
      items.push({ card: <SearchCardInfo /> })
    }
    return items
  }

  renderCards () {
    const { items } = this.state

    const cards = items.map((item, i) => {
      return (
        <div key={i}>
          {item.card}
        </div>
      )
    })
    return cards
  }

  render () {
    let visitStyle = { position: 'absolute', width: '100%', bottom: '10rem' }
    return (
      <div className='search-page-flex'>
        <div className='c4-second-blog-left'>
          {this.renderCards()}
          <InfiniteLoader visitStyle={visitStyle} onVisited={() => this.handleVisit()} />
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
