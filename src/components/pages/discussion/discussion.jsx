import React from 'react'
import Navbar from '../../navbar/navbar'
import { Cube } from 'styled-loaders-react'

class Discussion extends React.Component {

  constructor (props) {
    super(props)
    this.state = { text: '', inputText: '', mode: 'view', navbarOpen: false, loading: true }

    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
    this.setState({ loading: true })
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  handleSave = () => {
    this.setState({ text: this.state.inputText, mode: 'view' })
  }

  handleEdit = () => {
    this.setState({ mode: 'edit' })
  }

  renderInputField = () => {
    let input

    if (this.state.mode !== 'view') {
      input =
        <p>
          <input
            onChange={this.handleChange}
            value={this.state.inputText}/>
        </p>
    }

    return input
  }

  renderButton = () => {
    let button

    if (this.state.mode === 'view') {
      button =
        <button onClick={this.handleEdit}>
          Edit
        </button>
    } else {
      button =
        <button onClick={this.handleSave}>
          Save
        </button>
    }

    return button
  }

  render () {
    const ret = <div><Navbar/> <span>
                  <p>Text: {this.state.text}</p>
      {this.renderInputField()}
      {this.renderButton()}
                  </span></div>

    return (
      <div>
        {
          this.state.loading ?<div className='main'> <Cube color="blue"/></div> : ret
        }
      </div>
    )
  }
}

export default Discussion