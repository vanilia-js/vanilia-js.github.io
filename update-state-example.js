const c = 'update-state-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>update state</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To update state, call the signal with a new value: <strong>signal(newValue)</strong>.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>update-state-example.js</code-file>
<code-block>
<code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'update-state-example'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Color: &#36;{</span><span style="color:#D2A8FF">color</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#D2A8FF">  color</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>UpdateStateExample.jsx</code-file>
<code-block>
<code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useEffect, useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> UpdateStateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">color</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColor</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">  useEffect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColor</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">), [])</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Hello </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>UpdateStateExample.vue</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> color</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  color.value </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'blue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Hello {{ color }}&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

</code>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>UpdateStateExample.svelte</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  color </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'blue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Color: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>





</code>
</code-block>
    ` : ''}
  `
},c)