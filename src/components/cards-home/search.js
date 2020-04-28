import React from 'react'
import InfoBox from './c4-bio-box'
import Popular from './popular-post'
import SearchCardInfo from './search-card-info'
import InfiniteLoader from 'react-infinite-loader'

class SearchCard extends React.Component {
  constructor (props) {
    super(props)
    this.query = this.props.query
    this.lastDate = this.props.lastDate
    this.state = {
      items: [],
      lastDate: this.lastDate
    }
  }

  componentDidMount () {
    this.loadItems()
  }

  loadItems () {
    /* just simulating a load of more items */
    // setTimeout(() => {
    //   let items = this.state.items.slice()
    //   items = items.concat(this.getItems())
    //   this.setState({ items: items })
    // }, 1000)
    this.getItems()
      .then((body) => {
        const items = this.state.items
        body.forEach((e) => {
          items.push({ card: <SearchCardInfo /> })
        })
        this.setState({ item: items })
      })
      .catch(e => {
        // TODO redirect
      })
  }

  handleVisit () {
    this.loadItems()
  }

  getItems () {
    return window.fetch(`${window.location.origin}/blogs/search/search?q=${encodeURIComponent(this.query)}&ld=${this.state.lastDate}`)
      .then((res) => res.json())
      .then(body => {
        this.setState({ lastDate: body.lastDate })
        return body.blogs
      })
      .catch((e) => {
        throw e
      })
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
    const visitStyle = { position: 'absolute', width: '100%', bottom: '10rem' }
    return (
      <div className='search-page-flex'>
        <div className='c4-second-blog-left'>
          {this.renderCards()}
          <InfiniteLoader visitStyle={visitStyle} onVisited={() => this.handleVisit()} />
        </div>
        {/*<div className='c4-second-blog-right'>*/}
        {/*  <InfoBox />*/}
        {/*  <Popular />*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default SearchCard
