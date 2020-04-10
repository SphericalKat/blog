import React from 'react'

class CreateThread extends React.Component {
  constructor (props) {
    super(props)
    let content
    if (props.content) {
      content = props.content
    } else {
      content = ''
    }
    this.state = { content: content }

    this.handleInputChange = (e) => {
      this.setState({ content: e.target.value })
    }
  }

  render () {
    return (
      <div className='create-content-container'>
        <div className='create-content-state'>
          <div className='create-content-state-component' id='create-content-state-component-write'>
            Write
          </div>
          <div className='create-content-state-component' id='create-content-state-component-read'>
            Preview
          </div>
        </div>
        <div className='create-content-input-container'>
          <textarea value={this.state.content} className='create-content-input' onChange={this.handleInputChange} />
        </div>
      </div>
    )
  }
}

export default CreateThread
