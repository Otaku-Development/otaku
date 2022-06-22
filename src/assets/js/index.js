import Highway from '@dogstudio/highway'
import Fade from './transition.fade.js'
import menuInit from './menu.js'

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
})

menuInit()
