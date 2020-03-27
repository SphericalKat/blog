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
                
            </div>
        );
    }
}

export default SignUp;