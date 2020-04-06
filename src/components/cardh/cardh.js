import React from 'react';


const card = (props) => {   //the props passed herer will contain the rendering text images and the whether it is thread or logo 
    return (
        <div className='card'>
            <div className='card-fluid'>
                <div className='topic'>
                    <div className='topic-header'>
                        <div className='topic-logo'>
                            <img src='http://localhost:3000/svg/forumlogo.svg' />
                        </div>
                        <div className='topic-name'>
                            #Header
                        </div>
                    </div>
                    <div className='topic-description'>
                        {/* {props.description} */}
                        Description we need to give to see what is the answer of the situdation aoen jdnf wakarimashima
                    </div>
                    <div className='threads-blogs'>
                        <div className='threads'>
                            <div className='tb-sign'>
                                <img src='http://localhost:3000/svg/forumlogo.svg'></img>
                            </div>
                            <div className='tb'>
                                6 Threads
                            </div>
                        </div>
                        <div className='blogs'>
                            <div className='tb-sign'>
                                <img src='http://localhost:3000/svg/bloglogo.svg'></img>
                            </div>
                            <div className='tb'>
                                7 Blogs
                            </div>
                        </div>
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
                            <div className='user-name-details'>
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