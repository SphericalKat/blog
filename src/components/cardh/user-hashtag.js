import React from 'react';

const Hashtag = (props) => {

    let h = 
        <div className='hash-div'>
                <div className='hashes'>
                    <div className='text'>
                        #DEV {/*props.hash*/}
                    </div>
                </div>
            </div>

    return(
        <div className='hashtag-box'>
            <div className='hash-head'>
                Followed Hashtags
            </div>
            {h}
        </div>
    )
}

export default Hashtag