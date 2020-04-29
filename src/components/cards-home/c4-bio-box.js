import React from 'react'

class InfoBox extends React.Component {
  render () {
    return (
      <div className='c4-bio-box'>
        <img src={this.props.info.photo} alt='Image Placeholder' />
        <div className='bio'>
          <h2>{this.props.info.name}</h2>
          <p>
            {this.props.info.descriptionUser}
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
