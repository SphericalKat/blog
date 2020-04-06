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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum enim, interdum neque nulla. Gravida quis neque, consectetur lorem purus mauris tempor faucibus. Hac pellentesque dui.
            </p>
            <p className="read-more"><a href="#" className="button">READ MORE</a></p>
            </div>
        </div>
    )
}

export default Card