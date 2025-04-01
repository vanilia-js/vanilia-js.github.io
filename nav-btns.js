const c = 'nav-btns'

export let framework = $('vanilia')
export let navIsOpen = $(false)

$(c => {
  c.html`
    <style>
      nav-btns {
        display: flex;
        justify-content: center;
        width: 100%;
      }
      @media (min-width: 640px) {
        nav-btns {
          justify-content: flex-end;
        }
      }
        nav-btns section {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: var(--font-size-3);

          position: fixed;
          top: 0;
          z-index: 100;
          margin: calc(var(--space-scaled) * 0.5) calc(var(--space-scaled) * 2);
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(1rem);
          border-radius: 100vw;
        }
          nav-btns section div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: var(--font-size-5);
            cursor: pointer;
          }
            nav-btns section div.search small { 
              border: 1px solid #6666;
              padding: 0.5rem 1rem;
              border-radius: .3rem;
            }

            nav-btns section div.frameworks span { 
              display: inline-block; 
              width: 2rem; 
              height: 2rem;
              filter: grayscale(1);
            }
            nav-btns section div.frameworks span.active { 
              filter: grayscale(0);
            }
            nav-btns section div.frameworks span.vanilia { background-image: url(./assets/javascript.svg) }
            nav-btns section div.frameworks span.react { background-image: url(./assets/react.svg) }
            nav-btns section div.frameworks span.vue { background-image: url(./assets/vue.svg) }
            nav-btns section div.frameworks span.svelte { background-image: url(./assets/svelte.svg) }
    </style>

    <section>
      <div class="menu">${navIsOpen() ? 'CLOSE' : 'MENU'}</div>
      <div class="search"><small>🔎︎&nbsp;&nbsp;&nbsp;CTRL&nbsp;+&nbsp;F</small></div>
      <div class="frameworks">      
        ${framework() === 'javascript' ? '' : `
          <span class="vanilia ${framework() === 'vanilia' ? 'active' : ''}"></span>
          <span class="react ${framework() === 'react' ? 'active' : ''}"></span>
          <span class="vue ${framework() === 'vue' ? 'active' : ''}"></span>
          <span class="svelte ${framework() === 'svelte' ? 'active' : ''}"></span>
        `}
      </div>
    </section>
  `

  c.onclick = event => {
    if (event.target.classList.contains('vanilia')) framework('vanilia')
    if (event.target.classList.contains('react')) framework('react')
    if (event.target.classList.contains('vue')) framework('vue')
    if (event.target.classList.contains('svelte')) framework('svelte')
    if (event.target.classList.contains('menu')) navIsOpen(!navIsOpen())
  }
},c)