import React from 'react'

class Tags extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    const ret = <li><a href='#'>{this.props.tags}</a></li>
    return (
      <div className='c4-bio-box pop-box'>
        <h3 className='popular-head'>Tags</h3>
        <ul className='tags'>
          {ret}
        </ul>
      </div>
    )
  }
}

export default Tags
