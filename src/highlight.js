const highlight = require('highlight.js/lib/highlight')
highlight.registerLanguage('java', require('highlight.js/lib/languages/java'))
highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
highlight.registerLanguage('js', require('highlight.js/lib/languages/javascript'))
highlight.registerLanguage('json', require('highlight.js/lib/languages/json'))

module.exports = highlight
