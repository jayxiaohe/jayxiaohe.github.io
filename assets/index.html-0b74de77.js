import{ab as c,G as o,H as l,E as n,U as s,N as a,ac as i,ad as u,X as e}from"./framework-756f1659.js";const d={},r=u(`<h2 id="💬-描述" tabindex="-1"><a class="header-anchor" href="#💬-描述" aria-hidden="true">#</a> 💬 描述</h2><p>给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。 <strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            &lt;---
 /   \\
2     3         &lt;---
 \\     \\
  5     4       &lt;---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="📋-代码1-dfs" tabindex="-1"><a class="header-anchor" href="#📋-代码1-dfs" aria-hidden="true">#</a> 📋 代码1- DFS</h2><p>按照 根结点 -&gt; 右子树 -&gt; 左子树 的顺序访问，就可以保证每层都是最先访问最右边的节点。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
     <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">rightSideView</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 首次加入时，深度为0。</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果深度 == 结果集中的元素数。说明这是当前层的第一个元素。需要加到结果集中。否则不加。为什么呢？首先第一个进入dfs时，传入的深度为0，res长度也为0。这样可以把root加到res中。</span>
        接着深度<span class="token operator">++</span>，考察右孩子。此时深度又等于res元素数，会把右孩子加入res。继续往下<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
        若到某一层右孩子为<span class="token keyword">null</span>，会直接在上方返回，这样就会考虑左孩子。从而把左孩子加入集合。若左孩子也是<span class="token keyword">null</span>，会进行回溯，回溯到最近的、未考察过左孩子的节点，去考察它的左孩子（回溯时深度也会变小）。此时深度和res的长度是不相等的，这个左孩子不能加到res。就这样一路回溯。遇到合适的元素就会加到res。直到所有元素都考察一遍。
        <span class="token comment">// 这里把深度和结果集的元素数结合了起来，这个思路是以前没想到的- - </span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">==</span> res<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 准备考察下层元素，深度+1。</span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 先考察右孩子。这样每次就能先判断右边的元素。</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> depth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>复杂度： 时间和空间均为O(n) 。</strong><br></p><h2 id="📋-代码2-bfs" tabindex="-1"><a class="header-anchor" href="#📋-代码2-bfs" aria-hidden="true">#</a> 📋 代码2- BFS</h2><p>对二叉树进行层次遍历，那么对于每层来说，最右边的结点一定是最后被遍历到的。二叉树的层次遍历可以用广度优先搜索实现。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">rightSideView</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取当前queue的长度，这也 代表着二叉树当前层元素的数量。</span>
            size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 遍历当前层的元素。为什么用普通for循环？</span>
            <span class="token comment">// 因为这样可以知道是否到达了当前层的最后一个元素。</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 把当前元素弹出，把它的孩子节点压入。先压左后压右，这样每层最右边的一个元素的值就是需要加到结果集中的。</span>
                <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// 如果当前节点是当前层的最后一个节点，则把它的值加到结果集中。</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>复杂度： 时间和空间均为O(n) 。</strong><br></p><h2 id="💡-思路" tabindex="-1"><a class="header-anchor" href="#💡-思路" aria-hidden="true">#</a> 💡 思路</h2>`,15),k={href:"https://leetcode-cn.com/u/sweetiee/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=n("a",{href:"https://leetcode-cn.com/problems/binary-tree-right-side-view/",class:"LinkCard",target:"_blank"},"LeetCode-199",-1),b=n("br",null,null,-1);function f(h,g){const t=e("ExternalLinkIcon"),p=e("center");return o(),l("div",null,[r,n("p",null,[s("已经写在上方代码注释中。有些之前没想到的思路。代码主要参考自"),n("a",k,[s("甜姨"),a(t)]),s("。")]),v,a(p,null,{default:i(()=>[m]),_:1}),b])}const y=c(d,[["render",f],["__file","index.html.vue"]]);export{y as default};
