import React from 'react'
import Navbar from '../../navbar/navSignup'

class SignUp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      submit: false,
      firstName: '',
      lastName: '',
      forumName: '',
      emailID: '',
      password: '',
      reEnterPassword: '',
    }
  }

  handleSubmit = () => {
    if (firstName == '' || lastName == '' || forumName == '' || emailID == '' || password == '' || reEnterPassword == '') {
      alert('Fill the all the fields of the form')
    } else {
      this.setState({ submit: true })
    }
  }

  onFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value })
  }

  onLastNameChange = (event) => {
    this.setState({ lastName: event.target.value })
  }

  onForumNameChange = (event) => {
    this.setState({ forumName: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({ emailID: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onPasswordCheck = (event) => {
    this.setState({ reEnterPassword: event.target.value })
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Navbar/>
        <div className="main-container">
          <div className="index-container">
            <div className="programmer">
              <img src='http://localhost:3000/svg/good_team.svg'/>
            </div>
            <div className="login-container">
              <form onSubmit={this.onFormSubmit}>
                <div className="input-div one">
                  <div>
                    <h5>First Name</h5>
                    <input onChange={this.onFirstNameChange} type="text" value={this.state.firstName}/>
                  </div>
                </div>
                <div className="input-div">
                  <div>
                    <h5>Last Name</h5>
                    <input onChange={this.onLastNameChange} type="text" value={this.state.lastName}/>
                  </div>
                </div>
                <div className="input-div">
                  <div>
                    <h5>Email ID</h5>
                    <input onChange={this.onEmailChange} type="" value={this.state.emailID}/>
                  </div>
                </div>
                <div className="input-div">
                  <div>
                    <h5>Password</h5>
                    <input onChange={this.onPasswordChange} type="" value={this.state.password}/>
                  </div>
                </div>
                <div className="input-div two">
                  <div>
                    <h5>Confirm Password</h5>
                    <input onChange={this.onPasswordCheck} type="" value={this.state.reEnterPassword}/>
                  </div>
                </div>
                <a className="forgotPassword" href='#'>Forgot Password</a>
                <button type="submit" className="btn" value="">SIGNUP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
