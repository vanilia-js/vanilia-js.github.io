const c = 'fetch-data-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>fetch data</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To fetch data, you can use top-level await: <strong>await fetchData(url)</strong>.</p>
      <p>Place <strong>fetch()</strong> inside the component only if you need to fetch data on every re-render.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>fetch-data-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'fetch-data-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { isLoading, error, data </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> users, fetchData } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './fetch-data.js'</span>

<span style="color:#FF7B72">await</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://randomuser.me/api/?results=3'</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#D2A8FF">isLoading</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> '&#x3C;div>Loading...&#x3C;/div>'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#D2A8FF">error</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> &#96;&#x3C;div>Error: &#36;{</span><span style="color:#D2A8FF">error</span><span style="color:#A5D6FF">()</span><span style="color:#A5D6FF">}&#x3C;/div>&#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    &#36;{</span><span style="color:#D2A8FF">users</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> &#96;</span>
<span style="color:#A5D6FF">      &#x3C;ul></span>
<span style="color:#A5D6FF">        &#36;{</span><span style="color:#D2A8FF">users</span><span style="color:#A5D6FF">().</span><span style="color:#D2A8FF">map</span><span style="color:#A5D6FF">(</span><span style="color:#79C0FF">user</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;</span>
<span style="color:#A5D6FF">          &#x3C;li>&#36;{</span><span style="color:#E6EDF3">user</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">name</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">first</span><span style="color:#A5D6FF">} &#36;{</span><span style="color:#E6EDF3">user</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">name</span><span style="color:#A5D6FF">.</span><span style="color:#E6EDF3">last</span><span style="color:#A5D6FF">}&#x3C;/li></span>
<span style="color:#A5D6FF">        &#96;</span><span style="color:#A5D6FF">).</span><span style="color:#D2A8FF">join</span><span style="color:#A5D6FF">(</span><span style="color:#A5D6FF">''</span><span style="color:#A5D6FF">)</span><span style="color:#A5D6FF">}</span>
<span style="color:#A5D6FF">      &#x3C;/ul></span>
<span style="color:#A5D6FF">    &#96;</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>


</code></code-block>

<code-file>fetch-data.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> data</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> error</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> isLoading</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> async</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">url</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">  isLoading</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">true</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  try</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> response</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(url)</span>
<span style="color:#FF7B72">    const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">results</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> response.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    data</span><span style="color:#E6EDF3">(results)</span>
<span style="color:#D2A8FF">    error</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (err) {</span>
<span style="color:#D2A8FF">    data</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    error</span><span style="color:#E6EDF3">(err)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#D2A8FF">  isLoading</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">}</span>







</code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>FetchDataExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> fetchData </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './fetchData.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> FetchDataExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">isLoading</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">error</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">data</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">users</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://randomuser.me/api/?results=3'</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">isLoading </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Fetching users...&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">error </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>An error occurred while fetching users&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">}</span>
<span style="color:#FF7B72">      {!</span><span style="color:#E6EDF3">isLoading </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">error </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> users?.</span><span style="color:#79C0FF">length</span><span style="color:#FF7B72"> ></span><span style="color:#79C0FF"> 0</span><span style="color:#FF7B72"> &#x26;&#x26;</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">          {</span><span style="color:#E6EDF3">users.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(({ </span><span style="color:#FFA657">login</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">name</span><span style="color:#E6EDF3"> }) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">            &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#79C0FF"> key</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">login.uuid</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">              {</span><span style="color:#E6EDF3">name.first</span><span style="color:#FF7B72">}</span><span style="color:#FF7B72"> {</span><span style="color:#E6EDF3">name.last</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">            &#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">          ))</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">        &#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      )</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>

<code-file>fetchData.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useEffect, useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#FFA657">(url) </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">data</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setData</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">error</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setError</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">isLoading</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setIsLoading</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">() {</span>
<span style="color:#D2A8FF">    setIsLoading</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">true</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">    try</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      const</span><span style="color:#79C0FF"> response</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(url)</span>
<span style="color:#FF7B72">      const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">results</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> response.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">      setData</span><span style="color:#E6EDF3">(results)</span>
<span style="color:#D2A8FF">      setError</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (err) {</span>
<span style="color:#D2A8FF">      setData</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">      setError</span><span style="color:#E6EDF3">(err)</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#D2A8FF">    setIsLoading</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#D2A8FF">  useEffect</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">(), [])</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> { isLoading, error, data }</span>
<span style="color:#E6EDF3">}</span></code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>FetchDataExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> fetchData </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './fetchData.js'</span>

<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">isLoading</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">error</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">data</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">users</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://randomuser.me/api/?results=3'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">isLoading</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>Fetching users...&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#FF7B72"> v-else-if</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">error</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>An error ocurred while fetching users&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#FF7B72"> v-else</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">users</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#FF7B72"> v-for</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">user </span><span style="color:#FF7B72">in</span><span style="color:#E6EDF3"> users</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">key</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">user.login.uuid</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      {{ user.name.first }}</span>
<span style="color:#E6EDF3">      {{ user.name.last }}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>





</code></code-block>

<code-file>fetchData.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#FFA657">(url) </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> data</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> error</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isLoading</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  async</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#E6EDF3">() {</span>
<span style="color:#E6EDF3">    isLoading.value </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">    try</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">      const</span><span style="color:#79C0FF"> response</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(url)</span>
<span style="color:#FF7B72">      const</span><span style="color:#E6EDF3"> { </span><span style="color:#FFA657">results</span><span style="color:#E6EDF3">: </span><span style="color:#79C0FF">users</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> response.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">      data.value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> users</span>
<span style="color:#E6EDF3">      error.value </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> undefined</span>
<span style="color:#E6EDF3">    } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (err) {</span>
<span style="color:#E6EDF3">      data.value </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> undefined</span>
<span style="color:#E6EDF3">      error.value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> err</span>
<span style="color:#E6EDF3">    }</span>
<span style="color:#E6EDF3">    isLoading.value </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> false</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#D2A8FF">  fetchData</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> { isLoading, error, data }</span>
<span style="color:#E6EDF3">}</span></code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>FetchDataExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { store, fetchData } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './fetchData.svelte.js'</span>

<span style="color:#D2A8FF">  fetchData</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'https://randomuser.me/api/?results=3'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">{#</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3"> store.isLoading}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>Fetching users...&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{:</span><span style="color:#FF7B72">else if</span><span style="color:#E6EDF3"> store.error}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">>An error occurred while fetching users&#x3C;/</span><span style="color:#7EE787">p</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{:</span><span style="color:#FF7B72">else if</span><span style="color:#E6EDF3"> store.data}</span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    {#</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3"> store.data </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> user (user.login.uuid)}</span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">user.name.first</span><span style="color:#FF7B72">}</span><span style="color:#FF7B72"> {</span><span style="color:#E6EDF3">user.name.last</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">li</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    {/</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">ul</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">{/</span><span style="color:#FF7B72">if</span><span style="color:#E6EDF3">}</span>




</code></code-block>

<code-file>fetchData.svelte.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> store</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;state</span><span style="color:#E6EDF3">({</span>
<span style="color:#E6EDF3">  data: [],</span>
<span style="color:#E6EDF3">  isLoading: </span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">,</span>
<span style="color:#E6EDF3">  error: </span><span style="color:#79C0FF">null</span>
<span style="color:#E6EDF3">})</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#D2A8FF"> fetchData</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> async</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">url</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">  store.isLoading </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> true</span>
<span style="color:#FF7B72">  try</span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> response</span><span style="color:#FF7B72"> =</span><span style="color:#FF7B72"> await</span><span style="color:#D2A8FF"> fetch</span><span style="color:#E6EDF3">(url)</span>
<span style="color:#FF7B72">    const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">results</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> await</span><span style="color:#E6EDF3"> response.</span><span style="color:#D2A8FF">json</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">    store.data </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> results</span>
<span style="color:#E6EDF3">    store.error </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> null</span>
<span style="color:#E6EDF3">  } </span><span style="color:#FF7B72">catch</span><span style="color:#E6EDF3"> (error) {</span>
<span style="color:#E6EDF3">    store.data </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> []</span>
<span style="color:#E6EDF3">    store.error </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> error</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">  store.isLoading </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> false</span>
<span style="color:#E6EDF3">}</span>





</code></code-block>
    ` : ''}
  `
},c)