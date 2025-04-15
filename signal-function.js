const c = 'signal-function'

$(c => {
  c.html`
    <style>
      signal-function > div {
        padding: var(--font-size-4) 0;
      }
    </style>

    <h3>&#x2776 signal</h3>
    <h4>If the argument is not a function, <strong>&#36;()</strong> will return a signal — a reactive function that can track changes:</h4>

    <div>
      <p>If you will not pass any argument to the signal, it will act as a getter:</p>
    </div>

<code-block tabindex="0"><code><div class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">)                </span><span style="color:#8B949E">// create signal count() with value of 1</span>
<span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()                         </span><span style="color:#8B949E">// get 1</span></div></code></code-block>
    
    <div>
      <p>If you will pass argument to signal it will act as a setter:</p>
    </div>

<code-block tabindex="0"><code><div class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">)                </span><span style="color:#8B949E">// create signal count() with value of 1</span>
<span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">2</span><span style="color:#E6EDF3">)                        </span><span style="color:#8B949E">// set count() to 2</span>
<span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()                         </span><span style="color:#8B949E">// get 2</span></div></code></code-block>

    <div>
      <p>You can also combine getters and setters for example to modify current value of signal:</p>
    </div>

<code-block tabindex="0"><code><div class="line"><span style="color:#FF7B72">let</span><span style="color:#E6EDF3"> count </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">1</span><span style="color:#E6EDF3">)                </span><span style="color:#8B949E">// create signal count() with value of 1</span>
<span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">+</span><span style="color:#79C0FF"> 1</span><span style="color:#E6EDF3">)              </span><span style="color:#8B949E">// set count() to 2: current value plus 1</span>
<span style="color:#D2A8FF">count</span><span style="color:#E6EDF3">()                         </span><span style="color:#8B949E">// get 2</span></div></code></code-block>

    <div>
      <p>Take a look at how it works under the hood:</p>
    </div>

<code-block tabindex="0"><code><span class="line-hidden"><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">value</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">tag</span><span style="color:#FF7B72"> =</span><span style="color:#79C0FF"> undefined</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">effects</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> new</span><span style="color:#D2A8FF"> Set</span><span style="color:#E6EDF3">(), </span><span style="color:#FFA657">range</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> document.</span><span style="color:#D2A8FF">createRange</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">  let</span><span style="color:#D2A8FF"> reload</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">strs</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">vals</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> ctx.</span><span style="color:#D2A8FF">replaceChildren</span><span style="color:#E6EDF3">(range.</span><span style="color:#D2A8FF">createContextualFragment</span><span style="color:#E6EDF3">(</span>
<span style="color:#E6EDF3">        strs.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">str</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">i</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> str </span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3"> (vals[i] </span><span style="color:#FF7B72">??</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">)).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">      )),</span>
<span style="color:#D2A8FF">      remove</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">delete</span><span style="color:#E6EDF3">(&#36;)),</span>
<span style="color:#D2A8FF">      render</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">ctx</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span><span style="color:#D2A8FF">&#36;</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx), remove </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> value</span><span style="color:#E6EDF3">(ctx) </span><span style="color:#FF7B72">||</span><span style="color:#E6EDF3"> remove, &#36; </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> null</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  typeof</span><span style="color:#E6EDF3"> value </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'function'</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">tag </span><span style="color:#FF7B72">?</span>
<span style="color:#E6EDF3">    (</span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(), </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">()) </span><span style="color:#FF7B72">:</span><span style="color:#E6EDF3">    (</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">customElements.</span><span style="color:#D2A8FF">get</span><span style="color:#E6EDF3">(tag) </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> customElements.</span><span style="color:#D2A8FF">define</span><span style="color:#E6EDF3">(tag, </span><span style="color:#FF7B72">class</span><span style="color:#FF7B72"> extends</span><span style="color:#79C0FF"> HTMLElement</span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">      connectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">render</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#D2A8FF">      disconnectedCallback</span><span style="color:#E6EDF3">() { </span><span style="color:#D2A8FF">remove</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">) }</span>
<span style="color:#D2A8FF">      html</span><span style="color:#E6EDF3">(strs, ...vals) { </span><span style="color:#D2A8FF">reload</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">, strs, vals) }</span>
<span style="color:#E6EDF3">    })))</span><span style="color:#E6EDF3"></span></span>

<span style="color:#8B949E">  // check if value is defined</span>
<span style="color:#FF7B72">  return</span><span style="color:#FFA657"> newValue</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> newValue </span><span style="color:#FF7B72">===</span><span style="color:#79C0FF"> undefined</span><span style="color:#FF7B72"> ?</span>
<span style="color:#8B949E">    // if value is undefined add side-effect and return current value</span>
<span style="color:#E6EDF3">    (&#36; </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">add</span><span style="color:#E6EDF3">(&#36;), value) </span><span style="color:#FF7B72">:</span>
<span style="color:#8B949E">    // if value is defined run side-effects in queue and return new value as current value</span>
<span style="color:#E6EDF3">    (</span><span style="color:#D2A8FF">queueMicrotask</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> effects.</span><span style="color:#D2A8FF">forEach</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">&#36;</span><span style="color:#FF7B72"> =></span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">())), value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> newValue)</span>
<span class="line-hidden"><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">window[</span><span style="color:#A5D6FF">'&#36;'</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span></span></code></code-block>
  `
},c)