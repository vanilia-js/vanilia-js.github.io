const c = 'animations-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>animations</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>Animations work as expected when a component is mounted, but handling them during state changes requires careful timing.</p>
      <p>If an element is currently in the DOM and we want to remove it, the animation must play first, and only after it finishes, the state should be updated.</p>
      <p>If an element is not in the DOM and we want to add it, the state must be updated first, and only then animation can be played.</p>
      <p>Since these actions must happen in sequence, we need to wait for one to complete before proceeding to the next. To achieve this, animations should be wrapped in a promise.</p>
      <p>You can use any animation technique, but I recommend using <strong>animate().finished</strong>, as it returns a promise automatically.</p> 
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>animations-example.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'animations-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { fadeIn, fadeOut } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './animations.js'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> visible </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">true</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Click &#36;{</span><span style="color:#D2A8FF">visible</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#D2A8FF">visible</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> &#96;&#x3C;p>I am visible!&#x3C;/p>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> &#96;&#96;</span><span style="color:#E6EDF3">}</span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> async</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">visible</span><span style="color:#E6EDF3">()) {</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#E6EDF3">(c.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'p'</span><span style="color:#E6EDF3">))</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> visible</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#D2A8FF">visible</span><span style="color:#E6EDF3">())</span>
<span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> visible</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#D2A8FF">visible</span><span style="color:#E6EDF3">())</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#E6EDF3">(c.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'p'</span><span style="color:#E6EDF3">))</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>

</code></pre>
</code-block>

<code-file>animations.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> node.</span><span style="color:#D2A8FF">animate</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">  [</span>
<span style="color:#E6EDF3">    { opacity: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { opacity: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ],</span>
<span style="color:#E6EDF3">  { </span>
<span style="color:#E6EDF3">    duration: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">, </span>
<span style="color:#E6EDF3">    fill: </span><span style="color:#A5D6FF">'forwards'</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">).finished</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#FF7B72"> new</span><span style="color:#79C0FF"> Promise</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">resolve</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">  node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> animation</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> node.style.opacity </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72"> ?</span><span style="color:#D2A8FF"> resolve</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">:</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3">node.style.opacity </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 0.05</span><span style="color:#E6EDF3">,</span>
<span style="color:#D2A8FF">    requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#D2A8FF">  requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">})</span>



</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>AnimationsExample.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState, useRef } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { fadeIn, fadeOut } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './animations.js'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> AnimationsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">visible</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setVisible</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> pRef</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> useRef</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleToggle</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> async</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (visible) {</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#E6EDF3">(pRef.current)</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> setVisible</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> setVisible</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">true</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">      await</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#E6EDF3">(pRef.current)</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleToggle</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>toggle&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">visible </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#79C0FF"> ref</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">pRef</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>I am visible&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></pre>
</code-block>

<code-file>animations.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> node.</span><span style="color:#D2A8FF">animate</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">  [</span>
<span style="color:#E6EDF3">    { opacity: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { opacity: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ],</span>
<span style="color:#E6EDF3">  { </span>
<span style="color:#E6EDF3">    duration: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">, </span>
<span style="color:#E6EDF3">    fill: </span><span style="color:#A5D6FF">'forwards'</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">).finished</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#FF7B72"> new</span><span style="color:#79C0FF"> Promise</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">resolve</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">  node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> animation</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> node.style.opacity </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72"> ?</span><span style="color:#D2A8FF"> resolve</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">:</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3">node.style.opacity </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 0.05</span><span style="color:#E6EDF3">,</span>
<span style="color:#D2A8FF">    requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#D2A8FF">  requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">})</span>



</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>AnimationsExample.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { fadeOut, fadeIn } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './animations.js'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> visible</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">visible </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">visible</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>toggle&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">Transition</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">leave</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">fadeOut</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">enter</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">fadeIn</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">visible</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>I am visible&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">Transition</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>










</code></pre>
</code-block>

<code-file>animations.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> async</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">node</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">done</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  await</span><span style="color:#E6EDF3"> node.</span><span style="color:#D2A8FF">animate</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">    [</span>
<span style="color:#E6EDF3">      { opacity: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">      { opacity: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">    ],</span>
<span style="color:#E6EDF3">    { </span>
<span style="color:#E6EDF3">      duration: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">, </span>
<span style="color:#E6EDF3">      fill: </span><span style="color:#A5D6FF">'forwards'</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  ).finished</span>
<span style="color:#D2A8FF">  done</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">}</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">node</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">done</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">  node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> 0</span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> animation</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> node.style.opacity </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> 1</span><span style="color:#FF7B72"> ?</span><span style="color:#D2A8FF"> done</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">:</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    node.style.opacity </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> +</span><span style="color:#E6EDF3">node.style.opacity </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 0.05</span><span style="color:#E6EDF3">,</span>
<span style="color:#D2A8FF">    requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#D2A8FF">  requestAnimationFrame</span><span style="color:#E6EDF3">(animation)</span>
<span style="color:#E6EDF3">}</span>
</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>AnimationsExample.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { fadeOut, fadeIn } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './animations.js'</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> visible </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> visible </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">visible</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>toggle&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">{#</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3"> visible}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> out</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">fadeOut</span><span style="color:#FF7B72"> in</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">fadeIn</span><span style="color:#E6EDF3">>I am visible&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{/</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3">}</span>












</code></pre>
</code-block>

<code-file>animations.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { linear } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'svelte/easing'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeOut</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> ({</span>
<span style="color:#E6EDF3">  duration: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">,</span>
<span style="color:#D2A8FF">  css</span><span style="color:#E6EDF3">: </span><span style="color:#FFA657">t</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;opacity: &#36;{</span><span style="color:#E6EDF3">t</span><span style="color:#A5D6FF">}&#96;</span><span style="color:#E6EDF3">,</span>
<span style="color:#D2A8FF">  tick</span><span style="color:#E6EDF3">: (</span><span style="color:#FFA657">t</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">u</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> t </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> node.</span><span style="color:#D2A8FF">animate</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">    [</span>
<span style="color:#E6EDF3">      { opacity: </span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">      { opacity: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">    ],</span>
<span style="color:#E6EDF3">    { </span>
<span style="color:#E6EDF3">      duration: </span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">, </span>
<span style="color:#E6EDF3">      fill: </span><span style="color:#A5D6FF">'forwards'</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">})</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fadeIn</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> node</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> ({</span>
<span style="color:#E6EDF3">  delay: </span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">,</span>
<span style="color:#E6EDF3">  duration:</span><span style="color:#79C0FF">600</span><span style="color:#E6EDF3">,</span>
<span style="color:#E6EDF3">  easing: linear,</span>
<span style="color:#D2A8FF">  css</span><span style="color:#E6EDF3">: </span><span style="color:#FFA657">t</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;opacity: &#36;{</span><span style="color:#E6EDF3">t</span><span style="color:#A5D6FF">}&#96;</span>
<span style="color:#E6EDF3">})</span></code></pre>
</code-block>
    ` : ''}
  `
},c)