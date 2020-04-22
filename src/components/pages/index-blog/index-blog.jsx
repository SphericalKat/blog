import React from 'react'
import Carousel from '../../cards-home/carousel'
import SecondBlog from '../../cards-home/second-blog'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'

class IndexBlogs extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.tags = [
      'CATS'
    ]

    this.user = {
      name: 'Shizuka',
      descriptionUser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa',
      Hash: {
        number: 1,
        arrayHash: ['#Dev']
      },
      likes: 420,
      issues: 69,
      issuesSolved: 0,
      photo: 'https://colorlib.com/preview/theme/balita/images/person_1.jpg',
      emailId: 'example@gmail.com',
      time: '4 hrs ago'
    }

    this.carousel = {
      imgUrl: [
        'https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781',
        'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
        'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328'
      ],
      trendingTag: ['CATS'],
      datePost: ['APRIL 17,2020'],
      trendingPost: ['Why isnt my cat using the litter box?'],
      description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!']
    }

    this.category = [ // number of post per catergory is 10 so nX10 matrix will be formed
      {
        categoryName: 'Developer',
        posts: [
          {
            img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
            dev: 'CATS',
            date: 'APRIL 17,2020',
            question: 'Why isn’t my cat using the litter box?'
          },
          {
            img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
            dev: 'CATS',
            date: 'APRIL 17,2020',
            question: 'Why isn’t my cat using the litter box?'
          }
        ]
      },
      {
        categoryName: 'Micro',
        posts: [
          {
            img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
            dev: 'CATS',
            date: 'APRIL 17,2020',
            question: 'Why isn’t my cat using the litter box?'
          },
          {
            img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
            dev: 'CATS',
            date: 'APRIL 17,2020',
            question: 'Why isn’t my cat using the litter box?'
          }
        ]
      }
    ]

    this.morePosts = [ // number of post is 3
      {
        img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
        dev: 'CATS',
        date: 'APRIL 17,2020',
        question: 'Why isn’t my cat using the litter box?'
      },
      {
        img: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
        dev: 'CATS',
        date: 'APRIL 17,2020',
        question: 'Why isn’t my cat using the litter box?'
      }
    ]

    this.footer = {
      head: 'PARAGRAPH',
      img: 'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium optio unde perferendis eum illum voluptatibus dolore tempora, consequatur minus asperiores temporibus reprehenderit.',
      links: [
        { link: 'AboutUs', id: '#' },
        { link: 'ContactUs', id: '#' }
      ]
    }

    // Component Lifecycle
    this.componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000)
      this.setState({ loading: true })
    }

    // Event Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.onBackdropClick = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  render () {
    const renderLinks =
      this.footer.links.map(function (links, index) {
        return <li key={index}><a href={links.id}>{links.link}</a></li>
      })

    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.onBackdropClick} />
    }

    return (
      <div className='center'>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='c4-blog'>
          <div className='c4-blog-heading'>
            <p>
              C4-Blogs
            </p>
          </div>
          <Carousel url={this.carousel.imgUrl} trendingTag={this.carousel.trendingTag} trendingPost={this.carousel.trendingPost} datePost={this.carousel.datePost} description={this.carousel.description} />
          <SecondBlog category={this.category} info={this.user} popular={this.carousel} tags={this.tags} morePosts={this.morePosts} />
        </div>
        <div className='c4-footer'>
          <div className='footer-container'>
            <div className='paragraph'>
              <h3>PARAGRAPH</h3>
              <img src={this.footer.img} />
              <p>
                {this.footer.description}
              </p>
            </div>
            <div className='latest-footer'>
              <div className='links-social'>
                <div className='links'>
                  <h3>QUICK LINKS</h3>
                  <ul className='list-unstyled'>
                    {renderLinks}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexBlogs
