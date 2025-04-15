const c = 'shared-state-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>shared state</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To create reactive shared state (state that remains the same for each instance of a component), declare the state outside the component: <strong>let value = &#36;(value)</strong>.</p>
      <p>Since shared state is outside the component, each instance of the component maintains the same state.</p>
      <p>You can export a signal from one component and import it into multiple others while keeping it reactive.</p>
      <p>Whenever the state changes, all side effects that use it will re-run, and all components that depend on it will re-render automatically.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>shared-state-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'shared-state-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> 'counter-btn.js'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>








</code></code-block>

<code-file>counter-btn.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'counter-btn'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { counter } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'shared-state-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Clicks: &#36;{</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> counter</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>

</code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>SharedStateExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { createContext, useContext, useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> SharedContext</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> createContext</span><span style="color:#E6EDF3">()</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> SharedStateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">counter</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCounter</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> shared</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    counter,</span>
<span style="color:#E6EDF3">    setCounter</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">SharedContext.Provider</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">shared</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">SharedContext.Provider</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>

<code-file>CounterBtn.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useContext } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { SharedContext } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './SharedStateExample.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> CounterBtn</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">counter</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCounter</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useContext</span><span style="color:#E6EDF3">(SharedContext)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCounter</span><span style="color:#E6EDF3">(counter </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>shared.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { reactive } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> shared</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> reactive</span><span style="color:#E6EDF3">({</span>
<span style="color:#E6EDF3">  counter: </span><span style="color:#79C0FF">0</span>
<span style="color:#E6EDF3">})</span></code></code-block>

<code-file>SharedStateExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.vue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>



<code-file>CounterBtn.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { shared } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './shared.js'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">shared.counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Clicks: {{shared.counter}}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>





</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>shared.svelte.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> shared</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;state</span><span style="color:#E6EDF3">({</span>
<span style="color:#E6EDF3">  counter: </span><span style="color:#79C0FF">0</span>
<span style="color:#E6EDF3">})</span>


</code></code-block>

<code-file>SharedStateExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.svelte'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> /></span>




</code></code-block>

<code-file>CounterBtn.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { shared } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './shared.svelte.js'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> shared.counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">shared.counter</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>







</code></code-block>
    ` : ''}
  `
},c)