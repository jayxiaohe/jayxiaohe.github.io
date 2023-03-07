import{ab as l,G as c,H as i,E as s,U as n,N as a,ac as u,ad as o,X as e}from"./framework-756f1659.js";const d={},r=s("h2",{id:"🔗-链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#🔗-链接","aria-hidden":"true"},"#"),n(" 🔗 链接")],-1),k={href:"https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/",target:"_blank",rel:"noopener noreferrer"},m=o(`<br><h2 id="📋-代码1" tabindex="-1"><a class="header-anchor" href="#📋-代码1" aria-hidden="true">#</a> 📋 代码1</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>	
		<span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
		
		<span class="token class-name">ListNode</span> fast <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
		<span class="token class-name">ListNode</span> slow <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
		
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="💡-思路" tabindex="-1"><a class="header-anchor" href="#💡-思路" aria-hidden="true">#</a> 💡 思路</h2>`,5),b=s("br",null,null,-1),h={href:"https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/",target:"_blank",rel:"noopener noreferrer"},f=o(`<h2 id="📋-代码2" tabindex="-1"><a class="header-anchor" href="#📋-代码2" aria-hidden="true">#</a> 📋 代码2</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
 <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">kthToLast</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
		<span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
		
		<span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">--</span> <span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> slow<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,3);function w(x,_){const t=e("ExternalLinkIcon"),p=e("center");return c(),i("div",null,[r,s("p",null,[s("a",k,[n("LeetCode-19"),a(t)]),n(" 该题和 "),s("a",v,[n("面试题 02.02"),a(t)]),n(" 类似")]),m,s("p",null,[n("这种题有一个固定的“套路”，因为要获取目标节点的前一个节点，这里创建哑节点，令它的后继节点为head。 之后，fast/slow都指向它(也可以指向head，但这样必须引入一个计数器，判断要删除的是否是头结点。)。先把fast右移n位；之后，再同时移动fast/slow，直到fast指向最后一个节点。此时，fast指到了最后一个节点，slow指到了目标节点的前一个节点（而不是目标节点）。 之后使用slow.next = slow.next.next即可删除目标节点。最后，使用dummy.next返回需要的节点头即可。 "),b,n(" 而对于"),s("a",h,[n("面试题 02.02"),a(t)]),n(" ，需要返回倒数第k个节点的值，不需要得到目标节点的前驱节点，因此不需要设置哑节点。首先，fast/slow都指向head，之后先移动fast n次，再同时移动fast/slow。直到fast指向null。此时，slow就是目标节点，返回其值即可。代码如下：")]),f,a(p,null,{default:u(()=>[n("End")]),_:1})])}const N=l(d,[["render",w],["__file","index.html.vue"]]);export{N as default};
