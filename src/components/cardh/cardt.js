import React from 'react';


const card = (props) => {   //the props passed herer will contain the rendering text and the whether it is thread or logo 
    return (
        <div className='card'>
            <div className='card-fluid'>
                <div className='latest'>
                    <div className='latest-user-img'>
                        <img src='http://localhost:3000/img/profile.jpeg' />
                    </div>
                    <div className='latest-details-threads'>
                        <div className='query'>
                            Questions or blogs
                        </div>
                        <div className='details'>
                            <div className='user-name'>
                                query poster or blog writer
                            </div>
                            <div className='time'>
                                4 min
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;