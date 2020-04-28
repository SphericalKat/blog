import React from 'react'

class SearchCardInfo extends React.Component {
  render () {
    const date = new Date(this.props.date)
    return (
      <div className='search-card'>
        <div className='heading'>
          <h3>{this.props.title}</h3>
          <div className='space' />
          <div className='search-hash'>
            {this.props.tags}
          </div>
        </div>
        <div className='sub-heading'>
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </div>
        <div className='search-name'>
          {this.props.author}
        </div>
      </div>
    )
  }
}

export default SearchCardInfo
