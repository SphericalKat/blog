$(document).ready(function () {
  $('.read-more .button').click(function (event) {
    const card = event.target.parentNode.parentNode
    const content = card.querySelector('.writeup .content')
    const writeup = card.querySelector('.writeup')
    const readMore = card.querySelector('.read-more')

    readMore.style.display = 'none'
    content.style.maxHeight = 'none'
    content.style.overflow = 'unset'
    card.style.height = 'auto'
    writeup.style.paddingBottom = '5%'
  })
})
