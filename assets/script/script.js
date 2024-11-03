const animateSvg = (butts) => {
  const index = Math.ceil(Math.random() * butts.length)
  if (index < butts.length) {
    if (butts[index].getAttribute('opacity') === '1') {
      butts[index].setAttribute('opacity', '0')
    } else {
      butts[index].setAttribute('opacity', '1')
    }
  }
}

window.onload = () => {
  const svg = document.getElementById('svg-image')
  if (svg) {
    const paths = document.getElementsByTagName('g')
    const butts = []
    for (let i = 0; i < paths.length; i++) {
      if (paths[i].getAttribute('stroke-linecap') === 'butt') {
        butts.push(paths[i])
      }
    }
    setInterval(() => {
      animateSvg(butts)
    }, 50)
  }
}

let myNav = document.getElementById('nav')
let mybutt = document.getElementById('verde')

window.onscroll = () => {
  if (
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 400
  ) {
    myNav.classList.add('scroll')
    mybutt.style.backgroundColor = '#1a8917'
  } else {
    myNav.classList.remove('scroll')
    mybutt.style.backgroundColor = '#191919'
  }
}
