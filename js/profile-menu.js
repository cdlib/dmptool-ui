// User Profile Menu Toggle
const initProfileMenu = () => {
  const profileMenu = document.querySelector('#js-user-profile')
  const profileMenuToggle = document.querySelector('#js-user-profile__button')
  const profileMenuGroup = document.querySelector('#js-user-profile__menu')

  const profileMenuClose = () => {
    profileMenuGroup.hidden = true
    profileMenuToggle.setAttribute('aria-expanded', false)
  }

  const profileMenuTarget = event => {
    if (!profileMenu.contains(event.target)) {
      profileMenuClose()
    }
  }

  if (profileMenu) {
    profileMenuToggle.addEventListener('click', () => {
      if (profileMenuGroup.hidden === true) {
        profileMenuGroup.hidden = false
        profileMenuToggle.setAttribute('aria-expanded', true)
      } else {
        profileMenuClose()
      }
    })

    // Clicking outside of menu closes it:
    window.addEventListener('click', profileMenuTarget)

    // Tabbing outside of menu closes it:
    window.addEventListener('focusin', profileMenuTarget)
  }
};

export default () => initProfileMenu()
