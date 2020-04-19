import React from 'react'

class MainCard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <div className='c4-blog-main-card'>
        <img src='https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781' />
        <div className='layer layer-hover'>
          <div className='c4-blog-main-card-details'>
            <div className='c4-blog-tag main-card-tag'>
              <div className='dev-head'>
                CATS
              </div>
              <div className='dev-date'>
                APRIL 17,2020
              </div>
            </div>
            <div className='h'>
              Why isn’t my cat using the litter box?
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainCard
