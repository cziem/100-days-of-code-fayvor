const nav = document.querySelector('nav')
let navTop = nav.offsetTop

const stickyNav = () => {
  if (window.scrollY >= navTop) {
    // document.body.style.paddingTop = nav.offsetHeight + 'px'
    document.body.classList.add('fixed_nav')
  } else {
    document.body.classList.remove('fixed_nav')
    // document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', stickyNav)