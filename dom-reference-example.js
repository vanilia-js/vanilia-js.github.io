const c = 'dom-reference-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>dom reference</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To access a DOM element within the component, use <strong>c.querySelector()</strong>.</p>
      <p>Note that this query is scoped to the component, not the entire document.</p>
    </example-explanation>
    
    ${framework() === 'vanilia' ? /*html*/`
<code-file>dom-reference-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'dom-reference-example'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Log DOM Node&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> buttonRef</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'button'</span><span style="color:#E6EDF3">)</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(buttonRef)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>


</code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>DomReferenceExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useRef } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> DomReferenceExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> buttonRef</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> useRef</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(buttonRef.current)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> ref</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">buttonRef</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Log DOM Node&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>
</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>DomReferenceExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> buttonRef</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(buttonRef.value)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> ref</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"buttonRef"</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleClick</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Log DOM Node&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>DomReferenceExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> buttonRef</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleClick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(buttonRef)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">buttonRef</span><span style="color:#FF7B72">}</span><span style="color:#FF7B72"> on</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">click</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleClick</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>Log DOM Node&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>




</code></code-block>
    ` : ''}
  `
},c)