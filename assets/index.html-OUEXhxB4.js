import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as e,w as t,e as l,a as s,r as h,o as k}from"./app-BUJ2iQsf.js";const p={},r=l(`<h2 id="💬-描述" tabindex="-1"><a class="header-anchor" href="#💬-描述"><span>💬 描述</span></a></h2><p>给定一个未经排序的整数数组，找到最长且<strong>连续</strong>的的递增序列。 <strong>示例 1:</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">输入: [1,3,5,4,7]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">输出: 3</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">解释: 最长连续递增序列是 [1,3,5], 长度为3。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">输入: [2,2,2,2,2]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">输出: 1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">解释: 最长连续递增序列是 [2], 长度为1。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：数组长度不会超过10000。 <br></p><h2 id="💡-思路" tabindex="-1"><a class="header-anchor" href="#💡-思路"><span>💡 思路</span></a></h2><p>遍历数组。ans为最终准备返回的长度值，curLen为当前下标对应的长度。 每次遍历中，如果下一个数比前面的数大，则curLen++，否则代表连续递增中断了，将curLen重置为1。 每次循环的最后，比较ans和curLen，将较大者赋给ans。 循环结束后，返回ans。 <br></p><h2 id="📋-代码" tabindex="-1"><a class="header-anchor" href="#📋-代码"><span>📋 代码</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#B392F0;"> Solution</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> findLengthOfLCIS</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#FFAB70;"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &lt;=</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">length</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> ans</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> curLen </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">])</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">                curLen</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">                curLen </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">            ans </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> curLen </span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> ans </span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> curLen </span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> ans</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> ans</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度：</strong> 时间：O(n) 空间：O(1) <br></p>`,11),d=s("a",{href:"https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/",class:"LinkCard",target:"_blank"},"LeetCode-674",-1),E=s("br",null,null,-1);function g(c,y){const i=h("center");return k(),n("div",null,[r,e(i,null,{default:t(()=>[d]),_:1}),E])}const u=a(p,[["render",g],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/40algo/10array/lc674/","title":"674-最长连续递增序列","lang":"zh-CN","frontmatter":{"title":"674-最长连续递增序列","date":"2020-05-09T22:21:49.000Z","permalink":"/40algo/10array/lc674/","order":12,"icon":"leetcode","description":"💬 描述 给定一个未经排序的整数数组，找到最长且连续的的递增序列。 示例 1: 示例 2: 注意：数组长度不会超过10000。 💡 思路 遍历数组。ans为最终准备返回的长度值，curLen为当前下标对应的长度。 每次遍历中，如果下一个数比前面的数大，则curLen++，否则代表连续递增中断了，将curLen重置为1。 每次循环的最后，比较ans和...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/40algo/10array/lc674/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"674-最长连续递增序列"}],["meta",{"property":"og:description","content":"💬 描述 给定一个未经排序的整数数组，找到最长且连续的的递增序列。 示例 1: 示例 2: 注意：数组长度不会超过10000。 💡 思路 遍历数组。ans为最终准备返回的长度值，curLen为当前下标对应的长度。 每次遍历中，如果下一个数比前面的数大，则curLen++，否则代表连续递增中断了，将curLen重置为1。 每次循环的最后，比较ans和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T06:12:12.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:published_time","content":"2020-05-09T22:21:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-18T06:12:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"674-最长连续递增序列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-09T22:21:49.000Z\\",\\"dateModified\\":\\"2024-08-18T06:12:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"💬 描述","slug":"💬-描述","link":"#💬-描述","children":[]},{"level":2,"title":"💡 思路","slug":"💡-思路","link":"#💡-思路","children":[]},{"level":2,"title":"📋 代码","slug":"📋-代码","link":"#📋-代码","children":[]}],"git":{"createdTime":1664722755000,"updatedTime":1723961532000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1},{"name":"jayxiaohe","email":"hept//github0712","commits":1}]},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"40algo/10array/12.leetcode674.md","localizedDate":"2020年5月10日","autoDesc":true}');export{u as comp,v as data};
