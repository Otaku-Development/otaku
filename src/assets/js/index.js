import Highway from '@dogstudio/highway'
import Fade from './transition.fade.js'

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
})
