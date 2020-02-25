import React from "react";

class Discussion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "Your Question"
        }
    }

    // this.onAskingQuestion = this.onAskingQuestion.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    onAskingQuestion = (event) => {
        this.setState({ question: event.target.value });
    }

    handleSubmit = (event) => {
        alert('Do you want to proceed?');
        event.preventDefault();
    }

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea value={this.state.question} onChange={this.onAskingQuestion} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }

}

export default Discussion;