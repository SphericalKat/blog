document.addEventListener('DOMContentLoaded', function (event) {

  const inputs = document.querySelectorAll('.input')

  function focusFunc (e) {
    const parent = e.target.parentNode.parentNode
    parent.classList.add('focus')
  }

  function focusLostFunc (e) {
    const parent = e.target.parentNode.parentNode
    console.log(e)
    if (e.target.value === '')
      parent.classList.remove('focus')
  }

  inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('change',focusFunc)
    input.addEventListener('focusout', focusLostFunc)
  })
})
