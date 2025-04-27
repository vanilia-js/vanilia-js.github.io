const c = 'reactive-component'

$(c => {
  c.html`
    <style>
      reactive-component > div {
        padding: var(--font-size-4) 0;
      }
    </style>

    <h3>&#x2778 component</h3>
    <h4>If the argument is a function and the second argument is a valid tag name, <strong>&#36;(component => {}, name)</strong> will create a reactive component:</h4>
    
    <div>    
      <p>The argument <strong>component</strong> is (un)surprisingly a component itself, an instance of a class that extends HTMLElement.</p>
      <p>Unlike in some other frameworks, the component is not a synthetic element that will be replaced in the DOM structure. <strong>It is real</strong>.</p>
      <p>If, for some reason, you are unfamiliar with custom elements, please read this first: <span class="underline"><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements">Using custom elements</a></span></p>
      <br>
      <p>A component must have a valid <strong>name</strong> (lowercase, at least one hyphen, no spaces, etc.).</p>
      <p>If the component name is, for example, <strong>'sample-counter'</strong>, then the tag will be <strong>&lt;sample-counter&gt;&lt;/sample-counter&gt;</strong>.</p>
      <p>I strongly advise using both the opening <strong>and closing</strong> tags.</p>
    </div>
        
    <div>    
      <p>You can either do whatever works best for your case or stick to some recommended practices:</p>
      <ul>
        <li>― &nbsp; Create one component per file and name the file exactly like the component</li>
        <li>― &nbsp; Keep the component name at the very top of the file, before imports and exports</li>
        <li>― &nbsp; Shorten the argument 'event' to 'e' and the argument 'component' to 'c' as we will use them often</li>
      </ul>
    </div>

<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'sample-counter'</span><span style="color:#8B949E">      // define component name</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {                        </span><span style="color:#8B949E">// get component as argument</span>
<span style="color:#E6EDF3">  console.</span><span style="color:#D2A8FF">log</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#E6EDF3">)                </span><span style="color:#8B949E">// log this component</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>                            <span style="color:#8B949E">// pass name required to create component</span></code></code-block>

    <div>
      <p>The component has an additional method (tagged template literal) <strong>html&#96;&#96;</strong> that you can use to create a template (ContextualFragment):</p>
    </div>

<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'sample-counter'</span><span style="color:#8B949E">      // define component name</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">)                </span><span style="color:#8B949E">// create signal count() with value of 1</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {                        </span><span style="color:#8B949E">// get component as argument</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#A5D6FF">&#96;</span><span style="color:#8B949E">     // create paragraph and display value of count() inside it</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

    <div>
      <p>Take a look at how it works under the hood:</p>
    </div>

<code-block tabindex="0"><code><span class="line-hidden"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">value</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">tag</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">effects</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Set</span><span style="color:#E6EDF3">(), </span><span style="color:#FFA657">range</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">createRange</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span></span>
<span style="color:#8B949E">      // create template for component using tagged template literal</span>
<span style="color:#FF7B72">  let</span><span style="color:#D2A8FF"> reload</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">strs</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">vals</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> ctx.</span><span style="color:#D2A8FF">replaceChildren</span><span style="color:#E6EDF3">(range.</span><span style="color:#D2A8FF">createContextualFragment</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">        strs.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">str</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">i</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> str </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> (vals[i] </span><span style="color:#FF7B72">??</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">)).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">      )),</span>
<span class="line-hidden"><span style="color:#D2A8FF">      remove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">delete</span><span style="color:#E6EDF3">(&#36;)),</span>
<span style="color:#D2A8FF">      render</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">&#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx), remove </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx) </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> remove, &#36; </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  typeof</span><span style="color:#E6EDF3"> value </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'function'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">tag </span><span style="color:#FF7B72">?</span>
<span style="color:#E6EDF3">    (</span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(), </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">:</span></span>
<span style="color:#8B949E">    // if value is function and tag name is defined, wrap side-effect in custom element</span>
<span style="color:#E6EDF3">    (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">customElements.</span><span style="color:#D2A8FF">get</span><span style="color:#E6EDF3">(tag) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> customElements.</span><span style="color:#D2A8FF">define</span><span style="color:#E6EDF3">(tag, </span><span style="color:#FF7B72">class</span><span style="color:#FF7B72"> extends</span><span style="color:#79C0FF"> HTMLElement</span><span style="color:#E6EDF3"> {</span>
<span style="color:#8B949E">      // run render() when component is mounted</span>
<span style="color:#D2A8FF">      connectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#8B949E">      // run remove() when component is unmounted </span>
<span style="color:#D2A8FF">      disconnectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#8B949E">      // add custom method html that will prevent XSS attacks</span>
<span style="color:#D2A8FF">      html</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">strs</span><span style="color:#E6EDF3">, </span><span style="color:#FF7B72">...</span><span style="color:#FFA657">vals</span><span style="color:#E6EDF3">) { </span><span style="color:#D2A8FF">reload</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">, strs, vals) }</span>
<span style="color:#E6EDF3">    })))</span>

<span class="line-hidden"><span style="color:#FF7B72">  return</span><span style="color:#FFA657"> newValue</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> newValue </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> undefined</span><span style="color:#FF7B72"> ?</span>
<span style="color:#E6EDF3">    (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(&#36;), value) </span><span style="color:#FF7B72">:</span>
<span style="color:#E6EDF3">    (</span><span style="color:#D2A8FF">queueMicrotask</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">&#36;</span><span style="color:#FF7B72"> =></span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">())), value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> newValue)</span>
<span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">window[</span><span style="color:#A5D6FF">'&#36;'</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span></span></code></code-block>
  `
},c)
