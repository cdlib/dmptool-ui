import initWatchViewportWidth from './watch-viewport-widths'

import initProfileMenu from './profile-menu'
import initLanguageMenu from './language-menu'
import initAdminMenu from './admin-menu'

import initRandomHeroImage from './random-hero-image'
import initBlogCarousel from './blog-carousel'

// Rails needs the JS to execute after page load once the DOM tree is available
window.addEventListener("load", () => {
  initWatchViewportWidth()

  initProfileMenu()
  initLanguageMenu()
  initAdminMenu()

  initRandomHeroImage()
  initBlogCarousel()
});
