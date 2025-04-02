const c = 'mount-and-unmount-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>mount and unmount</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>A component is <strong>mounted</strong> when it is added to the DOM. At this point, its setup logic runs, such as initializing its state or rendering its template.</p>
      <p>A component is <strong>unmounted</strong> when it is removed from the DOM. The component can return a function that runs on unmount, which is useful for cleaning up resources like event listeners or intervals to prevent memory leaks.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>mount-and-unmount-example.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'mount-and-unmount-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './local-time.js'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> show </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">show</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Hide'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Show'</span><span style="color:#E6EDF3">}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#D2A8FF">show</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> &#96;&#x3C;local-time>&#x3C;/local-time>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> show</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#D2A8FF">show</span><span style="color:#E6EDF3">())</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></pre>
</code-block>

<code-file>local-time.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'local-time'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> time </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">())</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> timer </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> time</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">time</span><span style="color:#E6EDF3">()), </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">)</span>

<span style="color:#E6EDF3">  console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Local time: '</span><span style="color:#E6EDF3">, </span><span style="color:#D2A8FF">time</span><span style="color:#E6EDF3">())</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">time</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#A5D6FF">&#96;</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> clearInterval</span><span style="color:#E6EDF3">(timer)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>




</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>MountAndUnmountExample.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> LocalTime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './LocalTime.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> MountAndUnmountExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">show</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setShow</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setShow</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">show)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">show </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Hide'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Show'</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">show </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">LocalTime</span><span style="color:#E6EDF3"> /></span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>

</code></pre>
</code-block>

<code-file>LocalTime.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState, useEffect } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> LocalTime</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">time</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setTime</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">())</span>

<span style="color:#D2A8FF">  useEffect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> timer</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      const</span><span style="color:#79C0FF"> localTime</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">      setTime</span><span style="color:#E6EDF3">(localTime)</span>
<span style="color:#E6EDF3">      console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Local time: '</span><span style="color:#E6EDF3">, localTime)</span>
<span style="color:#E6EDF3">    }, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">    return</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> clearInterval</span><span style="color:#E6EDF3">(timer)</span>
<span style="color:#E6EDF3">  }, [])</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">time</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">}</span></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>MountAndUnmountExample.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> LocalTime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './LocalTime.vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> show</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">show </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">show</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>{{ show </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Hide'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Show'</span><span style="color:#E6EDF3"> }}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">LocalTime</span><span style="color:#FF7B72"> v-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">show</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>



</code></pre>
</code-block>

<code-file>LocalTime.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref, onUnmounted } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> time</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">())</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> timer</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    time.value </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">    console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Local time: '</span><span style="color:#E6EDF3">, time.value)</span>
<span style="color:#E6EDF3">  }, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">  onUnmounted</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> clearInterval</span><span style="color:#E6EDF3">(timer))</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>{{ time }}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>MountAndUnmountExample.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> LocalTime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './LocalTime.svelte'</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> show </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> false</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#FF7B72"> on</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">click</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> show </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">show</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">show </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Hide'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Show'</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">{#</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3"> show}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">LocalTime</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">{/</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3">}</span>



</code></pre>
</code-block>

<code-file>LocalTime.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> time </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">())</span>

<span style="color:#E6EDF3">  &#36;</span><span style="color:#D2A8FF">effect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> timer</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> setInterval</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">      time </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toLocaleTimeString</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">      console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Local time: '</span><span style="color:#E6EDF3">, time)</span>
<span style="color:#E6EDF3">    }, </span><span style="color:#79C0FF">1000</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">    return</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> clearInterval</span><span style="color:#E6EDF3">(timer)</span>
<span style="color:#E6EDF3">  })</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">time</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>



</code></pre>
</code-block>
    ` : ''}
  `
},c)