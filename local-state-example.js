const c = 'local-state-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>local state</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To create reactive local state (state that is unique to each instance of a component), declare the state inside the component: <strong>&#36;(c => { let value = &#36;(value) })</strong>.</p>
      <p>Since local state is inside the component, each instance of the component maintains its own independent state.</p>
      <p>To ensure the component updates when the state changes, wrap the template inside a side effect: <strong>&#36;(() => html&#96;...&#96;)</strong>.</p>
      <p>A side effect runs when signals inside it change, which causes the template to re-render. A component behaves like a side effect, ensuring its content stays in sync with its state.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>local-state-example.js</code-file>
<code-block>
<code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'local-state-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> 'counter-btn.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code>
</code-block>

<code-file>counter-btn.js</code-file>
<code-block>
<code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'counter-btn'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#D2A8FF">  &#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#FFA657"> c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Clicks: &#36;{</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span><span style="color:#E6EDF3">)</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> counter</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>LocalStateExample.jsx</code-file>
<code-block>
<code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> LocalStateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code>
</code-block>

<code-file>CounterBtn.jsx</code-file>
<code-block>
<code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> LocalStateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">count</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCount</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCount</span><span style="color:#E6EDF3">(count </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>LocalStateExample.vue</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.vue'</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code>
</code-block>

<code-file>CounterBtn.vue</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref, computed } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> counter</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">count.value </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    Clicks: {{counter}}</span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></code>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>LocalStateExample.svelte</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.svelte'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>




</code>
</code-block>

<code-file>CounterBtn.svelte</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>




</code>
</code-block>
    ` : ''}
  `
},c)