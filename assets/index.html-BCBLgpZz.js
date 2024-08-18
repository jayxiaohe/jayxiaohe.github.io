import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as s,b as a,d as n,e as l,o as t,r as p}from"./app-BUJ2iQsf.js";const e={},E=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"相关信息"),s("p",null,"此处记录优先级队列相关的题目，主要来自力扣。")],-1),r={id:"lc-855",tabindex:"-1"},d={class:"header-anchor",href:"#lc-855"},g=s("a",{href:"https://leetcode.cn/problems/exam-room/",target:"_blank",rel:"noopener noreferrer"},"lc-855",-1),y=s("blockquote",null,[s("p",null,"todo")],-1),c={id:"lc-1801",tabindex:"-1"},F={class:"header-anchor",href:"#lc-1801"},o=s("a",{href:"https://leetcode.cn/problems/number-of-orders-in-the-backlog/description/",target:"_blank",rel:"noopener noreferrer"},"lc-1801",-1),A=l(`<p>根据题意，创建2个优先队列，其比较规则相反。然后遍历<code>orders</code>。在循环中，先判断当前订单是否为采购类。</p><p>如果是，则继续判断（<code>while</code>）：如果销售订单队列不为空，且其第一个元素的价格小于当前订单的价格，且当前订单的数量大于0，则进入<code>while</code>循环。</p><p>循环内，先获取当前用户的数量和销售队列中第一个元素的数量的最小值，然后分别在数量上减去这个最小值。如果销售队列第一个元素的数量被减为0，则移除它。</p><p>循环结束后判断，如果当前元素数量还大于0，则把它加入到采购队列中。</p><p>外层<code>orders</code>的循环中，对销售类订单的循环和采购类类似。</p><p>循环结束后，需要分别获取两个优先队列中，每个订单的数量之和。使用<code>Java8</code>的<code>Stream</code>简化代码。最后再对<code>1000000007L</code>取余后，返回结果。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#B392F0;"> Solution</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">    Queue</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> buy</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> PriorityQueue</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">&lt;&gt;((</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">    Queue</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> sell</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> PriorityQueue</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">&lt;&gt;((</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">a</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> getNumberOfBacklogOrders</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[][]</span><span style="--shiki-light:#B07D48;--shiki-dark:#FFAB70;"> orders</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> order</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> orders</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">            checkAndRemove</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">order</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> getSum</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> getSum</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)((</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">mapToLong</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">arr </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">mapToLong</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">arr </span><span style="--shiki-light:#999999;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">())</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> %</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">                (</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1000000007L</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">     * 检查对应的队列中，是否有需要消除的元素。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#B07D48;--shiki-dark:#FFAB70;"> cur</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> checkAndRemove</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#FFAB70;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;"> // 当前是采购订单，查询销售订单列表。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            while</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">isEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &lt;=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">                int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> Math</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">                cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> -=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> -=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                    sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            while</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">isEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">                int</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;"> Math</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">                cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> -=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#999999;--shiki-dark:#F97583;"> -=</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> min</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">peek</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">()[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                    buy</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">remove</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#E1E4E8;">                sell</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">cur</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：<code>O(nlog⁡n)</code>，其中<code>n</code>是数组<code>orders</code>的长度。需要遍历数组<code>orders</code>一次，对于每个元素处理优先队列的时间是<code>O(log⁡n)</code>，共需要<code>O(log⁡n)</code>的时间，遍历结束之后计算剩余的积压订单总数需要<code>O(log⁡n)</code>的时间。</p><p>空间复杂度：<code>O(n)</code>，其中<code>n</code>是数组<code>orders</code>的长度。优先队列需要<code>O(n)</code>的空间。</p>`,9);function m(B,v){const i=p("Badge");return t(),k("div",null,[E,s("h2",r,[s("a",d,[s("span",null,[g,a(),n(i,{text:"Mid",type:"warning",vertical:"middle"})])])]),y,s("h2",c,[s("a",F,[s("span",null,[o,a(),n(i,{text:"Mid",type:"warning",vertical:"middle"})])])]),A])}const D=h(e,[["render",m],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/40algo/111.priority/","title":"优先队列专题","lang":"zh-CN","frontmatter":{"title":"优先队列专题","date":"2023-01-02T23:31:12.000Z","permalink":"/40algo/111.priority/","order":111,"tag":["优先队列"],"description":"相关信息 此处记录优先级队列相关的题目，主要来自力扣。 lc-855 todo lc-1801 根据题意，创建2个优先队列，其比较规则相反。然后遍历orders。在循环中，先判断当前订单是否为采购类。 如果是，则继续判断（while）：如果销售订单队列不为空，且其第一个元素的价格小于当前订单的价格，且当前订单的数量大于0，则进入while循环。 循环内...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/40algo/111.priority/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"优先队列专题"}],["meta",{"property":"og:description","content":"相关信息 此处记录优先级队列相关的题目，主要来自力扣。 lc-855 todo lc-1801 根据题意，创建2个优先队列，其比较规则相反。然后遍历orders。在循环中，先判断当前订单是否为采购类。 如果是，则继续判断（while）：如果销售订单队列不为空，且其第一个元素的价格小于当前订单的价格，且当前订单的数量大于0，则进入while循环。 循环内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-02T15:56:11.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"优先队列"}],["meta",{"property":"article:published_time","content":"2023-01-02T23:31:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-02T15:56:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优先队列专题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-02T23:31:12.000Z\\",\\"dateModified\\":\\"2023-01-02T15:56:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"lc-855","slug":"lc-855","link":"#lc-855","children":[]},{"level":2,"title":"lc-1801","slug":"lc-1801","link":"#lc-1801","children":[]}],"git":{"createdTime":1672674971000,"updatedTime":1672674971000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1}]},"readingTime":{"minutes":2.06,"words":618},"filePathRelative":"40algo/111.priority.md","localizedDate":"2023年1月3日","autoDesc":true}');export{D as comp,_ as data};
