import React from 'react'
import Preview from '../preview/preview'

class CreateContent extends React.Component {
  constructor (props) {
    super(props)
    let content
    if (props.content) {
      content = props.content
    } else {
      content = ''
    }
    this.state = { content: content, state: 'write' }

    this.handleInputChange = (e) => {
      this.setState({ content: e.target.value })
    }

    this.handleStateClick = (e) => {
      if (e.target.id === 'create-content-state-component-write') {
        if (this.state.state !== 'write') {
          e.target.classList.add('active')
          const read = document.getElementById('create-content-state-component-read')
          read.classList.remove('active')
          this.setState({ state: 'write' })
        }
      } else {
        if (this.state.state !== 'read') {
          e.target.classList.add('active')
          const write = document.getElementById('create-content-state-component-write')
          write.classList.remove('active')
          this.setState({ state: 'read' })
        }
      }
    }
  }

  render () {
    let stateComponent
    if (this.state.state === 'write') {
      stateComponent = (
        <textarea value={this.state.content} className='create-content-input' onChange={this.handleInputChange} />
      )
    } else {
      console.log('handler')
      stateComponent = (
        <div className='preview-container'>
          <Preview content={this.state.content} />
        </div>
      )
    }
    return (
      <div className='create-content-container'>
        <div className='create-content-state'>
          <div
            className='create-content-state-component active'
            id='create-content-state-component-write'
            onClick={this.handleStateClick}
          >
            Write
          </div>
          <div
            className='create-content-state-component'
            id='create-content-state-component-read'
            onClick={this.handleStateClick}
          >
            Preview
          </div>
        </div>
        <div className='create-content-input-container'>
          {stateComponent}
        </div>
      </div>
    )
  }
}

export default CreateContent
