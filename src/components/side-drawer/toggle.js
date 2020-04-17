import React from 'react'

const toggleButton = props => (
  <button className='toggle-button' onClick={props.handleOnClick}>
    <div className='line' />
    <div className='line' />
    <div className='line' />
  </button>
)

export default toggleButton
