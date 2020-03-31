import React from 'react';


const card = (props) => {   //the props passed herer will contain the rendering text and the whether it is thread or logo 
    return (
        <div className='card'>
            <div className='card-fluid'>
                <div className='latest'>
                    <div className='latest-user-img-tb'>
                        <img src='http://localhost:3000/img/profile.jpeg' />
                    </div>
                    <div className='latest-details'>
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
                        <div className='threads-tb'>
                            <div className='tb-sign'>
                                <img src='http://localhost:3000/svg/forumlogo.svg'></img>
                            </div>
                            <div className='tb-tb'>
                                6 Threads/blogs
                            </div>
                        </div>
                <div className='latest'>
                    <div className='latest-user-img'>
                        <img src='http://localhost:3000/img/profile.jpeg' />
                    </div>
                    <div className='latest-details'>
                        <div className='query'>
                            Questions or blogs
                        </div>
                        <div className='details'>
                            <div className='user-name'>
                                latest-user name
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