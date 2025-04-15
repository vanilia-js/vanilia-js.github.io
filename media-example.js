const c = 'media-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>media</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>You can share DOM references between components by exporting them from one component and importing them into another.</p> 
      <p>Additionally, you can export frequently changing signals and bind them in other components, enabling real-time updates.</p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>media-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'media-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './video-controls.js'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> video</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> const</span><span style="color:#79C0FF"> currentTime</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">video</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./video.mp4"</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"video/mp4"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">video</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">video-controls</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">video-controls</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#D2A8FF">  video</span><span style="color:#E6EDF3">(c.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'video'</span><span style="color:#E6EDF3">))</span>
<span style="color:#D2A8FF">  video</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">ontimeupdate</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> currentTime</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">video</span><span style="color:#E6EDF3">().currentTime </span><span style="color:#FF7B72">||</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>



</code></code-block>

<code-file>video-controls.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'video-controls'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { video, currentTime } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './media-example.js'</span>

<span style="color:#FF7B72">const</span><span style="color:#79C0FF"> isPlaying</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{isPlaying() ? 'pause' : 'play'}"</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">isPlaying</span><span style="color:#E6EDF3">() </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Pause'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Play'</span><span style="color:#E6EDF3">}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"current-time"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#D2A8FF">  &#36;</span><span style="color:#E6EDF3">(() </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">    c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">querySelector</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'.current-time'</span><span style="color:#E6EDF3">).textContent </span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF"> &#96;&#36;{</span><span style="color:#E6EDF3">Math</span><span style="color:#A5D6FF">.</span><span style="color:#D2A8FF">floor</span><span style="color:#A5D6FF">(</span><span style="color:#D2A8FF">currentTime</span><span style="color:#A5D6FF">())</span><span style="color:#A5D6FF">}s&#96;</span>
<span style="color:#E6EDF3">  })</span>
<span style="color:#E6EDF3">  </span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onclick</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'play'</span><span style="color:#E6EDF3">)) </span><span style="color:#D2A8FF">video</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (e.target.classList.</span><span style="color:#D2A8FF">contains</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'pause'</span><span style="color:#E6EDF3">)) </span><span style="color:#D2A8FF">video</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">pause</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    isPlaying</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#D2A8FF">isPlaying</span><span style="color:#E6EDF3">())</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>MediaExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState, useRef } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> MediaExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> videoRef</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> useRef</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">currentTime</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setCurrentTime</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleTimeUpdate</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#D2A8FF">    setCurrentTime</span><span style="color:#E6EDF3">(videoRef.current?.currentTime </span><span style="color:#FF7B72">||</span><span style="color:#79C0FF"> 0</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">video</span><span style="color:#79C0FF"> src</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"./video.mp4"</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"video/mp4"</span>
<span style="color:#79C0FF">        ref</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">videoRef</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onTimeUpdate</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleTimeUpdate</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      >&#x3C;/</span><span style="color:#7EE787">video</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">VideoControls</span><span style="color:#79C0FF"> videoRef</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">videoRef</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> currentTime</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">currentTime</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>
</code></code-block>

<code-file>VideoControls.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>

<span style="color:#FF7B72">function</span><span style="color:#D2A8FF"> VideoControls</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">videoRef</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">currentTime</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">isPlaying</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setIsPlaying</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> togglePlay</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef.current </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> isPlaying) videoRef.current.</span><span style="color:#D2A8FF">pause</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef.current </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">isPlaying) videoRef.current.</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    setIsPlaying</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">!</span><span style="color:#E6EDF3">isPlaying)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onClick</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">togglePlay</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isPlaying </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> "Pause"</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> "Play"</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> className</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"current-time"</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(currentTime)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">s&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>




</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>MediaExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> VideoControls </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './VideoControls.vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> videoRef</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> currentTime</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleTimeUpdate</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    currentTime.value </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> videoRef.value.currentTime </span><span style="color:#FF7B72">||</span><span style="color:#79C0FF"> 0</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">video</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"./video"</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"video/mp4"</span>
<span style="color:#79C0FF">    ref</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"videoRef"</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">timeupdate</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleTimeUpdate</span><span style="color:#E6EDF3">"</span>
<span style="color:#E6EDF3">  >&#x3C;/</span><span style="color:#7EE787">video</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">VideoControls</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">videoRef</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">videoRef</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">currentTime</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">currentTime</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

</code></code-block>

<code-file>VideoControls.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">videoRef</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">currentTime</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> defineProps</span><span style="color:#E6EDF3">([</span><span style="color:#A5D6FF">'videoRef'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'currentTime'</span><span style="color:#E6EDF3">])</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isPlaying</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> togglePlay</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> isPlaying.value) videoRef.</span><span style="color:#D2A8FF">pause</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">isPlaying.value) videoRef.</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">    isPlaying.value </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">isPlaying.value</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">click</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">togglePlay</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>{{ isPlaying </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> "Pause"</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> "Play"</span><span style="color:#E6EDF3"> }}&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"current-time"</span><span style="color:#E6EDF3">>{{ Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(currentTime) }}s&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>




</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>MediaExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> VideoControls </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './VideoControls.svelte'</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> videoRef </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">null</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> currentTime </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">)</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleTimeUpdate</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    currentTime </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> videoRef.currentTime </span><span style="color:#FF7B72">||</span><span style="color:#79C0FF"> 0</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">video</span><span style="color:#79C0FF"> src</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"http://media.w3.org/2010/05/sintel/trailer.mp4"</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"video/mp4"</span><span style="color:#E6EDF3"> </span>
<span style="color:#FF7B72">  bind</span><span style="color:#E6EDF3">:</span><span style="color:#79C0FF">this</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">videoRef</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> ontimeupdate</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleTimeUpdate</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">video</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">VideoControls</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">videoRef</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">currentTime</span><span style="color:#79C0FF">}</span><span style="color:#E6EDF3"> /></span>




</code></code-block>

<code-file>VideoControls.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { videoRef, currentTime } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> isPlaying </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> togglePlay</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> () </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#E6EDF3"> isPlaying) videoRef.</span><span style="color:#D2A8FF">pause</span><span style="color:#E6EDF3">()</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (videoRef </span><span style="color:#FF7B72">&#x26;&#x26;</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">isPlaying) videoRef.</span><span style="color:#D2A8FF">play</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">    isPlaying </span><span style="color:#FF7B72">=</span><span style="color:#FF7B72"> !</span><span style="color:#E6EDF3">isPlaying</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> onclick</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">togglePlay</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isPlaying </span><span style="color:#FF7B72">?</span><span style="color:#A5D6FF"> 'Pause'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> 'Play'</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">span</span><span style="color:#79C0FF"> class</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"current-time"</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">Math.</span><span style="color:#D2A8FF">floor</span><span style="color:#E6EDF3">(currentTime)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">s&#x3C;/</span><span style="color:#7EE787">span</span><span style="color:#E6EDF3">></span>








</code></code-block>
    ` : ''}
  `
},c)
