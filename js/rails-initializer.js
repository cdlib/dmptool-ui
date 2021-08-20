import initWatchViewportWidth from './watch-viewport-widths'

import initProfileMenu from './profile-menu'
import initLanguageMenu from './language-menu'
import initAdminMenu from './admin-menu'

import initCallToAction from './call-to-action'
import initRandomHeroImage from './random-hero-image'
import initBlogCarousel from './blog-carousel'

// Import the hero images so that they get output in the dist/ui-assets.
// The copy_assets_to_dmptool.sh then copies them into the Rails assets dir
// so that they are available to the Rails HTML templates
import heroImg1 from 'url:../images/hero/1-large.jpg?as=jpg&quality=30&width=1000'
import heroImg2 from 'url:../images/hero/2-large.jpg?as=jpg&quality=30&width=1000'
import heroImg3 from 'url:../images/hero/3-large.jpg?as=jpg&quality=30&width=1000'
import heroImg4 from 'url:../images/hero/4-large.jpg?as=jpg&quality=30&width=1000'
import heroImg5 from 'url:../images/hero/5-large.jpg?as=jpg&quality=30&width=1000'

// Rails needs the JS to execute after page load once the DOM tree is available
window.addEventListener("load", () => {
  initWatchViewportWidth()

  initProfileMenu()
  initLanguageMenu()
  initAdminMenu()

  initCallToAction()
  initRandomHeroImage()
  initBlogCarousel()
});
