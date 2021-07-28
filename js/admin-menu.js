// User Admin Menu Toggle
const initAdminMenu = () => {
  const adminMenu = document.querySelector('#js-admin')
  const adminMenuToggle = document.querySelector('#js-admin__button')
  const adminMenuGroup = document.querySelector('#js-admin__menu')

  const adminMenuClose = () => {
    adminMenuGroup.hidden = true
    adminMenuToggle.setAttribute('aria-expanded', false)
  }

  const adminMenuTarget = event => {
    if (!adminMenu.contains(event.target)) {
      adminMenuClose()
    }
  }

  if (adminMenu) {
    adminMenuToggle.addEventListener('click', () => {
      if (adminMenuGroup.hidden === true) {
        adminMenuGroup.hidden = false
        adminMenuToggle.setAttribute('aria-expanded', true)
      } else {
        adminMenuClose()
      }
    })

    // Clicking outside of menu closes it:
    window.addEventListener('click', adminMenuTarget)

    // Tabbing outside of menu closes it:
    window.addEventListener('focusin', adminMenuTarget)
  }
};

export default () => initAdminMenu()
