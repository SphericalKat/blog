import React from 'react'
import CommentContainer from './comment-container'

const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
}).use(require('markdown-it-emoji'))

const Card = (props) => {
  const markdownContent = markdown.render(props.content)
  return (
    <div className='card-tb'>
      <div className='card-top'>
        <div className='card-top-details'>
          <div className='card-top-details-head'>
            HEAD
          </div>
          <div className='space' />
          <div className='card-top-details-dev'>
            #DEV
          </div>
        </div>
      </div>
      <div className='writeup'>
        <div className='content markdown' dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </div>
      <div className='read-more'>
        <div className='button'>...Read More</div>
      </div>
      <div className='functions'>
        <div className='like-box'>
          <div className='like'>
            <img src='http://localhost:3000/svg/thumbs-up.svg' />
            <div className='i'>
              57 <div className='i-text'>Likes</div>
            </div>
          </div>
          <div className='like'>
            <img src='http://localhost:3000/svg/message-circle.svg' alt='fuck you' />
            <div className='i'>
              57 <div className='i-text'>Comments</div>
            </div>
          </div>
        </div>
        <div className='head-card'>
          <div className='photo-details'>
            <div className='photo-name'>
              Shizuka
            </div>
            <div className='des'>
              Engineer
            </div>
          </div>
          <div className='photo' />
        </div>
        <div />
      </div>
      <CommentContainer />
    </div>
  )
}

export default Card
