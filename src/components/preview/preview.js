import React from 'react'

const HlJs = require('highlight.js')
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false,
  highlight: function (str, lang) {
    if (lang && HlJs.getLanguage(lang)) {
      try {
        return HlJs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
}).use(require('markdown-it-emoji'))

class Preview extends React.Component {
  render () {
    const rendered = markdown.render(this.props.content)
    return (
      <div className='preview markdown' dangerouslySetInnerHTML={{ __html: rendered }} />
    )
  }
}

export default Preview
