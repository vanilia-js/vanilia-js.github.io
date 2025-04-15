const c = 'events-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>events</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To handle events, add an event listener to the component using either <strong>c.onclick = () => {}</strong> or if you prefer <strong>c.addEventListener('click', () => {})</strong>.</p>
      <p>You can always pass arguments to the handler: <strong>c.onclick = event => handleClick(event.target, value())</strong>.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>events-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'events-example'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#79C0FF">      .mouse-tracker</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">        width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">        height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">        background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orangered</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">      }</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  </span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Click!&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"mouse-tracker"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (e.target.tagName </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'BUTTON'</span><span style="color:#E6EDF3">) {</span>
<span style="color:#D2A8FF">      alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Clicked!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onmousemove</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'mouse-tracker'</span><span style="color:#E6EDF3">)) {</span>
<span style="color:#E6EDF3">      console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Mouse position: X=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientX</span><span style="color:#A5D6FF">}, Y=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientY</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>EventsExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> EventsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Clicked!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleMouseMove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Mouse position: X=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientX</span><span style="color:#A5D6FF">}, Y=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientY</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Click!&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"mouse-tracker"</span><span style="color:#79C0FF"> onMouseMove</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleMouseMove</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">        style</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">{</span>
<span style="color:#E6EDF3">          width: </span><span style="color:#A5D6FF">'100px'</span><span style="color:#E6EDF3">,</span>
<span style="color:#E6EDF3">          height: </span><span style="color:#A5D6FF">'100px'</span><span style="color:#E6EDF3">,</span>
<span style="color:#E6EDF3">          backgroundColor: </span><span style="color:#A5D6FF">'orangered'</span>
<span style="color:#E6EDF3">        }</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      >&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>






</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>EventsExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Clicked!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleMouseMove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Mouse position: X=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientX</span><span style="color:#A5D6FF">}, Y=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientY</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Click!&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"mouse-tracker"</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">mousemove</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleMouseMove</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">style</span><span style="color:#79C0FF"> scoped</span><span style="color:#E6EDF3">></span>
<span style="color:#79C0FF">  .mouse-tracker</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">    background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orangered</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>






</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>EventsExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Clicked!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleMouseMove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Mouse position: X=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientX</span><span style="color:#A5D6FF">}, Y=&#36;{</span><span style="color:#E6EDF3">e</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">clientY</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Click!&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">div</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"mouse-tracker"</span><span style="color:#79C0FF"> onmousemove</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleMouseMove</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#79C0FF">  .mouse-tracker</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    width</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">    height</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">100</span><span style="color:#FF7B72">px</span><span style="color:#E6EDF3">;</span>
<span style="color:#79C0FF">    background-color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orangered</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>








</code></code-block>
    ` : ''}
  `
},c)