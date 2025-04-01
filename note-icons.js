const c = 'note-icons'

$(c => {
  c.html`
    <style>
      note-icons section {
        display: flex;
        gap: var(--font-size-5);
      }
          note-icons section div {
            display: flex;
            gap: var(--font-size-5);
          }
            note-icons section div.frameworks span { 
              display: inline-block; 
              width: 2rem; 
              height: 2rem;
            }
            note-icons section div.frameworks span.vanilia { background-image: url(./assets/javascript.svg) }
            note-icons section div.frameworks span.react { background-image: url(./assets/react.svg) }
            note-icons section div.frameworks span.vue { background-image: url(./assets/vue.svg) }
            note-icons section div.frameworks span.svelte { background-image: url(./assets/svelte.svg) }
    </style>

    <h2>Examples</h2>
    <section>
      <div class="frameworks">
        <span class="vanilia"></span>
        <span class="react"></span>
        <span class="vue"></span>
        <span class="svelte"></span>
      </div>
      <div>
        <p>― Feel free to click the icon in the top-right corner to compare the example to the equivalent code written in another framework.</p>
      </div>
    </section>
  `
},c)