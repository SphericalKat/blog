import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'
import ReactMarkdown from 'react-markdown'
import Advetisment from '../../cardh/advertisement'

class CreateBlog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false,
      sideDrawerOpen: false,
      input: '',
      display: 'none'
    }
  }

  toggleClickHandle = () => {
    this.setState((pevState) => {
      return { sideDrawerOpen: !pevState.sideDrawerOpen }; //passing reference
    })
  };

  backdropClickHandle = () => {
    this.setState({ sideDrawerOpen: false })
  }

  inputChangeHandle = (event) => {
    this.setState({ input: event.target.value })
  }

  renderMarkdown = () => {
    return (<ReactMarkdown source={this.setState.input} />);
  }

  render() {

    const input = this.state.input;

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandle} />
    }

    const ret = <div className='center' style={{ height: '100%' }}>
      <Navbar toggleClickHandle={this.toggleClickHandle} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      <div className='rendered-values-blog'>
        <form className='create-input' onSubmit={this.renderMarkdown} >
        <div className="blog-form">
          <h5>
            Create Blog
          </h5>
          <div className='textarea'>
              <div className='side'>
                  <Advetisment />
              </div>
            <textarea className='create-blog-text' onChange={this.inputChangeHandle} type="text" value={this.state.input} />
            <div className='side'>
                <Advetisment />
            </div>
          </div>
        </div>
        <button className="create-blog-btn" onSubmit={this.renderMarkdown}>Submit</button>
        </form>
      </div>
    </div>
    return (
      <div>
        {
          ret
        }
      </div>
    )
  }
}

export default CreateBlog