const c = 'template-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>template</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To render a template, use in your component definition the tagged template literal <strong>c.html&#96;&#96;</strong>.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>template-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'template-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './hello-world.js'</span>

<span style="color:#D2A8FF">$</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Component:&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">hello-world</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">hello-world</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>TemplateExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> HelloWorld </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './HelloWorld.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> TemplateExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Component:&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">HelloWorld</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>TemplateExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> HelloWorld </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './HelloWorld.vue'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Component:&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">HelloWorld</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>TemplateExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> HelloWorld </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './HelloWorld.svelte'</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">>Component:&#x3C;/</span><span style="color:#7EE787">h1</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">HelloWorld</span><span style="color:#E6EDF3"> /></span>




</code></code-block>
    ` : ''}
  `
},c)