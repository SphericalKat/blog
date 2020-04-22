import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import PostForumProfileHeader from '../../cards-home/post-forum-profile-header'
import PostForumPostBody from '../../cards-home/post-forum-body'
import Popular from '../../cards-home/popular-post'
import Tags from '../../cards-home/tags'
import InfoBox from '../../cards-home/c4-bio-box'

class PostForum extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = {
      navbarOpen: true,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    this.user = {
      name: 'Shizuka',
      descriptionUser: 'FullStackDev',
      Hash: {
        number: 1,
        arrayHash: ['#Dev']
      },
      likes: 420,
      issues: 69,
      issuesSolved: 0,
      photo: 'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg',
      emailId: 'example@gmail.com',
      time: '4 hrs ago'
    }

    this.post = {
      title: 'Why do Cats Meow and not bark ?',
      body: 'something of a decent size goes in here'
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

    this.tags = [
      'CATS'
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

    const ret = (
      <div className='center' style={{ height: '100%', paddingBottom: '20px' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} user={this.user} />
        {backdrop}
        <div className='c4-second-blog'>
          <div className='c4-second-blog-details'>
            <div className='c4-second-blog-left'>
              <PostForumProfileHeader user={this.user} />
              <PostForumPostBody post={this.post} />
            </div>
            <div className='c4-second-blog-right'>
              <InfoBox info={this.user} />
              <Popular popular={this.carousel} />
              <Tags tags={this.tags} />
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        {
          // this.state.loading ?<div className='main'> <Cube color='blue'/></div> :
          ret
        }
      </div>
    )
  }
}

export default PostForum
