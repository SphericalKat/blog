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
      reEnterPassword: ''
    }

    // Event handler
    this.handleSubmit = () => {
      if (this.firstName === '' || this.lastName === '' || this.forumName === '' ||
        this.emailID === '' || this.password === '' || this.reEnterPassword === '') {
        window.alert('Fill the all the fields of the form')
      } else {
        this.setState({ submit: true })
      }
    }

    this.handleFirstNameChange = (event) => {
      this.setState({ firstName: event.target.value })
    }

    this.handleLastNameChange = (event) => {
      this.setState({ lastName: event.target.value })
    }

    this.handleEmailChange = (event) => {
      this.setState({ emailID: event.target.value })
    }

    this.handlePasswordChange = (event) => {
      this.setState({ password: event.target.value })
    }

    this.handlePasswordCheck = (event) => {
      this.setState({ reEnterPassword: event.target.value })
    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <Navbar />
        <div className='main-container'>
          <div className='index-container'>
            <div className='programmer'>
              <img src='http://localhost:3000/svg/good_team.svg' alt='good-team' />
            </div>
            <div className='login-container'>
              <form onSubmit={this.handleSubmit}>
                <div className='input-div one'>
                  <div>
                    <h5>First Name</h5>
                    <input
                      onChange={this.handleFirstNameChange} type='text' value={this.state.firstName}
                      className='input'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Last Name</h5>
                    <input
                      onChange={this.handleLastNameChange} type='text' value={this.state.lastName}
                      className='input'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Email ID</h5>
                    <input onChange={this.handleEmailChange} type='' value={this.state.emailID} className='input' />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Password</h5>
                    <input onChange={this.handlePasswordChange} type='' value={this.state.password} className='input' />
                  </div>
                </div>
                <div className='input-div two'>
                  <div>
                    <h5>Confirm Password</h5>
                    <input
                      onChange={this.handlePasswordCheck}
                      type='' value={this.state.reEnterPassword}
                      className='input'
                    />
                  </div>
                </div>
                <a className='forgotPassword' href='#'>Forgot Password</a>
                <button type='submit' className='btn' value=''>SIGNUP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
