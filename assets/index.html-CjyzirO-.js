import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,e as n}from"./app-BUJ2iQsf.js";const h={},l=n(`<h2 id="🔗-链接" tabindex="-1"><a class="header-anchor" href="#🔗-链接"><span>🔗 链接</span></a></h2><p><a href="https://leetcode.cn/problems/first-letter-to-appear-twice/description/" target="_blank" rel="noopener noreferrer">lc-2351</a></p><p>一道普通的字符串/数组类题目。第一时间想到可以用hash表。然后看到官方题解还有利用二进制数进行状态压缩的解法，尝试后也ac了，在此记录一下。</p><br><h2 id="📋-代码1-hash表" tabindex="-1"><a class="header-anchor" href="#📋-代码1-hash表"><span>📋 代码1-hash表</span></a></h2><p>使用占空间较小的boolean类型来保存。false表示未出现过，true表示出现过。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> repeatedCharacter</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">String s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    boolean</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> vis</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">26</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">        c </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">charAt</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">vis</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#9ECBFF;">a</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">            vis</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#9ECBFF;">a</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)，其中 n 是字符串<code>s</code>的长度。</li><li>空间复杂度：O(1)。占用的空间为包含了26个字符的数组。</li></ul><br><h2 id="📋-代码2-状态压缩" tabindex="-1"><a class="header-anchor" href="#📋-代码2-状态压缩"><span>📋 代码2-状态压缩</span></a></h2><p>如下放代码所示，<code>(vis &amp; (1 &lt;&lt; x)) != 0)</code>用于判断<code>vis</code>这个数字的<strong>二进制表示</strong>中，第x位的值是否为1，与操作的结果不为0，表示第x位的值为1，即表示c这个字符出现过，返回c。否则，使用<code>vis |= (1 &lt;&lt; x)</code>，把vis的第x为改为1。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> vis</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> repeatedCharacter</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">String s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">        c </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">charAt</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">        x </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#9ECBFF;">a</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">vis </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> !=</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">        vis </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">|=</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)，其中 n 是字符串<code>s</code>的长度。</li><li>空间复杂度：O(1)。</li></ul>`,13),t=[l];function e(k,p){return a(),i("div",null,t)}const E=s(h,[["render",e],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/40algo/10array/lc2351/","title":"2351-第一个出现两次的字母","lang":"zh-CN","frontmatter":{"title":"2351-第一个出现两次的字母","date":"2023-01-01T16:40:13.000Z","permalink":"/40algo/10array/lc2351/","order":16,"icon":"leetcode","description":"🔗 链接 lc-2351 一道普通的字符串/数组类题目。第一时间想到可以用hash表。然后看到官方题解还有利用二进制数进行状态压缩的解法，尝试后也ac了，在此记录一下。 📋 代码1-hash表 使用占空间较小的boolean类型来保存。false表示未出现过，true表示出现过。 时间复杂度：O(n)，其中 n 是字符串s的长度。 空间复杂度：O(...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/40algo/10array/lc2351/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"2351-第一个出现两次的字母"}],["meta",{"property":"og:description","content":"🔗 链接 lc-2351 一道普通的字符串/数组类题目。第一时间想到可以用hash表。然后看到官方题解还有利用二进制数进行状态压缩的解法，尝试后也ac了，在此记录一下。 📋 代码1-hash表 使用占空间较小的boolean类型来保存。false表示未出现过，true表示出现过。 时间复杂度：O(n)，其中 n 是字符串s的长度。 空间复杂度：O(..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T06:12:12.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:published_time","content":"2023-01-01T16:40:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-18T06:12:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2351-第一个出现两次的字母\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T16:40:13.000Z\\",\\"dateModified\\":\\"2024-08-18T06:12:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"🔗 链接","slug":"🔗-链接","link":"#🔗-链接","children":[]},{"level":2,"title":"📋 代码1-hash表","slug":"📋-代码1-hash表","link":"#📋-代码1-hash表","children":[]},{"level":2,"title":"📋 代码2-状态压缩","slug":"📋-代码2-状态压缩","link":"#📋-代码2-状态压缩","children":[]}],"git":{"createdTime":1672590134000,"updatedTime":1723961532000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1},{"name":"jayxiaohe","email":"hept//github0712","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"40algo/10array/16.leetcode2351.md","localizedDate":"2023年1月2日","autoDesc":true}');export{E as comp,g as data};
