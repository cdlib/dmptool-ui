// Navigation Toggle Component //

const navToggleButton = document.querySelector('#js-navtoggle')
const headerNav = document.querySelector('#js-headernav')
const inHeader = headerNav !== null && navToggleButton !== null

const headerNavOpen = () => {
  if (inHeader) {
    headerNav.hidden = false
    navToggleButton.setAttribute('aria-expanded', true)
  }
}

const headerNavClosed = () => {
  if (inHeader) {
    headerNav.hidden = true
    navToggleButton.setAttribute('aria-expanded', false)
  }
}

const initNavToggle = () => {
  if (inHeader) {
    navToggleButton.addEventListener('click', () => {
      if (headerNav.hidden === true) {
        headerNavOpen()
      } else {
        headerNavClosed()
      }
    })

    if (headerNav.hidden === true) {
      headerNavOpen()
    } else {
      headerNavClosed()
    }
  }
}

export { headerNavOpen, headerNavClosed, initNavToggle }
