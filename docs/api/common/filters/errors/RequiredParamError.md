---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation RequiredParamError decorator
---
# RequiredParamError <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { RequiredParamError }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/src/filters/errors/RequiredParamError"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.31.4/packages/common/src/filters/errors/RequiredParamError.ts#L0-L0">/packages/common/src/filters/errors/RequiredParamError.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> RequiredParamError <span class="token keyword">extends</span> BadRequest <span class="token keyword">implements</span> <a href="/api/common/mvc/interfaces/IResponseError.html"><span class="token">IResponseError</span></a> <span class="token punctuation">{</span>
    errors<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> expression<span class="token punctuation">:</span> <span class="token keyword">string</span> | RegExp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> expression<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">errors<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> expression<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::