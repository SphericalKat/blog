import React from 'react';
import Navbar from '../../navbar/navSignup'

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {submit: false,
            firstName: '',
            lastName: '',
            forumName: '',
            emailID: '',
            password: '',
            reEnterPassword: '',
        };
    }

    handleSubmit=()=>{
        if(firstName == "" || lastName == "" || forumName == "" || emailID == "" || password == "" || reEnterPassword == ""){
            alert("Fill the all the fields of the form");
        }
        else{
            this.setState({submit: true});
        }
    }

    onFirstNameChange=(event)=>{
        this.setState({firstName: event.target.value})
    }

    onLastNameChange=(event)=>{
        this.setState({lastName: event.target.value})
    }

    onForumNameChange=(event)=>{
        this.setState({forumName: event.target.value})
    }

    onEmailChange=(event)=>{
        this.setState({emailID: event.target.value})
    }

    onPasswordChange=(event)=>{
        this.setState({password: event.target.value})
    }

    onPasswordCheck=(event)=>{
        this.setState({reEnterPassword: event.target.value})
    }

    render(){
        return(
            <div style={{height: '100%'}}>
                <Navbar />
                <div className='form'>
                    <div className='svg'>
                        
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" defaultValue={""} placeholder="First Name" onChange={this.onFirstNameChange}></input><br></br>
                        <input type="text" defaultValue={""} placeholder="Last Name" onChange={this.onLastNameChange}></input><br></br>
                        <input type="text" defaultValue={""} placeholder="Forum Name" onChange={this.onForumNameChange}></input><br></br>
                        <input type="email" defaultValue={""} placeholder="emailID@something.com" onChange={this.onEmailChange}></input><br></br>
                        <input type="password" defaultValue={""} onChange={this.onPasswordChange}></input><br></br>
                        <input type="password" defaultValue={""} onChange={this.onPasswordCheck}></input><br></br>
                        <button className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;