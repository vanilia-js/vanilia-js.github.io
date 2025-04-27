const c = 'conditionals-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>conditionals</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To display content conditionally within the template, use expressions with comparison or logical operators.</p>
      <p>For example to conditionally render different HTML you can write an expression like <strong>&#36;{value() === true ? '&lt;p&gt;true&lt;/p&gt;' : '&lt;p&gt;false&lt;/p&gt;'}</strong></p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>conditionals-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'conditionals-example'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> color</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'orange'</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#36;{color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> &#96;&#x3C;p>Red&#x3C;/p>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#36;{color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> &#96;&#x3C;p>Green&#x3C;/p>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#36;{color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> &#96;&#x3C;p>Blue&#x3C;/p>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">(color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">?</span><span style="color:#E6EDF3"> </span>
<span style="color:#A5D6FF">      &#96;&#x3C;p>Another color&#x3C;/p>&#96;</span>
<span style="color:#FF7B72">    :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>

<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>&#36;{ </span>
<span style="color:#E6EDF3">      color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'cyan'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Cyan'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">      color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'magenta'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Magenta'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">      color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'yellow'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Yellow'</span><span style="color:#FF7B72"> :</span>
<span style="color:#A5D6FF">      'Maybe orange'</span>
<span style="color:#E6EDF3">    }&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>ConditionalsExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> ConditionalsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> color</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'orange'</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#FF7B72">      {!</span><span style="color:#E6EDF3">(color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#FF7B72"> ||</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Another color&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      )</span><span style="color:#FF7B72">}</span>

<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">        color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'cyan'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Cyan'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">        color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'magenta'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Magenta'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">        color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'yellow'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Yellow'</span><span style="color:#FF7B72"> :</span>
<span style="color:#A5D6FF">        'Maybe orange'</span>
<span style="color:#FF7B72">      }</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>
</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>ConditionalsExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> color</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'orange'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-else-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-else-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-else</span><span style="color:#E6EDF3">>Another color&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>{{ </span>
<span style="color:#E6EDF3">    color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'cyan'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Cyan'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">    color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'magenta'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Magenta'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">    color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'yellow'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Yellow'</span><span style="color:#FF7B72"> :</span>
<span style="color:#A5D6FF">    'Maybe orange'</span>
<span style="color:#E6EDF3">  }}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>




</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>ConditionalsExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> color</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'orange'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">{#</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "red"</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{:</span><span style="color:#FF7B72">else if</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "green"</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{:</span><span style="color:#FF7B72">else if</span><span style="color:#E6EDF3"> color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> "blue"</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{:</span><span style="color:#FF7B72">else</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Another color&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{/</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3">}</span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span>
<span style="color:#E6EDF3">  color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'cyan'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Cyan'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">  color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'magenta'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Magenta'</span><span style="color:#FF7B72"> :</span>
<span style="color:#E6EDF3">  color </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'yellow'</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'Yellow'</span><span style="color:#FF7B72"> :</span>
<span style="color:#A5D6FF">  'Maybe orange'</span>
<span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>

</code></code-block>
    ` : ''}    
  `
},c)
