const c = 'slots-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>slots</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To pass a template to a component as a slot, retrieve the inner HTML of the component, for example, with <strong>c.innerHTML</strong>.</p>
      <p>When the content is inserted into the DOM, <strong>html&#96;&#96;</strong> sanitizes it, so <strong>innerHTML</strong> is generally safe to use here.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>slots-example.js</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'slots-example'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> 'counter-btn.js'</span></div><div class="line">
</div><div class="line"><span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span></div><div class="line"><span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">>Clicks:&#x3C;/</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#A5D6FF">  &#96;</span></div><div class="line"><span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></div></code></pre>
</code-block>

<code-file>counter-btn.js</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'counter-btn'</span></div><div class="line">
</div><div class="line"><span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span></div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> slot </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> /</span><span style="color:#FF7B72">^</span><span style="color:#A5D6FF">s</span><span style="color:#FF7B72">*&#36;</span><span style="color:#A5D6FF">/</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">test</span><span style="color:#E6EDF3">(c.innerHTML) </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Fallback content'</span><span style="color:#FF7B72"> :</span><span style="color:#E6EDF3"> c.innerHTML</span></div><div class="line">
</div><div class="line"><span style="color:#D2A8FF">  &#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></div><div class="line"><span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">>&#36;{slot}&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counterValue"</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#A5D6FF">    &#96;</span></div><div class="line"><span style="color:#E6EDF3">  })</span></div><div class="line"><span style="color:#E6EDF3">    </span></div><div class="line"><span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> counter</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></div></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>SlotsExample.jsx</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.jsx'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> SlotsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span></div><div class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">>Clicks:&#x3C;/</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  )</span></div><div class="line"><span style="color:#E6EDF3">}</span></div>

</code></pre>
</code-block>

<code-file>CounterBtn.jsx</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> CounterBtn</span><span style="color:#FFA657">({ children </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'Fallback content'</span><span style="color:#FFA657"> }) </span><span style="color:#E6EDF3">{</span></div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">counter</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCounter</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCounter</span><span style="color:#E6EDF3">(counter </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">children</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"counterValue"</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  )</span></div><div class="line"><span style="color:#E6EDF3">}</span></div>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>SlotsExample.vue</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.vue'</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">>Clicks:&#x3C;/</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div>

</code></pre>
</code-block>

<code-file>CounterBtn.vue</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> counter</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter.value </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">slot</span><span style="color:#E6EDF3">>Fallback content&#x3C;/</span><span style="color:#7EE787">slot</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counterValue"</span><span style="color:#E6EDF3">>{{ counter }}&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></div>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>SlotsExample.svelte</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.svelte'</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">>Clicks:&#x3C;/</span><span style="color:#7EE787">strong</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3">></span></div>



</code></pre>
</code-block>

<code-file>CounterBtn.svelte</code-file>
<code-block>
<pre><code><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { children } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span></div><div class="line">
</div><div class="line"><span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></div><div class="line">
</div><div class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"label"</span><span style="color:#E6EDF3">>{@</span><span style="color:#FF7B72">render</span><span style="color:#D2A8FF"> children</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"counterValue"</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span></div><div class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span></div>






</code></pre>
</code-block>
    ` : ''}
  `
},c)