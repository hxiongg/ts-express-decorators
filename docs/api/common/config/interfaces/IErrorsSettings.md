---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation IErrorsSettings decorator
---
# IErrorsSettings <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { IErrorsSettings }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/src/config/interfaces/IServerSettings"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.31.4/packages/common/src/config/interfaces/IServerSettings.ts#L0-L0">/packages/common/src/config/interfaces/IServerSettings.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> IErrorsSettings <span class="token punctuation">{</span>
    headerName?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">headerName?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



Change the name of the header field used by GlobalErrorHandlerMiddleware
to sent the errors in the response headers.



:::