import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

class Markdown extends Component {
    render () {
        const {input} = this.props
        const disallowed = []
        return (
            <ReactMarkdown source={input} disallowedTypes={disallowed}/>
        )
    }
}

export default Markdown