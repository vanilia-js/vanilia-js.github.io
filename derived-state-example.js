const c = 'derived-state-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>derived state</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To create a derived (computed) state, use a side effect by calling <strong>&#36;(() => newValue(value()))</strong>.</p>
      <p>The derived state will automatically update when the original state changes.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>derived-state-example.js</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'derived-state-example'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> doubled </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line">
</div><div class="line"><span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> doubled</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#E6EDF3">))</span></div><div class="line">
</div><div class="line"><span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span></div><div class="line"><span style="color:#D2A8FF">  c.html</span><span style="color:#E6EDF3">&#96;</span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"doubled"</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">doubled</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()} doubled is &#36;{</span><span style="color:#D2A8FF">doubled</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#A5D6FF">  &#96;</span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">  c.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span></div><div class="line"><span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'doubled'</span><span style="color:#E6EDF3">)) </span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#E6EDF3">  }</span></div><div class="line"><span style="color:#E6EDF3">},c)</span></div></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>DerivedStateExample.jsx</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> DerivedStateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span></div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">count</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCount</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> doubled</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCount</span><span style="color:#E6EDF3">(count </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">doubled</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">count</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> doubled is </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">doubled</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;/></span></div><div class="line"><span style="color:#E6EDF3">  )</span></div><div class="line"><span style="color:#E6EDF3">}</span></div>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>DerivedStateExample.vue</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref, computed } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> count</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> doubled</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> computed</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> count.value </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">count.value </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>{{ count }} doubled is {{ doubled }}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div>





</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>DerivedStateExample.svelte</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> doubled </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">derived</span><span style="color:#E6EDF3">(count </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> count</span><span style="color:#FF7B72">++}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">doubled</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">count</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> doubled is </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">doubled</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span></div>









</code></pre>
</code-block>
    ` : ''}
  `
},c)
