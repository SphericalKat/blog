import React from 'react'
import marked from 'marked'
import emoji from 'node-emoji'
import sanitize from 'sanitize-html'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    try {
      return require('./prism').highlight(code, require('./prism').languages[lang], lang)
    } catch (e) {
      return code
    }
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

class Preview extends React.Component {
  render () {
    const rendered = marked.parse(this.props.content)
    const emojified = emoji.emojify(rendered, null)
    return (
      <div className='preview markdown' dangerouslySetInnerHTML={{ __html: sanitize(emojified) }} />
    )
  }
}

export default Preview
