// Navigation Toggle Component //

const navToggleButton = () => document.querySelector('#js-navtoggle')
const headerNav = () => document.querySelector('#js-headernav')

const headerNavOpen = () => {
  headerNav().hidden = false
  navToggleButton().setAttribute('aria-expanded', true)
}

const headerNavClosed = () => {
  headerNav().hidden = true
  navToggleButton().setAttribute('aria-expanded', false)
}

const initNavToggle = () => {
  const inHeader = document.querySelector('.c-header')

  if (inHeader) {
    navToggleButton().addEventListener('click', () => {
      if (headerNav().hidden === true) {
        headerNavOpen()
      } else {
        headerNavClosed()
      }
    })

    if (headerNav().hidden === true) {
      headerNavOpen()
    } else {
      headerNavClosed()
    }
  }
}

export { headerNavOpen, headerNavClosed, initNavToggle}
