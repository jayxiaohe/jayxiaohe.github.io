import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as e,d as c,w as l,e as t,r as d,o as n}from"./app-BUJ2iQsf.js";const s={},r=t('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本文部分内容来自网络。侵删。</p></div><h2 id="容器概述" tabindex="-1"><a class="header-anchor" href="#容器概述"><span>容器概述</span></a></h2><p>Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 <code>Collection</code>接口，主要用于存放单一元素；另一个是 <code>Map</code> 接口，主要用于存放键值对。对于<code>Collection</code> 接口，下面又有三个主要的子接口：<code>List</code>、<code>Set</code> 和 <code>Queue</code>。主要接口和实现类如下图所示。</p><figure><img src="https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/20220328225601.png" alt="20220327132758" tabindex="0" loading="lazy"><figcaption>20220327132758</figcaption></figure><blockquote><p><em>图中只列举了主要的继承派生关系，并没有列举所有关系。</em></p></blockquote><h2 id="list-set-queue-map-四者的区别" tabindex="-1"><a class="header-anchor" href="#list-set-queue-map-四者的区别"><span>List, Set, Queue, Map 四者的区别？</span></a></h2><ul><li><p><code>List</code>存储的元素是有序的、可重复的。</p></li><li><p><code>Set</code>存储的元素是无序的、不可重复的。</p></li><li><p><code>Queue</code>按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。</p></li><li><p><code>Map</code>使用键值对（key-value）存储。key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。</p></li><li></li></ul><h2 id="如何选用集合" tabindex="-1"><a class="header-anchor" href="#如何选用集合"><span>如何选用集合？</span></a></h2><p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 <code>Map</code> 接口下的集合，需要排序时选择 <code>TreeMap</code>,不需要排序时就选择 <code>HashMap</code>,需要保证线程安全就选用 <code>ConcurrentHashMap</code>。</p><p>当我们只需要存放元素值时，就选择实现<code>Collection</code> 接口的集合，需要保证元素唯一时选择实现 <code>Set</code> 接口的集合比如 <code>TreeSet</code> 或 <code>HashSet</code>，不需要就选择实现 <code>List</code> 接口的比如 <code>ArrayList</code> 或 <code>LinkedList</code>，然后再根据实现这些接口的集合的特点来选用。</p><h2 id="为什么要使用集合" tabindex="-1"><a class="header-anchor" href="#为什么要使用集合"><span>为什么要使用集合？</span></a></h2><p>当我们需要保存一组类型相同的数据的时候，我们应该是用一个容器来保存，这个容器就是数组，但是，使用数组存储对象具有一定的弊端， 因为我们在实际开发中，存储的数据的类型是多种多样的，于是，就出现了“集合”，集合同样也是用来存储多个数据的。</p><p>数组的缺点是一旦声明之后，长度就不可变了；同时，声明数组时的数据类型也决定了该数组存储的数据的类型；而且，数组存储的数据是有序的、可重复的，特点单一。 但是集合提高了数据存储的灵活性，Java 集合不仅可以用来存储不同类型不同数量的对象，还可以保存具有映射关系的数据。</p><h2 id="集合框架底层数据结构总结" tabindex="-1"><a class="header-anchor" href="#集合框架底层数据结构总结"><span>集合框架底层数据结构总结</span></a></h2>',14),p={id:"list",tabindex:"-1"},h={class:"header-anchor",href:"#list"},u=e("strong",null,"List",-1),m=t('<ul><li><code>Arraylist</code>： <code>Object[]</code> 数组</li><li><code>Vector</code>：<code>Object[]</code> 数组</li><li><code>LinkedList</code>： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)</li></ul><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h3><ul><li><code>HashSet</code>(无序，唯一): 基于 <code>HashMap</code> 实现的，底层采用 <code>HashMap</code> 来保存元素</li><li><code>LinkedHashSet</code>: <code>LinkedHashSet</code> 是 <code>HashSet</code> 的子类，并且其内部是通过 <code>LinkedHashMap</code> 来实现的。有点类似于<code>LinkedHashMap</code>， 其内部是基于 <code>HashMap</code> 实现</li><li><code>TreeSet</code>(有序，唯一): 红黑树(自平衡的排序二叉树)</li></ul><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue"><span>Queue</span></a></h3><ul><li><code>PriorityQueue</code>: <code>Object[]</code> 数组来实现二叉堆</li><li><code>ArrayQueue</code>: <code>Object[]</code> 数组 + 双指针</li></ul><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map</span></a></h3><ul><li><code>HashMap</code>： JDK1.8 之前 <code>HashMap</code> 由数组+链表组成的，数组是 <code>HashMap</code> 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。</li><li><code>LinkedHashMap</code>： <code>LinkedHashMap</code> 继承自 <code>HashMap</code>，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，<code>LinkedHashMap</code> 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看：<a href="https://www.imooc.com/article/22931" target="_blank" rel="noopener noreferrer">《LinkedHashMap 源码详细分析（JDK1.8）》</a></li><li><code>Hashtable</code>： 数组+链表组成的，数组是 <code>Hashtable</code> 的主体，链表则是主要为了解决哈希冲突而存在的</li><li><code>TreeMap</code>： 红黑树（自平衡的排序二叉树）</li></ul>',7);function g(y,_){const a=d("RouteLink");return n(),i("div",null,[r,e("h3",p,[e("a",h,[e("span",null,[c(a,{to:"/pages/list/"},{default:l(()=>[u]),_:1})])])]),m])}const k=o(s,[["render",g],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/01java/20coll/intro/","title":"容器概述","lang":"zh-CN","frontmatter":{"title":"容器概述","order":5,"date":"2022-03-01T11:26:21.000Z","permalink":"/01java/20coll/intro/","icon":"wenzhang","category":["学习笔记","Java容器"],"tag":["基础"],"description":"注意 本文部分内容来自网络。侵删。 容器概述 Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 Collection接口，主要用于存放单一元素；另一个是 Map 接口，主要用于存放键值对。对于Collection 接口，下面又有三个主要的子接口：List、Set 和 Queue。主要接口和实现类如下图所示。 202203271327582...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/01java/20coll/intro/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"容器概述"}],["meta",{"property":"og:description","content":"注意 本文部分内容来自网络。侵删。 容器概述 Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 Collection接口，主要用于存放单一元素；另一个是 Map 接口，主要用于存放键值对。对于Collection 接口，下面又有三个主要的子接口：List、Set 和 Queue。主要接口和实现类如下图所示。 202203271327582..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/20220328225601.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T06:12:12.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2022-03-01T11:26:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-18T06:12:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"容器概述\\",\\"image\\":[\\"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/20220328225601.png\\"],\\"datePublished\\":\\"2022-03-01T11:26:21.000Z\\",\\"dateModified\\":\\"2024-08-18T06:12:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"容器概述","slug":"容器概述","link":"#容器概述","children":[]},{"level":2,"title":"List, Set, Queue, Map 四者的区别？","slug":"list-set-queue-map-四者的区别","link":"#list-set-queue-map-四者的区别","children":[]},{"level":2,"title":"如何选用集合？","slug":"如何选用集合","link":"#如何选用集合","children":[]},{"level":2,"title":"为什么要使用集合？","slug":"为什么要使用集合","link":"#为什么要使用集合","children":[]},{"level":2,"title":"集合框架底层数据结构总结","slug":"集合框架底层数据结构总结","link":"#集合框架底层数据结构总结","children":[{"level":3,"title":"List","slug":"list","link":"#list","children":[]},{"level":3,"title":"Set","slug":"set","link":"#set","children":[]},{"level":3,"title":"Queue","slug":"queue","link":"#queue","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]}]}],"git":{"createdTime":1664722755000,"updatedTime":1723961532000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1},{"name":"jayxiaohe","email":"hept//github0712","commits":1}]},"readingTime":{"minutes":3.64,"words":1092},"filePathRelative":"01java/20coll/05.容器概述.md","localizedDate":"2022年3月1日","autoDesc":true}');export{k as comp,v as data};
