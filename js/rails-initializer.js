import initWatchViewportWidth from './watch-viewport-widths'

import initProfileMenu from './profile-menu'
import initLanguageMenu from './language-menu'
import initAdminMenu from './admin-menu'

import initRandomHeroImage from './random-hero-image'
import initBlogCarousel from './blog-carousel'
import initNotifications from './notifications'
import initShowPassword from './show-password'
import initFormElRequired from './form-element-required'
import initReadonlyTextfield from './readonly-textfield'
import initFormValidation from './form-validation'

// Rails needs the JS to execute after page load once the DOM tree is available
window.addEventListener('load', () => {
  initWatchViewportWidth()

  initProfileMenu()
  initLanguageMenu()
  initAdminMenu()

  initRandomHeroImage()
  initBlogCarousel()
  initNotifications()
  initShowPassword()
  initFormElRequired()
  initReadonlyTextfield()
  initFormValidation()
})
