const c = 'side-effect-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>side effect</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To run a side effect, use a signal inside the callback function of &#36;(): <strong>&#36;(() => value())</strong>.</p> 
      <p>The callback will automatically re-run whenever the signal changes.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>side-effect-example.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'side-effect-example'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">  console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Count changed: &#36;{</span><span style="color:#D2A8FF">count</span><span style="color:#A5D6FF">()</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)  </span>
<span style="color:#E6EDF3">})</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Clicks: &#36;{</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>SideEffectExample.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState, useEffect } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> SideEffectExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">count</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCount</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">  useEffect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Count changed: &#36;{</span><span style="color:#E6EDF3">count</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }, [count])</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCount</span><span style="color:#E6EDF3">(count </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">count</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>SideEffectExample.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref, watchEffect } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> count</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">  watchEffect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Count changed: &#36;{</span><span style="color:#E6EDF3">count</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">value</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  })</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">count.value </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Clicks: {{ count }}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>SideEffectExample.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#E6EDF3">  &#36;</span><span style="color:#D2A8FF">effect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">&#96;Count changed: &#36;{</span><span style="color:#E6EDF3">count</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  })</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#FF7B72"> on</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">click</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Clicks: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">count</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>






</code></pre>
</code-block>
    ` : ''}
  `
},c)