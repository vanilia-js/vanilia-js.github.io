const c = 'code-block'
let x = 0, y = 0, vx = 0, vy = 0, frame

$(c => {
  c.ontouchstart = e => {
    const t = e.touches[0]
    x = t.clientX
    y = t.clientY
    cancelAnimationFrame(frame)
  }

  c.ontouchmove = e => {
    const t = e.touches[0]
    vx = t.clientX - x
    vy = t.clientY - y
    x = t.clientX
    y = t.clientY

    Math.abs(vy) > Math.abs(vx) ? window.scrollBy(0, -vy) : c.scrollLeft -= vx
  }

  c.ontouchend = () => {
    const momentum = () => {
      vx *= 0.96
      vy *= 0.96
      if (Math.abs(vx) < 0.6 && Math.abs(vy) < 0.6) return
      vy && window.scrollBy(0, -vy)
      vx && (c.scrollLeft -= vx)
      frame = requestAnimationFrame(momentum)
    }
    momentum()
  }
},c)