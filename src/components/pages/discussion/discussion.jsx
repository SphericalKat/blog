import React from 'react'
import Navbar from '../../navbar/navbar'
import { Cube } from 'styled-loaders-react'
import SideDrawer from '../../sideDrawer/sideDrawer'
import Backdrop from '../../backdrop/backdrop'

class Discussion extends React.Component {

  constructor (props) {
    super(props)
    this.state = { 
      text: '', 
      inputText: '', 
      mode: 'view', 
      navbarOpen: false, 
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false,
      question: 'We ask relevant questions here! so waht is intergration?',
      //img: require('/')//insert image url
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
    this.setState({ loading: true })
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  handleSave = () => {
    this.setState({ text: this.state.inputText, mode: 'view' })
  }

  handleEdit = () => {
    this.setState({ mode: 'edit' })
  }

  renderInputField = () => {
    let input

    if (this.state.mode !== 'view') {
      input =
        <p>
          <input
            onChange={this.handleChange}
            value={this.state.inputText}/>
        </p>
    }

    return input
  }

  renderButton = () => {
    let button

    if (this.state.mode === 'view') {
      button =
        <button className="save-edit" onClick={this.handleEdit}>
          Edit
        </button>
    } else {
      button =
        <button className="save-edit" onClick={this.handleSave}>
          Save
        </button>
    }

    return button
  }

  toggleClickHandle = () => {
    this.setState((pevState) => {
      return {sideDrawerOpen : !pevState.sideDrawerOpen}; //passing reference
    })
  };

  backdropClickHandle = () => {
    this.setState({sideDrawerOpen : false})
  }


  renderQuestion = () => {
    let question = <div className="question">
      Q:{this.state.question}
      <div className="ques-img">
        <img src={this.state.img} />
      </div>
    </div>

    return question;
  }

  render () {

    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandle}/>
    }

    const ret = <div style={{height: '100%'}}>
                  <Navbar toggleClickHandle={this.toggleClickHandle}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                <div className='rendered-values'>
                    {this.renderQuestion()}
                  <span>Text: {this.state.text}</span>
                    {this.renderInputField()}
                    {this.renderButton()}
                </div>
                </div>

    return (
      <div>
        {
          // this.state.loading ?<div className='main'> <Cube color="blue"/></div> : 
          ret
        }
      </div>
    )
  }
}

export default Discussion