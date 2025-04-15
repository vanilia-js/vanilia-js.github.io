const c = 'forms-example'

import { framework } from './nav-btns.js'

$(c => {
  c.html`
    <h3>forms</h3>
    <example-explanation style="${framework() !== 'vanilia' ? 'opacity: 0' : ''}">
      <p>To bind data to form inputs, no custom attributes are needed; use signals in the template directly: <strong>value="&#36;{signal()}"</strong></p>
    </example-explanation>

    ${framework() === 'vanilia' ? /*html*/`
<code-file>forms-example.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'forms-example'</span>

<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './text-area.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-text.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-number.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-range.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-checkbox.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-radio.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './select-option.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-color.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './input-datetime.js'</span>
<span style="color:#FF7B72">import</span><span style="color:#A5D6FF"> './output-data.js'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorName </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorSaturation </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">50</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> isActive </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorRGB </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorCMY </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorHex </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'#ff8800'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> dateTime </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> &#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toISOString</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">))</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorsRGB </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> let</span><span style="color:#E6EDF3"> colorsCMY </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3">]</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">text-area</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">text-area</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-text</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-text</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-number</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-number</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-range</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-range</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-checkbox</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-checkbox</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-radio</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-radio</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">select-option</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">select-option</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-color</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-color</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input-datetime</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">input-datetime</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output-data</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">output-data</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>

<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onchange</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FF7B72">    const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">name</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">value</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">checked</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> e.target</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'color-name'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">colorName</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'color-saturation'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">colorSaturation</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">+</span><span style="color:#E6EDF3">value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'is-active'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">isActive</span><span style="color:#E6EDF3">(checked)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'color-rgb'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">colorRGB</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'colors-cmy'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">colorCMY</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'color-hex'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">colorHex</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#FF7B72">    if</span><span style="color:#E6EDF3"> (name </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'date-time'</span><span style="color:#E6EDF3">) </span><span style="color:#D2A8FF">dateTime</span><span style="color:#E6EDF3">(value)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">    </span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">onsubmit</span><span style="color:#FF7B72"> =</span><span style="color:#FFA657"> e</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    e.</span><span style="color:#D2A8FF">preventDefault</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Submitting!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>text-area.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'text-area'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorName } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">textarea</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-name"</span><span style="color:#E6EDF3">>&#36;{</span><span style="color:#D2A8FF">colorName</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">textarea</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-text.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-text'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorName, colorsRGB } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-name"</span><span style="color:#79C0FF"> list</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorName()}"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">datalist</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#E6EDF3"> ></span>
<span style="color:#E6EDF3">      &#36;{colorsRGB.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">color</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;&#x3C;option value="&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}">&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}&#x3C;/option>&#96;</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">datalist</span><span style="color:#E6EDF3">> </span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span>


</code></code-block>

<code-file>input-number.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-number'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorSaturation } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"number"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorSaturation()}"</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-range.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-range'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorSaturation } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorSaturation()}"</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">progress</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorSaturation()}"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">progress</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">meter</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorSaturation()}"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">meter</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-checkbox.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-checkbox'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { isActive } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3"> &#36;{isActive() ? </span><span style="color:#A5D6FF">'checked'</span><span style="color:#79C0FF"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3">>Is active&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-radio.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-radio'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorRGB } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"red"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      &#36;{colorRGB() === </span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3"> ? </span><span style="color:#A5D6FF">'checked'</span><span style="color:#79C0FF"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    >&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"green"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      &#36;{colorRGB() === </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3"> ? </span><span style="color:#A5D6FF">'checked'</span><span style="color:#79C0FF"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    >&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"blue"</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      &#36;{colorRGB() === </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3"> ? </span><span style="color:#A5D6FF">'checked'</span><span style="color:#79C0FF"> :</span><span style="color:#A5D6FF"> ''</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">    >&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>select-option.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'select-option'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorCMY, colorsCMY } </span><span style="color:#FF7B72">from</span><span style="color:#FF7B72"> from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">select</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-cmy"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#36;{colorsCMY.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">color</span><span style="color:#FF7B72"> =></span><span style="color:#A5D6FF"> &#96;</span>
<span style="color:#A5D6FF">        &#x3C;option name="color-cmy" value="&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}" </span>
<span style="color:#A5D6FF">          &#36;{</span><span style="color:#D2A8FF">colorCMY</span><span style="color:#A5D6FF">() </span><span style="color:#FF7B72">===</span><span style="color:#E6EDF3"> color</span><span style="color:#FF7B72"> ?</span><span style="color:#A5D6FF"> 'selected'</span><span style="color:#FF7B72"> :</span><span style="color:#A5D6FF"> ''}</span>
<span style="color:#A5D6FF">        >&#36;{</span><span style="color:#E6EDF3">color</span><span style="color:#A5D6FF">}&#x3C;/option></span>
<span style="color:#A5D6FF">      &#96;</span><span style="color:#E6EDF3">).</span><span style="color:#D2A8FF">join</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">''</span><span style="color:#E6EDF3">)}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">select</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-color.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-color'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorHex } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-hex"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{colorHex()}"</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>input-datetime.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'input-datetime'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { dateTime } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"datetime-local"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"date-time"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"&#36;{dateTime()}"</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>

<code-file>output-data.js</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">const</span><span style="color:#79C0FF"> c</span><span style="color:#FF7B72"> =</span><span style="color:#A5D6FF"> 'output-data'</span>

<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { colorName, colorSaturation, isActive, </span>
<span style="color:#E6EDF3">  colorRGB, colorCMY, colorHex, dateTime } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './forms-example.js'</span>

<span style="color:#D2A8FF">&#36;</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">c</span><span style="color:#FF7B72"> =></span><span style="color:#E6EDF3"> {</span>
<span style="color:#FFA657">  c</span><span style="color:#E6EDF3">.</span><span style="color:#D2A8FF">html</span><span style="color:#E6EDF3">&#96;</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Textarea: &#36;{</span><span style="color:#D2A8FF">colorName</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Text: &#36;{</span><span style="color:#D2A8FF">colorName</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Number: &#36;{</span><span style="color:#D2A8FF">colorSaturation</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Range: &#36;{</span><span style="color:#D2A8FF">colorSaturation</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Checkbox: &#36;{</span><span style="color:#D2A8FF">isActive</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Radio: &#36;{</span><span style="color:#D2A8FF">colorRGB</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Select: &#36;{</span><span style="color:#D2A8FF">colorCMY</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Color picker: &#36;{</span><span style="color:#D2A8FF">colorHex</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Datetime-local: &#36;{</span><span style="color:#D2A8FF">dateTime</span><span style="color:#E6EDF3">()}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#A5D6FF">  &#96;</span>
<span style="color:#E6EDF3">},</span><span style="color:#79C0FF">c</span><span style="color:#E6EDF3">)</span></code></code-block>
    ` : ''}

    ${framework() === 'react' ? /*html*/`
<code-file>FormsExample.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> { useState } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'react'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> TextArea </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './TextArea.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputText </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputText.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputNumber </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputNumber.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputRange </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRange.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputCheckbox </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputCheckbox.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputRadio </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRadio.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> SelectOption </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './SelectOption.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputColor </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputColor.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> InputDatetime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputDatetime.jsx'</span>
<span style="color:#FF7B72">import</span><span style="color:#E6EDF3"> OutputData </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './OutputData.jsx'</span>

<span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> FormsExample</span><span style="color:#FFA657">() </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">colorName</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColorName</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">colorSaturation</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColorSaturation</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">50</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">isActive</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setIsActive</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">colorRGB</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColorRGB</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">colorCMY</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColorCMY</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">colorHex</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setColorHex</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'#ff8800'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> [</span><span style="color:#79C0FF">dateTime</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">setDateTime</span><span style="color:#E6EDF3">] </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> useState</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toISOString</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">))</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3">]</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleSubmit</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    e.</span><span style="color:#D2A8FF">preventDefault</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Submitting!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>

<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">form</span><span style="color:#79C0FF"> onSubmit</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">handleSubmit</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">TextArea</span><span style="color:#79C0FF"> colorName</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorName</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputText</span><span style="color:#79C0FF"> colorName</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorName</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorsRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputNumber</span><span style="color:#79C0FF"> colorSaturation</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorSaturation</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputRange</span><span style="color:#79C0FF"> colorSaturation</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorSaturation</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputCheckbox</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setIsActive</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setIsActive</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputRadio</span><span style="color:#79C0FF"> colorRGB</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorRGB</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">SelectOption</span><span style="color:#79C0FF"> colorCMY</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorCMY</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorCMY</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorsCMY</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputColor</span><span style="color:#79C0FF"> colorHex</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setColorHex</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setColorHex</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">InputDatetime</span><span style="color:#79C0FF"> dateTime</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> setDateTime</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">setDateTime</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">OutputData</span><span style="color:#79C0FF"> colorName</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> colorSaturation</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span>
<span style="color:#79C0FF">        colorRGB</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> colorCMY</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> colorHex</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> dateTime</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>

<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"submit"</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>









</code></code-block>

<code-file>TextArea.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> TextArea</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorName</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorName</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">textarea</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-name"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorName</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    /></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>

<code-file>InputText.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputText</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorName</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorName</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorsRGB</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-name"</span><span style="color:#79C0FF"> list</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"colors-rgb"</span>
<span style="color:#79C0FF">        value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorName</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">datalist</span><span style="color:#79C0FF"> id</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">        {</span><span style="color:#E6EDF3">colorsRGB.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">color</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">          &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#79C0FF"> key</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">        ))</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">      &#x3C;/</span><span style="color:#7EE787">datalist</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>

<code-file>InputNumber.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputNumber</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorSaturation</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorSaturation</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"number"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorSaturation</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">Number</span><span style="color:#E6EDF3">(e.target.value))</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    /></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>

<code-file>InputRange.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputRange</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorSaturation</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorSaturation</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#79C0FF"> min</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorSaturation</span><span style="color:#E6EDF3">(</span><span style="color:#D2A8FF">Number</span><span style="color:#E6EDF3">(e.target.value))</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">progress</span><span style="color:#79C0FF"> min</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">meter</span><span style="color:#79C0FF"> min</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span></code></code-block>

<code-file>InputCheckbox.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputCheckbox</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">isActive</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setIsActive</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#79C0FF"> id</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      checked</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setIsActive</span><span style="color:#E6EDF3">(e.target.checked)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    />&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> htmlFor</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3">>Is active&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>

</code></code-block>

<code-file>InputRadio.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputRadio</span><span style="color:#FFA657">({ colorRGB, setColorRGB }) </span><span style="color:#E6EDF3">{</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-red"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"red"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        checked</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorRGB </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'red'</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorRGB</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> htmlFor</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-red"</span><span style="color:#E6EDF3">>Red Label&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-green"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"green"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        checked</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorRGB </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'green'</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorRGB</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> htmlFor</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-green"</span><span style="color:#E6EDF3">>Green Label&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-blue"</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"blue"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">        checked</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorRGB </span><span style="color:#FF7B72">===</span><span style="color:#A5D6FF"> 'blue'</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorRGB</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      />&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> htmlFor</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-blue"</span><span style="color:#E6EDF3">>Blue Label&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>

<code-file>SelectOption.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> SelectOption</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorCMY</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorCMY</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorsCMY</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">select</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"colors-cmy"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorCMY</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    ></span>
<span style="color:#FF7B72">      {</span><span style="color:#E6EDF3">colorsCMY.</span><span style="color:#D2A8FF">map</span><span style="color:#E6EDF3">((</span><span style="color:#FFA657">color</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">        &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#79C0FF"> key</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">      ))</span><span style="color:#FF7B72">}</span>
<span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">select</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>




</code></code-block>

<code-file>InputColor.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputColor</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">colorHex</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setColorHex</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"color-hex"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setColorHex</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    /></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>

<code-file>InputDatetime.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> InputDatetime</span><span style="color:#E6EDF3">({ </span><span style="color:#FFA657">dateTime</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">setDateTime</span><span style="color:#E6EDF3"> }) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"datetime-local"</span><span style="color:#79C0FF"> name</span><span style="color:#FF7B72">=</span><span style="color:#A5D6FF">"date-time"</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">      value</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span><span style="color:#79C0FF"> onChange</span><span style="color:#FF7B72">={</span><span style="color:#E6EDF3">(</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#D2A8FF"> setDateTime</span><span style="color:#E6EDF3">(e.target.value)</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    /></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>


</code></code-block>

<code-file>OutputData.jsx</code-file>
<code-block tabindex="0"><code><span style="color:#FF7B72">export</span><span style="color:#FF7B72"> default</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> OutputData</span><span style="color:#E6EDF3">({ </span>
<span style="color:#FFA657">  colorName</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorSaturation</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">isActive</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorRGB</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorCMY</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">colorHex</span><span style="color:#E6EDF3">, </span><span style="color:#FFA657">dateTime</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">}) {</span>
<span style="color:#FF7B72">  return</span><span style="color:#E6EDF3"> (</span>
<span style="color:#E6EDF3">    &#x3C;></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Textarea: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Text: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Number: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Range: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Checkbox: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isActive.</span><span style="color:#D2A8FF">toString</span><span style="color:#E6EDF3">()</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Radio: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Select: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Color picker: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">      &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Datetime-local: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    &#x3C;/></span>
<span style="color:#E6EDF3">  )</span>
<span style="color:#E6EDF3">}</span>

</code></code-block>
    ` : ''}

    ${framework() === 'vue' ? /*html*/`
<code-file>FormsExample.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> { ref } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> 'vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> TextArea </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './TextArea.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputText </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputText.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputNumber </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputNumber.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputRange </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRange.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputCheckbox </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputCheckbox.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputRadio </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRadio.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> SelectOption </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './SelectOption.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputColor </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputColor.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputDatetime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputDatetime.vue'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> OutputData </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './OutputData.vue'</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorName</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorSaturation</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">50</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> isActive</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorRGB</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorCMY</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorHex</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'#ff8800'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> dateTime</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> ref</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toISOString</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">))</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3">]</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleSubmit</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    e.</span><span style="color:#D2A8FF">preventDefault</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Submitting!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3"> @</span><span style="color:#79C0FF">submit</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">handleSubmit</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">TextArea</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorName</span><span style="color:#E6EDF3">"</span><span style="color:#FFA198;font-style:italic"> /</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputText</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorName</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">colorsRGB</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputNumber</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputRange</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputCheckbox</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">isActive</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputRadio</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">SelectOption</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">colorsCMY</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputColor</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">colorHex</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">InputDatetime</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">dateTime</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">OutputData</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      :</span><span style="color:#79C0FF">colorName</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">colorSaturation</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">isActive</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">      :</span><span style="color:#79C0FF">colorRGB</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">colorCMY</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">colorHex</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">dateTime</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">    />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"submit"</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>








</code></code-block>

<code-file>TextArea.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">textarea</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">textarea</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>InputText.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">colorsRGB</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> defineProps</span><span style="color:#E6EDF3">([</span><span style="color:#A5D6FF">'colorsRGB'</span><span style="color:#E6EDF3">])</span>
<span style="color:#FF7B72">const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> list</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">datalist</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#FF7B72"> v-for</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">in</span><span style="color:#E6EDF3"> colorsRGB</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">key</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>{{ color }}&#x3C;/</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">datalist</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>



</code></code-block>

<code-file>InputNumber.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"number"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>InputRange.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">progress</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">value</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">progress</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">meter</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"0"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"100"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">value</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">meter</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>InputCheckbox.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3">>Is active&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>InputRadio.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"red"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"green"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"blue"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>





</code></code-block>

<code-file>SelectOption.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">colorsCMY</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> defineProps</span><span style="color:#E6EDF3">([</span><span style="color:#A5D6FF">'colorsCMY'</span><span style="color:#E6EDF3">])</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">select</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#FF7B72"> v-for</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color </span><span style="color:#FF7B72">in</span><span style="color:#E6EDF3"> colorsCMY</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> :</span><span style="color:#79C0FF">key</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">color</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">>{{ color }}&#x3C;/</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;/</span><span style="color:#7EE787">select</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>





</code></code-block>

<code-file>InputColor.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>InputDatetime.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> model</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> defineModel</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"datetime-local"</span><span style="color:#79C0FF"> v-model</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3">model</span><span style="color:#E6EDF3">"</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>


</code></code-block>

<code-file>OutputData.vue</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  const</span><span style="color:#E6EDF3"> { </span><span style="color:#79C0FF">colorName</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">colorSaturation</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">isActive</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">colorRGB</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">colorCMY</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">colorHex</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">dateTime</span><span style="color:#E6EDF3"> } </span><span style="color:#FF7B72">=</span><span style="color:#D2A8FF"> defineProps</span><span style="color:#E6EDF3">([</span>
<span style="color:#A5D6FF">    'colorName'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'colorSaturation'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'isActive'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'colorRGB'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'colorCMY'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'colorHex'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'dateTime'</span>
<span style="color:#E6EDF3">  ])</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Textarea: {{ colorName }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Text: {{ colorName }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Number: {{ colorSaturation }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Range: {{ colorSaturation }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Checkbox: {{ isActive }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Radio: {{ colorRGB }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Select: {{ colorCMY }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Color picker: {{ colorHex }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Datetime-local: {{ dateTime }}&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span>

</code></code-block>
    ` : ''}

    ${framework() === 'svelte' ? /*html*/`
<code-file>FormsExample.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> TextArea </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './TextArea.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputText </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputText.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputNumber </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputNumber.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputRange </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRange.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputCheckbox </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputCheckbox.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputRadio </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputRadio.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> SelectOption </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './SelectOption.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputColor </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputColor.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> InputDatetime </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './InputDatetime.svelte'</span>
<span style="color:#FF7B72">  import</span><span style="color:#E6EDF3"> OutputData </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> './OutputData.svelte'</span>

<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> colorName </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'orange'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> colorSaturation </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">50</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> isActive </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">false</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> colorRGB </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> colorCMY </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> colorHex </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'#ff8800'</span><span style="color:#E6EDF3">)</span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> dateTime </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">state</span><span style="color:#E6EDF3">(</span><span style="color:#FF7B72">new</span><span style="color:#D2A8FF"> Date</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">toISOString</span><span style="color:#E6EDF3">().</span><span style="color:#D2A8FF">slice</span><span style="color:#E6EDF3">(</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">16</span><span style="color:#E6EDF3">))</span>

<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsRGB</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'red'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'green'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'blue'</span><span style="color:#E6EDF3">]</span>
<span style="color:#FF7B72">  const</span><span style="color:#79C0FF"> colorsCMY</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> [</span><span style="color:#A5D6FF">'cyan'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'magenta'</span><span style="color:#E6EDF3">, </span><span style="color:#A5D6FF">'yellow'</span><span style="color:#E6EDF3">]</span>

<span style="color:#FF7B72">  const</span><span style="color:#D2A8FF"> handleSubmit</span><span style="color:#FF7B72"> =</span><span style="color:#E6EDF3"> (</span><span style="color:#FFA657">e</span><span style="color:#E6EDF3">) </span><span style="color:#FF7B72">=></span><span style="color:#E6EDF3"> {</span>
<span style="color:#E6EDF3">    e.</span><span style="color:#D2A8FF">preventDefault</span><span style="color:#E6EDF3">()</span>
<span style="color:#D2A8FF">    alert</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Submitting!'</span><span style="color:#E6EDF3">)</span>
<span style="color:#E6EDF3">  }</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">form</span><span style="color:#79C0FF"> onsubmit</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">handleSubmit</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">TextArea</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorName</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputText</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorName</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">colorsRGB</span><span style="color:#79C0FF">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputNumber</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorSaturation</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputRange</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorSaturation</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputCheckbox</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">isActive</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputRadio</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorRGB</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">SelectOption</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorCMY</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">colorsCMY</span><span style="color:#79C0FF">}</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputColor</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">colorHex</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">InputDatetime</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">dateTime</span><span style="color:#E6EDF3"> />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">OutputData</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">    {</span><span style="color:#E6EDF3">colorName</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">isActive</span><span style="color:#79C0FF">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#79C0FF">    {</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">colorHex</span><span style="color:#79C0FF">}</span><span style="color:#79C0FF"> {</span><span style="color:#E6EDF3">dateTime</span><span style="color:#79C0FF">}</span><span style="color:#E6EDF3"> </span>
<span style="color:#E6EDF3">  />&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3"> /></span>
<span style="color:#E6EDF3">    </span>
<span style="color:#E6EDF3">  &#x3C;</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">>Submit&#x3C;/</span><span style="color:#7EE787">button</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">form</span><span style="color:#E6EDF3">></span>











</code></code-block>

<code-file>TextArea.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorName </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">textarea</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>&#x3C;/</span><span style="color:#7EE787">textarea</span><span style="color:#E6EDF3">></span>




</code></code-block>

<code-file>InputText.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorName </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">(), colorsRGB } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"text"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-name"</span><span style="color:#79C0FF"> list</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">datalist</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-rgb"</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {#</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3"> colorsRGB </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> color}</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {/</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">datalist</span><span style="color:#E6EDF3">> </span>




</code></code-block>

<code-file>InputNumber.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorSaturation </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"number"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>




</code></code-block>

<code-file>InputRange.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorSaturation </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"range"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-saturation"</span><span style="color:#79C0FF"> min</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#79C0FF">0</span><span style="color:#E6EDF3">"</span><span style="color:#79C0FF"> max</span><span style="color:#E6EDF3">=</span><span style="color:#E6EDF3">"</span><span style="color:#79C0FF">100</span><span style="color:#E6EDF3">"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#8B949E">&#x3C;!-- This is not working: --></span>
<span style="color:#8B949E">&#x3C;!-- &#x3C;progress min="0" max="100" bind:value={colorSaturation}>&#x3C;/progress>&#x3C;br> --></span>
<span style="color:#8B949E">&#x3C;!-- &#x3C;meter min="0" max="100" bind:value={colorSaturation}>&#x3C;/meter>&#x3C;br> --></span>



</code></code-block>

<code-file>InputCheckbox.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { isActive </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"checkbox"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">checked</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"is-active"</span><span style="color:#E6EDF3">>Is active&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>




</code></code-block>

<code-file>InputRadio.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorRGB </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"red"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">group</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-red"</span><span style="color:#E6EDF3">>Red&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"green"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">group</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-green"</span><span style="color:#E6EDF3">>Green&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"radio"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb"</span><span style="color:#79C0FF"> id</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"blue"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">group</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">label</span><span style="color:#79C0FF"> for</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-rgb-blue"</span><span style="color:#E6EDF3">>Blue&#x3C;/</span><span style="color:#7EE787">label</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>







</code></code-block>

<code-file>SelectOption.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorCMY </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">(), colorsCMY } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">select</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"colors-cmy"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {#</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3"> colorsCMY </span><span style="color:#FF7B72">as</span><span style="color:#E6EDF3"> color}</span>
<span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">option</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-cmy"</span><span style="color:#79C0FF"> value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">color</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">option</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">  {/</span><span style="color:#FF7B72">each</span><span style="color:#E6EDF3">}</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">select</span><span style="color:#E6EDF3">></span>






</code></code-block>

<code-file>InputColor.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorHex </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"color-hex"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>




</code></code-block>

<code-file>InputDatetime.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { dateTime </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">bindable</span><span style="color:#E6EDF3">() } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">input</span><span style="color:#79C0FF"> type</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"datetime-local"</span><span style="color:#79C0FF"> name</span><span style="color:#E6EDF3">=</span><span style="color:#A5D6FF">"date-time"</span><span style="color:#FF7B72"> bind</span><span style="color:#E6EDF3">:</span><span style="color:#FFA657">value</span><span style="color:#E6EDF3">=</span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">></span>




</code></code-block>

<code-file>OutputData.svelte</code-file>
<code-block tabindex="0"><code><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>
<span style="color:#FF7B72">  let</span><span style="color:#E6EDF3"> { colorName, colorSaturation, isActive, colorRGB, colorCMY, colorHex, dateTime } </span><span style="color:#FF7B72">=</span><span style="color:#E6EDF3"> &#36;</span><span style="color:#D2A8FF">props</span><span style="color:#E6EDF3">()</span>
<span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span>

<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Textarea: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Text: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorName</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Number: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Range: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorSaturation</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Checkbox: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">isActive</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Radio: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorRGB</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Select: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorCMY</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Color picker: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">colorHex</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>
<span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>Datetime-local: </span><span style="color:#FF7B72">{</span><span style="color:#E6EDF3">dateTime</span><span style="color:#FF7B72">}</span><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">output</span><span style="color:#E6EDF3">>&#x3C;</span><span style="color:#7EE787">br</span><span style="color:#E6EDF3">></span>





</code></code-block>
    ` : ''}
  `
},c)