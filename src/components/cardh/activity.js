import React from 'react'

const Activity = (props) => {
    return(
        <div className='activity'>
            <div className='activity-head'>
                Activity
            </div>
            <div className='activity-div'>
            <div className='activity-detail'>
                <div className='number'>
                    420
                </div>
                <div className='number-detail'>
                    LIKED BLOGS
                </div>
            </div>
            <div className='activity-detail'>
                <div className='number'>
                    69
                </div>
                <div className='number-detail'>
                    ISSUES SOLVED
                </div>
            </div>
            <div className='activity-detail'>
                <div className='number'>
                    0
                </div>
                <div className='number-detail'>
                    ISSUES CREATED
                </div>
            </div>
            </div>
        </div>
    )
}

export default Activity