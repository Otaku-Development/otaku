import Highway from '@dogstudio/highway'
import gsap from 'gsap'
import form from './form.js'

// vars
const body = document.querySelector('body'),
  siteNav = document.querySelector('.Header__Nav'),
  menuButton = document.querySelector('.js-menu-toggle'),
  menuActive = 'open',
  menuUnactive = 'closed'

// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    from.remove()
    gsap.from(to, { duration: 0.3, opacity: 0, onComplete: done })
    form()
  }

  out({ from, done }) {
    gsap.to(from, { opacity: 0, duration: 0.3, onComplete: done })

    // close menu
    body.classList.remove('nav-open')
    siteNav.setAttribute('data-menu', menuUnactive)
    siteNav.removeAttribute('aria-expanded')
    menuButton.setAttribute('data-menu', menuUnactive)
  }
}

export default Fade
