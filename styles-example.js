const c = 'styles-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>styles</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To style template, use the <strong>&lt;style&gt;</strong> tag within the <strong>c.html&#96;&#96;</strong> template literal or apply inline styles when needed.</p>
      <p>If you want to scope styles specifically to the component, prefix them with the component's name to avoid possible conflicts with other components.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>styles-example.js</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'styles-example'</span>

<span style="color:#D2A8FF">$</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> activeColor</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'blue'</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#7EE787">      styles-example</span><span style="color:#79C0FF"> .title</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">        color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orange</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">      }</span>
<span style="color:#7EE787">      styles-example</span><span style="color:#79C0FF"> .active</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">        font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">bold</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">      }</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"title"</span><span style="color:#E6EDF3">>I have class&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> style</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"font-size: 3rem;"</span><span style="color:#E6EDF3">>I have style&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{isActive ? 'active' : ''}"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      style</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"background-color: &#36;{activeColor}"</span>
<span style="color:#E6EDF3">    >I have dynamic class and style&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></pre>
</code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>StylesExample.jsx</code-file>
<code-block>
<pre><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> StylesExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> activeColor</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'blue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> styles</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    title: {</span>
<span style="color:#E6EDF3">      color: </span><span style="color:#A5D6FF">'orange'</span>
<span style="color:#E6EDF3">    },</span>
<span style="color:#E6EDF3">    active: {</span>
<span style="color:#E6EDF3">      fontWeight: </span><span style="color:#A5D6FF">'bold'</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"title"</span><span style="color:#79C0FF"> style</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3"> styles.title </span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>I have class&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> style</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">{ fontSize: </span><span style="color:#A5D6FF">"3rem"</span><span style="color:#E6EDF3"> }</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>I have style&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        className</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">isActive </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'active'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        style</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">{ backgroundColor: activeColor }</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      >I have dynamic class and style&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>
</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>StylesExample.vue</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> activeColor</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'blue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"title"</span><span style="color:#E6EDF3">>I have class&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> style</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#79C0FF">font-size</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">3</span><span style="color:#FF7B72">rem</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>I have style&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">div</span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">class</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">{ </span><span style="color:#FFA657">active</span><span style="color:#E6EDF3">: isActive }</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">    :</span><span style="color:#79C0FF">style</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">{ </span><span style="color:#FFA657">backgroundColor</span><span style="color:#E6EDF3">: activeColor }</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">  >I have dynamic class and style&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#79C0FF">  .title</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orange</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#79C0FF">  .active</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">bold</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>


</code></pre>
</code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>StylesExample.svelte</code-file>
<code-block>
<pre><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> isActive </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> activeColor </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> 'blue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"title"</span><span style="color:#E6EDF3">>I have class&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> style</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"font-size: 3rem;"</span><span style="color:#E6EDF3">>I have style&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">div</span>
<span style="color:#79C0FF">  class</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">active</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">  styles</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">background-color</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">activeColor</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">>I have dynamic class and style&#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>
<span style="color:#79C0FF">  .title</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    color</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">orange</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#79C0FF">  .active</span><span style="color:#E6EDF3"> {</span>
<span style="color:#79C0FF">    font-weight</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">bold</span><span style="color:#E6EDF3">;</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">style</span><span style="color:#E6EDF3">></span>




</code></pre>
</code-block>
    ` : ''}
  `
},c)