let $el, $ps, $up, totalHeight

$(document).ready(function () {
  console.log(1)
  $('.read-more .button').click(function (event) {
    console.log(event)
    const card = event.target.parentNode.parentNode
    const gradient = card.querySelector('.gradient')
    const content = card.querySelector('.writeup p')
    const writeup = card.querySelector('.writeup')
    const readMore = card.querySelector('.read-more')
    console.log(content)

    writeup.style.top = '18px'
    readMore.style.display = 'none'
    content.style.maxHeight = 'none'
    gradient.style.display = 'none'
    card.style.height = 'auto'
    // totalHeight = 0
    // //need to remove gradient -> display: none on expansion
    // $el = $(this)
    // $p = $el.parent()
    // $up = $p.parent()
    // $ps = $up.find('p:not(\'.read-more\')')
    // $ps.each(function () {
    //   totalHeight += $(this).outerHeight()
    // })
    //
    // $up
    //   .css({
    //     'height': $up.height(),
    //     'max-height': 200
    //   })
    //   .animate({
    //     'height': totalHeight
    //   })
    // $p.fadeOut()
    // return false

  })
})
