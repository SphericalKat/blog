import React from 'react'


class Hashtag extends React.Component {
  constructor(props) {
    super(props)

    this.numberHash = props.numberHash,
      this.arrayHash = props.arrayHash
  }

  onhandleHash = () => {

    for (let i = 0; i < this.numberHash; i++) {
      return (
        <div className='hash-div'>
          <div className='hashes'>
            <div className='text'>
              {this.arrayHash[i]}
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='hashtag-box'>
        <div className='hash-head'>
          Followed Hashtags
      </div>
        {this.onhandleHash}
      </div>
    )
  }

}

export default Hashtag