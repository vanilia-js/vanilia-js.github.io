const c = 'installation-guide'

$(c => {
  c.html`
    <style>
      installation-guide > div {
        padding: var(--font-size-4) 0;
      }
    </style>

    <h3>installation</h3>

    <div>
      <p>To get started, forget about npm. Just create a file <strong>index.html</strong> and write the following code:</p>
    </div>

<code-file>index.html</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>0&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#8B949E">  // kinda like reactive framework but one-liner:</span>
<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">effects</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Set</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">=></span><span style="color:#FFA657"> newValue</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> newValue </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> undefined</span><span style="color:#FF7B72"> ?</span><span style="color:#E6EDF3"> (effects.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(&#36;), value) </span><span style="color:#FF7B72">:</span><span style="color:#E6EDF3"> (effects.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">&#36;</span><span style="color:#FF7B72"> =></span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">()), value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> newValue)</span>

<span style="color:#8B949E">  // usage:</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  document.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'button'</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">addEventListener</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'click'</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> e.target.textContent </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">))</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></code>
</code-block>

    <div>
      <p>If you need a live preview, you may need to install a plugin for your editor. Look for "development local server" or if you use VSCode, you can try this one: <span class="underline"><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a></span>.</p>
      <br>
      <p>Click the button several times to confirm that it is reactive. This is the core concept—a minimal implementation of reactivity that we will use.</p>
      <br>
      <p>That was a little experiment. Now, replace <strong>index.html</strong> with the following code:</p>
      <mark id="code"></mark>
    </div>

<code-file>index.html</code-file>
<code-block>
<code><span style="color:#E6EDF3">&#x3C;!</span><span style="color:#7EE787">DOCTYPE</span><span style="color:#79C0FF"> html</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">html</span><span style="color:#79C0FF"> lang</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"en"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"module"</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">    export</span><span style="color:#FF7B72"> let</span><span style="color:#D2A8FF"> $</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">value</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">tag</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">effects</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Set</span><span style="color:#E6EDF3">(), </span><span style="color:#FFA657">range</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">createRange</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      let</span><span style="color:#D2A8FF"> reload</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">strs</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">vals</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> ctx.</span><span style="color:#D2A8FF">replaceChildren</span><span style="color:#E6EDF3">(range.</span><span style="color:#D2A8FF">createContextualFragment</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">            strs.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">str</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">i</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> str </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> (vals[i] </span><span style="color:#FF7B72">??</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">)).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">          )),</span>
<span style="color:#D2A8FF">          remove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">delete</span><span style="color:#E6EDF3">(&#36;)),</span>
<span style="color:#D2A8FF">          render</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">&#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx), remove </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx) </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> remove, &#36; </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">      typeof</span><span style="color:#E6EDF3"> value </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'function'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">tag </span><span style="color:#FF7B72">?</span>
<span style="color:#E6EDF3">        (</span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(), </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">:</span>
<span style="color:#E6EDF3">        (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">customElements.</span><span style="color:#D2A8FF">get</span><span style="color:#E6EDF3">(tag) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> customElements.</span><span style="color:#D2A8FF">define</span><span style="color:#E6EDF3">(tag, </span><span style="color:#FF7B72">class</span><span style="color:#FF7B72"> extends</span><span style="color:#79C0FF"> HTMLElement</span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">          connectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#D2A8FF">          disconnectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#D2A8FF">          html</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">strs</span><span style="color:#E6EDF3">, </span><span style="color:#FF7B72">...</span><span style="color:#FFA657">vals</span><span style="color:#E6EDF3">) { </span><span style="color:#D2A8FF">reload</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">, strs, vals) }</span>
<span style="color:#E6EDF3">        })))</span>
<span style="color:#E6EDF3">        </span>
<span style="color:#FF7B72">      return</span><span style="color:#FFA657"> newValue</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> newValue </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> undefined</span><span style="color:#FF7B72"> ?</span>
<span style="color:#E6EDF3">        (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(&#36;), value) </span><span style="color:#FF7B72">:</span>
<span style="color:#E6EDF3">        (</span><span style="color:#D2A8FF">queueMicrotask</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">&#36;</span><span style="color:#FF7B72"> =></span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">())), value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> newValue)</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">    window[</span><span style="color:#A5D6FF">'&#36;'</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"module"</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./sample-counter.js"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">head</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">sample-counter</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">sample-counter</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">body</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">html</span><span style="color:#E6EDF3">></span></code>
</code-block>

    <div>    
      <p>At the bottom we import component <strong>&lt;sample-counter&gt;</strong> that do not exists yet: <strong>&lt;script type="module" src="./sample-counter"&gt;</strong></p>
      <br>
      <p>In the same folder create file <strong>sample-counter.js</strong> and write this code:</p>
    </div>

<code-file>sample-counter.js</code-file>
<code-block>
<code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'sample-counter'</span>

<span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"decrement"</span><span style="color:#E6EDF3">>-&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"increment"</span><span style="color:#E6EDF3">>+&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'decrement'</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#D2A8FF"> count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">-</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">    e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'increment'</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#D2A8FF"> count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code>
</code-block>

    <div>
      <p>If your HTML is not highlighted, you may need to install a plugin for your editor. Look for "tagged template literals" or if you use VSCode, you can try this one: <span class="underline"><a href="https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html">es6-string-html</a></span>.</p>
      <br>
      <p>Click the buttons several times to confirm that it is reactive. I will do my best to explain how it works—it’s not that hard.</p>
      <br>
      <p><strong>$()</strong> is the only thing you need to learn. Everything else is <strong>pure JavaScript without any idiosyncrasies</strong> — no fancy syntax, no custom attributes, no synthetic stuff. You ain't gonna need it, so keep it simple.</p>
      <p><strong>$()</strong> is a function that behaves differently depending on its argument. There are three cases:</p>
    </div>
  `
},c)
