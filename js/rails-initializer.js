import initWatchViewportWidth from './watch-viewport-widths'

import initProfileMenu from './profile-menu'
import initLanguageMenu from './language-menu'
import initAdminMenu from './admin-menu'

import initCallToAction from './call-to-action'
import initRandomHeroImage from './random-hero-image'
import initBlogCarousel from './blog-carousel'

// TODO: @joel is there a better way to do this so that they become part of the dist/ui-assets?
//       Rails adds a fingerprint id to the image names so I'm going to let it do that but I
//       want the images to come from this repo (or maybe they would be better suited to live in
//       the DMPTool repo ... not sure what the best approach would be)
//
// Import the hero images so that they get output in the dist/ui-assets
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
