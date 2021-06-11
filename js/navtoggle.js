// Navigation Toggle Component //

function headerNavOpen () {
  if (inHeader) {
    headerNav.hidden = false
    navToggleButton.setAttribute('aria-expanded', true)
  }
}

function headerNavClosed () {
  if (inHeader) {
    headerNav.hidden = true
    navToggleButton.setAttribute('aria-expanded', false)
  }
}

const inHeader = document.querySelector('.c-header')
const navToggleButton = document.querySelector('#js-navtoggle')
const headerNav = document.querySelector('#js-headernav')

if (inHeader) {
  navToggleButton.addEventListener('click', function () {
    if (headerNav.hidden === true) {
      headerNavOpen()
    } else {
      headerNavClosed()
    }
  })
}

export { headerNavOpen, headerNavClosed }
