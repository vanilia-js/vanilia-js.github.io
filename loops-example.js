const c = 'loops-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>loops</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To loop over an array within the template, use the <strong>map()</strong> function, and for each item, return a template literal: <strong>&#36;{items.map(item => &#96;&lt;li&gt;&#36;{item}&lt;/li&gt;&#96;)}</strong>.</p> 
      <p><strong>map()</strong> returns a new array, so to remove unwanted commas use <strong>join('')</strong>.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>loops-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'loops-example'</span>

<span style="color:#D2A8FF">$</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ]</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#36;{colorsRGB.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">color</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;</span>
<span style="color:#A5D6FF">        &#x3C;li data-key="&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}">&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}&#x3C;/li></span>
<span style="color:#A5D6FF">      &#96;</span><span style="">).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#E6EDF3">      &#36;{colorsCMY.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(({ </span><span style="color:#FFA657">colour</span><span style="color:#E6EDF3"> }) </span><span style="color:#FF7B72">=></span><span style="color:#A5D6FF"> &#96;</span>
<span style="color:#A5D6FF">        &#x3C;li data-key="&#36;{</span><span style="color:#E6EDF3">colour</span><span style="color:#A5D6FF">}">&#36;{</span><span style="color:#E6EDF3">colour</span><span style="color:#A5D6FF">}&#x3C;/li></span>
<span style="color:#A5D6FF">      &#96;</span><span style="">).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>LoopsExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> LoopsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ]</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">colorsRGB.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">color</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#79C0FF"> key</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">>  </span>
<span style="color:#E6EDF3">      ))</span><span style="color:#FF7B72">}</span>

<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">colorsCMY.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(({ </span><span style="color:#FFA657">colour</span><span style="color:#E6EDF3"> }) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#79C0FF"> key</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colour</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colour</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      ))</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>LoopsExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ]</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;li v-for="color in colorsRGB" :key="color">{{ color }}&#x3C;/li></span>
<span style="color:#E6EDF3">  &#x3C;li v-for="({ colour }) in colorsCMY" :key="colour">{{ colour }}&#x3C;/li></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>









</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>LoopsExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3"> }, </span>
<span style="color:#E6EDF3">    { colour: </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3"> }</span>
<span style="color:#E6EDF3">  ]</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {#</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3"> colorsRGB </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> color (color)}</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {/</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3">}</span>

<span style="color:#E6EDF3">  {#</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3"> colorsCMY </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> { colour } (colour)}</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colour</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {/</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>




</code></code-block>
    ` : ''}
  `
},c)
