import React from 'react'

class Login extends React.Component {
  constructor (props) {
    super(props)

    // States
    this.state = { name: '', password: '' }

    // Event Handlers
    this.handleFormSubmit = (event) => {
      // event.preventDefault()
    }

    this.handleNameChange = (event) => {
      this.setState({ name: event.target.value })
    }

    this.handlePasswordChange = (event) => {
      this.setState({ password: event.target.value })
    }

    this.handleSignUpClick = () => {
      window.location = `${'http://localhost:3000'}/signup`
    }
  }

  componentDidMount () {
    const param = new URLSearchParams(window.location.search)
    if (param.get('err') === '1010') {
      document.querySelector('#user-already').style.display = 'block'
    }
    if (param.get('err') === '1011') {
      document.querySelector('#invalid-cred').style.display = 'block'
    }
  }

  render () {
    return (
      <div>
        <div className='login-error-text' id='user-already'>ERR1010: User Already exists</div>
        <div className='login-error-text' id='invalid-cred'>ERR1011: Invalid email or password</div>
        <button
          type='submit' style={{ cursor: 'pointer' }}
          className='sign-btn' onClick={this.handleSignUpClick} value=''
        >SIGNUP
        </button>
        <div className='main-container'>
          <div className='index-container'>
            <div className='programmer'>
              <img src='http://localhost:3000/svg/logo.svg' />
            </div>
            <div className='login-container'>
              <form onSubmit={this.handleFormSubmit} method='POST'>
                <img className='avatar' src='http://localhost:3000/svg/male_avatar.svg' />
                <h2>Welcome</h2>
                <div className='input-div one'>
                  <div>
                    <h5>Email</h5>
                    <input
                      onChange={this.handleNameChange} className='input'
                      name='email'
                      type='text'
                      value={this.state.name}
                    />
                  </div>
                </div>
                <div className='input-div two'>
                  <div>
                    <h5>Password</h5>
                    <input
                      onChange={this.handlePasswordChange} className='input'
                      type='password'
                      name='password'
                      value={this.state.password}
                    />
                  </div>
                </div>
                <a className='forgotPassword' href='#'>Forgot Password</a>
                <button
                  type='submit' className='btn' value='' style={{ cursor: 'pointer' }}
                >LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
