$(document).ready(function () {
  $('.read-more .button').click(function (event) {
    let writeup
    let readMore
    if (event.target.tagName === 'SPAN') {
      writeup = event.target.parentNode.parentNode.parentNode.querySelector('.writeup')
      readMore = event.target.parentNode
    } else {
      writeup = event.target.parentNode.parentNode.querySelector('.writeup')
      readMore = event.target
    }
    const writeupDots = writeup.querySelector('.writeup-dots')
    const writeupHidden = writeup.querySelector('.writeup-hidden')

    writeupDots.style.display = 'none'
    writeupHidden.style.display = 'contents'
    readMore.style.display = 'none'
  })
})
