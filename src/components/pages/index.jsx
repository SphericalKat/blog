import React from "react";


class Index extends React.Component {
    constructor() {
        super();
        this.state = {name: "", password: ""}
    }


    onFormSubmit = (event) => {
        event.preventDefault();
    }

    onNameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    onPasswordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
            <div className="main-container">
            <div className="index-container">
                        <div className="programmer">
                            <img src='http://localhost:3000/svg/fingerprint.svg' />
                        </div>
                        <div className="login-container">
                            <form onSubmit={this.onFormSubmit}>
                                <img className="avatar" src='http://localhost:3000/svg/male_avatar.svg' />
                                <h2>Welcome</h2>
                                <div className="input-div one">
                                    <div>
                                        <h5>Username</h5>
                                        <input onChange={this.onNameChangeHandler} type="text" value={this.state.name}/>
                                    </div>
                                </div>
                                <div className="input-div two">
                                    <div>
                                        <h5>Password</h5>
                                        <input onChange={this.onPasswordChangeHandler} type="password" value={this.state.password}/>
                                    </div>
                                </div>
                                <a className="forgotPassword" href='#'>Forgot Password</a>
                                <button type="submit" className="btn" value="">Log In</button>
                            </form>
                    </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Index;