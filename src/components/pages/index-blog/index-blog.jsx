import React from 'react'
import Carousel from '../../cards-home/carousel'
import SecondBlog from '../../cards-home/second-blog'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import Footer from '../../footer/footer'

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

    this.user = this.props.user
    this.blogs = this.props.blogs
    this.category = [ // number of post per catergory is 10 so nX10 matrix will be formed
      {
        categoryName: 'Latest',
        posts: this.blogs
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
          <SecondBlog
            category={this.category} tags={this.tags}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default IndexBlogs
