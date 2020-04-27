import React from 'react'

export default class Footer extends React.Component {
  constructor (props) {
    super(props)

    const links = [
      { link: 'AboutUs', id: '#' },
      { link: 'ContactUs', id: '#' }
    ]

    this.renderLinks =
      links.map(function (links, index) {
        return <li key={index}><a href={links.id}>{links.link}</a></li>
      })
  }

  render () {
    return (
      <div className='c4-footer'>
        <div className='footer-container'>
          <div className='latest-footer'>
            <div className='links-social'>
              <div className='links'>
                <h3>QUICK LINKS</h3>
                <ul className='list-unstyled'>
                  {this.renderLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
