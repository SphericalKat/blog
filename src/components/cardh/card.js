import React from 'react'
import ReactMarkdown from 'react-markdown'
const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  html:true,
  linkify:true,
  typographer:false,
  highlight: function (str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (__) {}
  }

  return ''; // use external default escaping
}
}).use(require('markdown-it-emoji'))

const Card = (props) => {
  console.log(props)
    const markdownContent = markdown.render(props.content )
    return(
        <div className='card-tb'>
          <div className='card-top'>
            <div className='card-top-details'>
              <div className='card-top-details-head'>
                HEAD
              </div>
              <div className='space'></div>
              <div className='card-top-details-dev'>
                #DEV
              </div>
            </div>
          </div>
            <div className='writeup'>
              <div className={'content markdown'} dangerouslySetInnerHTML={{__html:markdownContent}}></div>
            </div>
          <div className="read-more"><div className="button">READ MORE</div></div>
          <div className='functions'>
            <div className='like'>
              <img src='http://localhost:3000/svg/thumbs-up.svg' />
              <div className='i' style={{width: '60px'}}>
                57 LIKES
              </div>
            </div>
            <div className='like'>
              <img src='http://localhost:3000/svg/message-circle.svg' />
              <div className='i' style={{width: '100px'}}>
                57 COMMENTS
              </div>
            </div>
            <div className='like'>
              <img src='http://localhost:3000/svg/share.svg' />
              <div className='i'>
                SHARE
              </div>
            </div>
            <div className='space'></div>
            <div className='head-card'>
            <div className='photo-details'>
                <div className='photo-name'>
                        Shizuka
                    </div>
                    <div className='des'>
                        Engineer
                    </div>
                </div>
                <div className='photo'>
                </div>
                </div>
                <div> 
            </div>
          </div>
        </div>
    )
}

export default Card
