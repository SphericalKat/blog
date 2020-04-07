import React from 'react'

const Card = (props) => {
    return(
        <div className='card-tb'>
            <div className='head-card'>
                <div className='photo'>
                </div>
                <div>
                <div className='photo-details'>
                <div className='photo-name'>
                        Shizuka
                    </div>
                    <div className='des'>
                        Engineer
                    </div>
                </div>
                </div>
            </div>
            <div className='gradient'></div>
            <div className='writeup'>
            <p>{props.content}</p>
            </div>
          <div className="read-more"><div className="button">... Read More</div></div>
        </div>
    )
}

export default Card
