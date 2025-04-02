const c = 'binding-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>binding</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To bind inputs in real-time, using signals inside the template is not ideal, as it causes the whole component to re-render which can lead to losing focus.</p>
      <p>Instead, you can update just the input values without triggering a full re-render, using a side effect. This way, the component only updates the necessary part, avoiding issues like focus loss.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>binding-example.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'binding-example'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> email </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> password </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#D2A8FF">  &#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'input[name="email"]'</span><span style="color:#E6EDF3">).value </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> email</span><span style="color:#E6EDF3">()</span>
<span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'output.email'</span><span style="color:#E6EDF3">).textContent </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> </span><span style="color:#A5D6FF">&#96;Hello &#36;{</span><span style="color:#D2A8FF">email</span><span style="color:#A5D6FF">() </span><span style="color:#FF7B72">||</span><span style="color:#A5D6FF"> 'anonymous'}!&#96;</span>
<span style="color:#E6EDF3">    </span>
<span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'input[name="password"]'</span><span style="color:#E6EDF3">).value </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> password</span><span style="color:#E6EDF3">()</span>
<span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'output.password'</span><span style="color:#E6EDF3">).textContent </span><span style="color:#FF7B72">= </span><span style="color:#D2A8FF">password</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">&#x26;&#x26;</span>
<span style="color:#D2A8FF">      password</span><span style="color:#E6EDF3">().</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Password must be at least 6 characters long'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span>
<span style="color:#E6EDF3">  })</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">oninput</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">name</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">value</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> e.target</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'email'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">email</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'password'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">password</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>BindingExample.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> BindingExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">email</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setEmail</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">password</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setPassword</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">email</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">        onInput</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setEmail</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">        Hello </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">email </span><span style="color:#FF7B72">||</span><span style="color:#A5D6FF"> 'anonymous'</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">!</span>
<span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">password</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">        onInput</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setPassword</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">        {</span><span style="color:#E6EDF3">password </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> password.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Password must be at least 6 characters long'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>





</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>BindingExample.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> email</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> password</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">email</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#E6EDF3">>Hello {{ email </span><span style="color:#FF7B72">||</span><span style="color:#A5D6FF"> 'anonymous'</span><span style="color:#E6EDF3"> }}!&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">password</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    {{ password </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> password.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Password must be at least 6 characters long'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3"> }}</span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>













</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>BindingExample.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> email </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> password </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">email</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"email"</span><span style="color:#E6EDF3">>Hello </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">email </span><span style="color:#FF7B72">||</span><span style="color:#A5D6FF"> 'anonymous'</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">!&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">password</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"password"</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  {</span><span style="color:#E6EDF3">password </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> password.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> &#x3C;</span><span style="color:#79C0FF"> 6</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Password must be at least 6 characters long'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>

















</code></pre>
</code-block>
    ` : ''}
  `
},c)
