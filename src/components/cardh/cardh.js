import React from 'react';


const card = (props) => {
    return (
        <div className='card'>
            <div className='card-fluid'>
                <div className='topic'>
                    <div className='topic-name'>heading</div>
                    <div className='topic-description'>
                        description
                    </div>
                    <div className='threads-blogs'>
                        <div className='threads'>
                            threads
                        </div>
                        <div className='blogs'>
                            blogs
                        </div>
                    </div>
                </div>
                <div className='latest'>
                    photu
                </div>
            </div>
        </div>
    )
}

export default card;