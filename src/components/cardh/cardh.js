import React from 'react';


const card = (props) => {   //the props passed herer will contain the rendering text and the whether it is thread or logo 
    return (
        <div className='card'>
            <div className='card-fluid'>
                <div className='topic'>
                    <div className='topic-header'>
                        <div className='topic-logo'>
                            <img src='https://localhost:3000/svg/forumlogo.svg' />
                        </div>
                        <div className='topic-name'>
                            Header
                        </div>
                    </div>
                    <div className='topic-description'>
                        {/* {props.description} */}
                        Description we need to give to see what is the answer of the situdation aoen jdnf wakarimashima
                    </div>
                    <div className='threads-blogs'>
                        <div className='threads'>
                            <div className='tb-sign'>
                                <img src='https://localhost:3000/svg/forumlogo.svg'></img>
                            </div>
                            <div className='tb'>
                                6 Threads
                            </div>
                        </div>
                        <div className='blogs'>
                            <div className='tb-sign'>
                                <img src='https://localhost:3000/svg/bloglogo.svg'></img>
                            </div>
                            <div className='tb'>
                                7 Blogs
                            </div>
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