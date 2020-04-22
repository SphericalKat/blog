import React from 'react'

class Carousel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImgIndex: 0
    }

    this.handleNextSlide = () => {
      const lastIndex = this.imgUrl.length - 1
      const { currentImgIndex } = this.state
      const shouldResetIndex = currentImgIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentImgIndex + 1
      this.setState({
        currentImgIndex: index
      })
    }
  }

  imageSlide (url) {
    return (
      <div className='image-slide' onClick={this.handleNextSlide}>
        <img src={url} />
        <div className='layer'>
          <div className='c4-blog-img-details'>
            <div className='c4-blog-tag'>
              <div className='dev-head'>
                {this.props.trendingTag}
              </div>
              <div className='dev-date'>
                {this.props.datePost}
              </div>
            </div>
            <div className='h'>
              {this.props.trendingPost}
            </div>
            <div className='d'>
              {this.props.description}
            </div>
            <button className='c4-carousel-button'>Expore</button>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='carousel'>
        {this.imageSlide(this.props.url[this.state.currentImgIndex])}
      </div>
    )
  }
}

export default Carousel
