import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-BUJ2iQsf.js";const l={},n=t(`<div class="hint-container info"><p class="hint-container-title">Collections 工具类常用方法：</p><ol><li>排序</li><li>查找,替换操作</li><li>同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合)</li></ol></div><h2 id="排序操作" tabindex="-1"><a class="header-anchor" href="#排序操作"><span>排序操作</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> reverse</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//反转</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> shuffle</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//随机排序</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> sort</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//按自然排序的升序排序</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> sort</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Comparator c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//定制排序，由Comparator控制排序逻辑</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> swap</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> j</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//交换两个索引位置的元素</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> rotate</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> distance</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找-替换操作" tabindex="-1"><a class="header-anchor" href="#查找-替换操作"><span>查找,替换操作</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> binarySearch</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Object key</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//对List进行二分查找，返回索引，注意List必须是有序的</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> max</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Collection coll</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> max</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Collection coll</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Comparator c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> fill</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Object obj</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//用指定的元素代替指定list中的所有元素</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> frequency</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Collection c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Object o</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//统计元素出现次数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> indexOfSubList</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> List target</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;"> replaceAll</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Object oldVal</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> Object newVal</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//用新元素替换旧元素</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步控制" tabindex="-1"><a class="header-anchor" href="#同步控制"><span>同步控制</span></a></h2><p><code>Collections</code> 提供了多个<code>synchronizedXxx()</code>方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。</p><p>我们知道 <code>HashSet</code>，<code>TreeSet</code>，<code>ArrayList</code>,<code>LinkedList</code>,<code>HashMap</code>,<code>TreeMap</code> 都是线程不安全的。<code>Collections</code> 提供了多个静态方法可以把他们包装成线程同步的集合。</p><p><strong>最好不要用下面这些方法，效率非常低，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合。</strong></p><p>方法如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#393a34;--shiki-dark:#e1e4e8;--shiki-light-bg:#ffffff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes vitesse-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">synchronizedCollection</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Collection</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">  c</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;"> //返回指定 collection 支持的同步（线程安全的）collection。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">synchronizedList</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">List</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> list</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;">//返回指定列表支持的同步（线程安全的）List。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">synchronizedMap</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Map</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">K</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">V</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> m</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;"> //返回由指定映射支持的同步（线程安全的）Map。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#B392F0;">synchronizedSet</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">Set</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#E1E4E8;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#6A737D;"> //返回指定 set 支持的同步（线程安全的）set。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),e=[n];function h(k,p){return a(),s("div",null,e)}const E=i(l,[["render",h],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/01java/20coll/collections/","title":"Collections工具类","lang":"zh-CN","frontmatter":{"title":"Collections工具类","order":20,"date":"2022-03-28T23:05:31.000Z","permalink":"/01java/20coll/collections/","icon":"wenzhang","category":["学习笔记","Java容器"],"tag":["collections"],"description":"Collections 工具类常用方法： 排序 查找,替换操作 同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合) 排序操作 查找,替换操作 同步控制 Collections 提供了多个synchronizedXxx()方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。 我们知道 ...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/01java/20coll/collections/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"Collections工具类"}],["meta",{"property":"og:description","content":"Collections 工具类常用方法： 排序 查找,替换操作 同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合) 排序操作 查找,替换操作 同步控制 Collections 提供了多个synchronizedXxx()方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。 我们知道 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T06:12:12.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"collections"}],["meta",{"property":"article:published_time","content":"2022-03-28T23:05:31.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-18T06:12:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Collections工具类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-28T23:05:31.000Z\\",\\"dateModified\\":\\"2024-08-18T06:12:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"排序操作","slug":"排序操作","link":"#排序操作","children":[]},{"level":2,"title":"查找,替换操作","slug":"查找-替换操作","link":"#查找-替换操作","children":[]},{"level":2,"title":"同步控制","slug":"同步控制","link":"#同步控制","children":[]}],"git":{"createdTime":1664722755000,"updatedTime":1723961532000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1},{"name":"jayxiaohe","email":"hept//github0712","commits":1}]},"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"01java/20coll/20collections.md","localizedDate":"2022年3月29日","autoDesc":true}');export{E as comp,o as data};
