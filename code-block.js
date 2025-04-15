const c = 'code-block'

let x = 0, dx = 0, vx = 0
let y = 0, dy = 0, vy = 0

$(c => {
  c.addEventListener('touchstart', e => {
    const { clientX, clientY } = e.touches[0]
    x = clientX
    y = clientY
  }, { passive: true })

  c.addEventListener('touchmove', e => {
    const { clientX, clientY } = e.touches[0]
    dx = clientX - x
    dy = clientY - y
    x = clientX
    y = clientY

    queueMicrotask(() => {
      Math.abs(dy) > Math.abs(dx) ? vy = dy : vx = dx
      vy && window.scrollBy(0, -vy)
      vx && (c.scrollLeft -= vx)
      vy = vx = 0
    })
  }, { passive: false })
}, c)