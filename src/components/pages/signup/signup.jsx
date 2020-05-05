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
    this.handleSubmit = (e) => {
      const fileInput = document.getElementById('propic')
      if (this.state.firstName === '' || this.state.lastName === '' ||
        this.state.emailID === '' || this.state.password === '' || this.state.reEnterPassword === ''
        || fileInput.files.length === 0 || fileInput.files[0].type.split('/')[0] !== 'image') {
        window.alert('Fill the all the fields of the form')
        e.preventDefault()
        return
      }
      if (this.state.password !== this.state.reEnterPassword) {
        window.alert('Passwords doesn\'t match')
        e.preventDefault()
        return
      }
      if (this.state.password.length < 8 || this.state.password.length > 30) {
        window.alert('Password must be between length 8-30.')
        e.preventDefault()
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
        <Navbar user={{}} />
        <div className='main-container'>
          <div className='index-container'>
            <div className='programmer'>
              <img src='/svg/good_team.svg' alt='good-team' />
            </div>
            <div className='login-container'>
              <form method='POST' onSubmit={this.handleSubmit} id='signupForm' encType='multipart/form-data'>
                <div className='input-div one'>
                  <div>
                    <h5>First Name</h5>
                    <input
                      onChange={this.handleFirstNameChange} type='text' value={this.state.firstName}
                      className='input' name='firstName'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Last Name</h5>
                    <input
                      onChange={this.handleLastNameChange} type='text' value={this.state.lastName}
                      className='input' name='lastName'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Email ID</h5>
                    <input
                      onChange={this.handleEmailChange} form='signupForm' type='email' value={this.state.emailID}
                      className='input' name='email'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <h5>Password</h5>
                    <input
                      onChange={this.handlePasswordChange}
                      type='password' value={this.state.password}
                      className='input' name='password'
                    />
                  </div>
                </div>
                <div className='input-div two'>
                  <div>
                    <h5>Confirm Password</h5>
                    <input
                      onChange={this.handlePasswordCheck}
                      type='password' value={this.state.reEnterPassword}
                      className='input' name='confirmPassword'
                    />
                  </div>
                </div>
                <div className='input-div'>
                  <div>
                    <input
                    type='file'
                    name='propic'
                    id='propic'
                    accept='image/*'
                    />
                  </div>
                </div>
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
