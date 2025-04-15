const c = 'code-block'

let x = 0, y = 0
let vx = 0, vy = 0
const easingFactor = 0.05

$(c => {
  c.addEventListener('touchstart', e => {
    const { clientX, clientY } = e.touches[0]
    x = clientX
    y = clientY
  }, { passive: true })

  c.addEventListener('touchmove', e => {
    const { clientX, clientY } = e.touches[0]
    vx *= (1 - easingFactor)
    vy *= (1 - easingFactor)
    Math.abs(clientY - y) > Math.abs(clientX - x) ? vy = clientY - y : vx = clientX - x
    vx && (c.scrollLeft -= vx)
    vy && window.scrollBy(0, -vy)

    x = clientX
    y = clientY
  }, { passive: false })

  c.addEventListener('touchend', () => {
    const momentum = () => {
      vx *= (1 - easingFactor)
      vy *= (1 - easingFactor)
      if (Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) return
      vx && (c.scrollLeft -= vx)
      vy && window.scrollBy(0, -vy)
      
      requestAnimationFrame(momentum)
    }
    momentum()
  })
}, c)
