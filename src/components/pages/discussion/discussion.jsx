import React from "react";

class Discussion extends React.Component {

    constructor(props) {
        super(props);
        this.onAskingQuestion = this.onAskingQuestion.bind(this);
        this.state = {
            question: "Your Question",
            confirmation: false,
        }
    }

    // this.onAskingQuestion = this.onAskingQuestion.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    onAskingQuestion = (event) => {
        this.setState({ question: event.target.value });
    }

    handleSubmit = () => {
        var conf = confirm('Confirm!');
        if (conf == true) { 
            this.setState({confirmation: true});
            // document.getElementById("UsersQuestion").innerHTML = this.props.question;
        }
    }

    
    // componentDidUpdate() {
    //     if(this.props.confirmation){
    //         document.getElementById("UsersQuestion").innerHTML = this.props.question;
    
    //     }
    // }
    // handleOK = (event) => {
    //     if(event== true){
    //         this.state.confirmedQuestion = this.state.question;
    //     }
    // }

    render = () => {

        const confirmation=this.state.confirmation;

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea value={this.state.question} onChange={this.onAskingQuestion} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <display confirmation={confirmation} />
            </div>
        );
    }

}

function display(props) {
    if(props.confirmation){
    return <h1>HELLO from outside the class</h1>;
    }
}



export default Discussion;