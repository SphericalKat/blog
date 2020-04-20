import React from 'react'

class InfoBox extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='c4-bio-box'>
        <img src='https://colorlib.com/preview/theme/balita/images/person_1.jpg' alt='Image Placeholder' />
        <div className='bio'>
          <h2>Hinata Hyuga</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.
          </p>
          <p>
            <button className='explore-bio'>Read my bio</button>
          </p>
        </div>
      </div>
    )
  }
}

export default InfoBox
