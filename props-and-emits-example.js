const c = 'props-and-emits-example'

import { framework } from './nav-btns.js' 

$(c => {
  c.html`
    <h3>props and emits</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To pass data to a component via custom attributes (props), prefix the attribute with <strong>data-</strong> in the parent component and access it using <strong>c.dataset</strong> in the child component.</p>
      <p>Note that in HTML, attributes are always treated as strings. If you need to pass a more complex data structure that can't be directly converted in the child component, export the data in the child component and import it in the parent, then you can use custom attributes like <strong>data-key</strong>, <strong>data-id</strong>, or <strong>data-index</strong> to reference the specific part of the data structure you need.</p>
      <p>To modify data passed to a component, import the signal into the child component and modify it directly. Do not pass a function as an attribute value to the parent component or emit data from the child component.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>props-and-emits-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'props-and-emits-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> 'counter-btn.js'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"First Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-counter-value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{counter() * 2}"</span>
<span style="color:#E6EDF3">    >&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Second Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-counter-value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{counter() * 4}"</span>
<span style="color:#E6EDF3">    >&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Third Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      data-counter-value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{counter() * 6}"</span>
<span style="color:#E6EDF3">    >&#x3C;/</span><span style="color:#7EE787">counter-btn</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>






</code></code-block>

<code-file>counter-btn.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'counter-btn'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { counter } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'props-and-emits-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">label</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'Counter'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">counterValue</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> c.dataset</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>&#36;{label}: &#36;{counterValue}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> counter</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">counter</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>PropsAndEmitsExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> PropsAndEmitsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">counter</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCounter</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setCounter</span><span style="color:#E6EDF3">(counter </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        label</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"First Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        counterValue</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        handleClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        label</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"Second Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        counterValue</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 4</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        handleClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        label</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"Third Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        counterValue</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        handleClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>

<code-file>CounterBtn.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> CounterBtn</span><span style="color:#FFA657">({ </span>
<span style="color:#FFA657">  label </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'Counter'</span><span style="color:#FFA657">, </span>
<span style="color:#FFA657">  counterValue </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#FFA657">, </span>
<span style="color:#FFA657">  handleClick </span><span style="color:#FF7B72">=</span><span style="color:#FFA657"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {}</span><span style="color:#FFA657"> </span>
<span style="color:#FFA657">}) </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">label</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counterValue</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>




</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>PropsAndEmitsExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> counter</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter.value </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">label</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#A5D6FF">'First Counter'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    @</span><span style="color:#79C0FF">handleClick</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">  /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">label</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#A5D6FF">'Second Counter'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 4</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    @</span><span style="color:#79C0FF">handleClick</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">  /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">label</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#A5D6FF">'Third Counter'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 6</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    @</span><span style="color:#79C0FF">handleClick</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">  /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>CounterBtn.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">label</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'Counter'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">counterValue</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> defineProps</span><span style="color:#E6EDF3">([</span><span style="color:#A5D6FF">'label'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'counterValue'</span><span style="color:#E6EDF3">])</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> emit</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineEmits</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#D2A8FF">emit</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'handleClick'</span><span style="color:#E6EDF3">)</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>{{ label }}: {{ counterValue }}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>




</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>PropsAndEmitsExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> CounterBtn </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './CounterBtn.svelte'</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> counter </span><span style="color:#FF7B72">+=</span><span style="color:#79C0FF"> 1</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"First Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 2</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  {</span><span style="color:#E6EDF3">handleClick</span><span style="color:#79C0FF">}</span>
<span style="color:#E6EDF3">/></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Second Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 4</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">  {</span><span style="color:#E6EDF3">handleClick</span><span style="color:#79C0FF">}</span>
<span style="color:#E6EDF3">/></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">CounterBtn</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  label</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"Third Counter"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  counterValue</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counter </span><span style="color:#FF7B72">*</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">  {</span><span style="color:#E6EDF3">handleClick</span><span style="color:#79C0FF">}</span>
<span style="color:#E6EDF3">/></span>





</code></code-block>

<code-file>CounterBtn.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { label </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'Counter'</span><span style="color:#E6EDF3">, counterValue </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">, handleClick </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {} } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">label</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">counterValue</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>








</code></code-block>
    ` : ''}
  `
},c)