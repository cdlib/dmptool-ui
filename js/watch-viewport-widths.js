// Viewport Width Media Queries //

import { headerNavOpen, headerNavClosed, initNavToggle } from './navtoggle.js'
import { minwidth1 } from './breakpoints.js'

const watchViewportWidth = viewportWidth => {
  if (viewportWidth.matches) {
    headerNavOpen()
  } else {
    headerNavClosed()
  }
}

const initWatchViewportWidth = () => {
  const viewportWidth = window.matchMedia(`(min-width: ${minwidth1})`)

  initNavToggle()

  // Listen on watchViewportWidth function for changes to viewportWidth:
  watchViewportWidth(viewportWidth)
  viewportWidth.addListener(watchViewportWidth)
}

export default () => initWatchViewportWidth()
