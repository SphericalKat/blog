import React from 'react'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='c4-blog'>
          <div className='c4-blog-heading'>
            <p>
              C4-Blogs
            </p>
          </div>
          <Carousel />
          <div className='c4-main-card'>
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
          <SecondBlog />
        </div>
        <div className='c4-footer'>
          <div className='footer-container'>
            <div className='paragraph'>
              <h3>PARAGRAPH</h3>
              <img src="https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium optio unde perferendis eum illum voluptatibus dolore tempora, consequatur minus asperiores temporibus reprehenderit.
                    </p>
            </div>
            <div className='latest'>
              <div className='latest-posts'>
                <h3>LATEST POSTS</h3>
              </div>
              <div className='links-social'>
                <div className='links'>
                  <h3>QUICK LINKS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Blogs