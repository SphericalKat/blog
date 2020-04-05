import React from 'react';

const UserCard = (props) => {
    return(
        <div className='user-card'>
            <div className='user-back'>
            <div className='user-circle'>
            </div>
            </div>
            <div className='user-name'>
                Abhijay Kishore
            </div>
            <div className='user-details-home'>
                Losem Ipsum something about yourself and you<br></br> not much
            </div>
        </div>
    )
} 

export default UserCard;