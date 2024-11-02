window.onscroll = function () {
  const head = document.getElementById('header')
  if (head && window.scrollY > 500) {
    head.style.backgroundColor = '#ffffff'
  } else {
    head.style.backgroundColor = '#ffc017'
  }
  const button = document.getElementById('nav-button')
  if (button && window.scrollY > 500) {
    button.style.backgroundColor = '#538724'
  } else {
    button.style.backgroundColor = '#000000'
  }
}

window.onload = function () {
  const svg = document.getElementById('svg-image')
  if (svg) {
    const paths = document.getElementsByTagName('g')
    const butts = []
    for (let i = 0; i < paths.length; i++) {
      if (paths[i].getAttribute('stroke-linecap') === 'butt') {
        butts.push(paths[i])
      }
    }
    setInterval(function () {
      animateSvg(butts)
    }, 50)
  }
}

function animateSvg(butts) {
  const index = Math.ceil(Math.random() * butts.length)
  if (index < butts.length) {
    if (butts[index].getAttribute('opacity') === '1') {
      butts[index].setAttribute('opacity', '0')
    } else {
      butts[index].setAttribute('opacity', '1')
    }
  }
}
