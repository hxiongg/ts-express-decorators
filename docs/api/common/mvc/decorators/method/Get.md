---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation Get decorator
---
# Get <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Get }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.31.4/packages/common/src/mvc/decorators/method/route.ts#L0-L0">/packages/common/src/mvc/decorators/method/route.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">Get</span><span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token keyword">string</span> | RegExp | <span class="token keyword">any</span><span class="token punctuation">,</span> ...args<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Function<span class="token punctuation">;</span></code></pre>



<!-- Description -->
## Description

::: v-pre

This method is just like the `router.METHOD()` methods, except that it matches all HTTP methods (verbs).

This method is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches.
For example, if you placed the following route at the top of all other route definitions, it would require that
all routes from that point on would require authentication, and automatically load a user.
Keep in mind that these callbacks do not have to act as end points; loadUser can perform a task, then call next()
to continue matching subsequent routes.

:::