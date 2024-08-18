import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,e as i}from"./app-BUJ2iQsf.js";const l={},o=i('<h2 id="_1-执行引擎概述" tabindex="-1"><a class="header-anchor" href="#_1-执行引擎概述"><span>1. 执行引擎概述</span></a></h2><figure><img src="https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220229989.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>执行引擎是 Java 虚拟机核心的组成部分之一。</li><li>“虚拟机”是一个相对于“物理机”的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而虚拟机的执行引擎则是由软件自行实现的，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，能够执行那些不被硬件直接支持的指令集格式。</li><li>JVM 的主要任务是负责装载字节码到其内部，但字节码并不能够直接运行在操作系统之上，因为字节码指令并非等价于本地机器指令，它内部包含的仅仅只是一些能够被 JVM 所识别的字节码指令、符号表，以及其他辅助信息。</li><li>那么，如果想要让一个 Java 程序运行起来，执行引擎(Execution Engine)的任务就是将字节码指令解释/编译为对应平台上的本地机器指令才可以。简单来说，JVM 中的执行引擎充当了将高级语言翻译为机器语言的译者。</li></ul><h3 id="_1-1-执行引擎的工作过程" tabindex="-1"><a class="header-anchor" href="#_1-1-执行引擎的工作过程"><span>1.1 执行引擎的工作过程</span></a></h3><figure><img src="https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220229931.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>执行引擎在执行的过程中究竟需要执行什么样的字节码指令完全依赖于pc寄存器。</li><li>每当执行完一项指令操作后，pc寄存器就会更新下一条需要被执行的指令地址。</li><li>当然方法在执行的过程中，执行引擎有可能会通过存储在局部变量表中的对象引用准确定位到存储在 Java 堆区中的对象实例信息，以及通过对象头中的元数据指针定位到目标对象的类型信息。</li></ol><blockquote><p>从外观上来看，所有的 Java 虚拟机的执行引擎输入、输出都是一致的：输入的是字节码二进制流，处理过程是字节码解析执行的等效过程，输出的是执行结果。</p></blockquote><h2 id="_2-java-代码编译和执行过程" tabindex="-1"><a class="header-anchor" href="#_2-java-代码编译和执行过程"><span>2. Java 代码编译和执行过程</span></a></h2><figure><img src="https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220228498.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上图中，绿色部分为解释执行过程，蓝色为编译执行的过程。大部分的程序代码转换成物理机的目标代码或虚拟机能执行的指令集之前，都需要经过上图中的各个步骤。</p><p>橙色部分由 <code>javac</code> 完成编译，属于前端编译。最终会形成线性字节码执行流。这部分和 JVM 是无关的。</p><h3 id="_2-1-问题-什么是解释器-lnterpreter-什么是-jit-编译器" tabindex="-1"><a class="header-anchor" href="#_2-1-问题-什么是解释器-lnterpreter-什么是-jit-编译器"><span>2.1 问题：什么是解释器（lnterpreter)，什么是 JIT 编译器？</span></a></h3><p><strong>解释器:</strong> 当Java虚拟机启动时会根据预定义的规范对字节码采用逐行解释的方式执行，将每条字节码文件中的内容“翻译”为对应平台的本地机器指令执行。</p><p><strong>JIT(Just In Time Compiler)编译器：</strong> 就是虚拟机将源代码直接编译成和本地机器平台相关的机器语言。</p><h3 id="_2-2-问题-为什么说-java-是半编译半解释型语音" tabindex="-1"><a class="header-anchor" href="#_2-2-问题-为什么说-java-是半编译半解释型语音"><span>2.2 问题：为什么说 Java 是半编译半解释型语音？</span></a></h3><p>JDK 1.0 时代，将 Java 语言定位为“解释执行”还是比较准确的。再后来，Java 也发展出可以直接生成本地代码的编译器。</p><p>现在 JVM 在执行 Java 代码的时候，通常都会将解释执行与编译执行二者结合起来进行。</p><h2 id="_3-解释器" tabindex="-1"><a class="header-anchor" href="#_3-解释器"><span>3. 解释器</span></a></h2><p>JVM 设计者们的初衷仅仅只是单纯地为了满足 Java 程序实现跨平台特性，因此避免采用静态编译的方式直接生成本地机器指令，从而诞生了实现解释器在运行时采用逐行解释宇节码执行程序的想法。</p><h3 id="_3-1-解释器工作机制-或工作任务" tabindex="-1"><a class="header-anchor" href="#_3-1-解释器工作机制-或工作任务"><span>3.1 解释器工作机制（或工作任务）</span></a></h3><ul><li>解释器真正意义上所承担的角色就是一个运行时“翻译者”，将字节码文件中的内容“翻译”为对应平台的本地机器指令执行。</li><li>当一条字节码指令被解释执行完成后，接着再根据pc寄存器中记录的下一条需要被执行的字节码指令执行解释操作。</li></ul><h3 id="_3-2-解释器分类" tabindex="-1"><a class="header-anchor" href="#_3-2-解释器分类"><span>3.2 解释器分类</span></a></h3><p>在Java的发展历史里，一共有两套解释执行器，即古老的字节码解释器、现在普遍使用的模板解释器。</p><ul><li>字节码解释器在执行时通过纯软件代码模拟字节码的执行，效率非常低下。</li><li>而模板解释器将每一条字节码和一个模板函数相关联，模板函数中直接产生这条字节码执行时的机器码，从而很大程度上提高了解释器的性能。 <ul><li>在 HotSpot VM 中，解释器主要由 <code>Interpreter</code> 模块和 <code>code</code> 模块构成。<code>Interpreter</code> 模块：实现了解释器的核心功能。<code>code</code> 模块：用于管理 HotSpot 在运行时生成的本地机器指令。</li></ul></li></ul><h3 id="_3-3-现状" tabindex="-1"><a class="header-anchor" href="#_3-3-现状"><span>3.3 现状</span></a></h3><ul><li>由于解释器在设计和实现上非常简单，因此除了 Java 语言之外，还有许多高级语言同样也是基于解释器执行的，比如 Python、Perl、Ruby 等。但是在今天，基于解释器执行己经沦落为低效的代名词，并且时常被一些 C/C++ 程序员所调侃。</li><li>为了解决这个问題，JVM 平台支持一种叫作即时编译的技术。即时编译的目的是避函数被解释执行，而是将整个函数体编译成为机器码，每次函数执行时，只执行编译后的机器码即可。这种方式可以使执行效率大幅度提升。</li><li>不过无论如何，基于解释器的执行模式仍然为中间语言的发展做出了不可磨灭的贡献。</li></ul><h2 id="_4-jit-编译器" tabindex="-1"><a class="header-anchor" href="#_4-jit-编译器"><span>4. JIT 编译器</span></a></h2><h3 id="_4-1-java-代码的执行分类" tabindex="-1"><a class="header-anchor" href="#_4-1-java-代码的执行分类"><span>4.1 Java 代码的执行分类</span></a></h3><ul><li>第一种是将源代码编译成字节码文件，然后在运行时通过解释器将字节码文件转为机器码执行</li><li>第二种是编译执行（直接编译成机器码）。现代虚拟机为了提高执行效率，会使用即时编译技术(JIT)将方法编译成机器码后再执行</li><li>HotSpot VM 是目前市面上高性能虚拟机的代表作之一。它采用解释器与即时编译器并存的架构。在Java虚拟机运行时，解释器和即时编译器能够相互协作，各自取长补短，尽力去选择最合适的方式来权衡编译本地代码的时间和直接解释执行代码的时间。</li><li>在今天，Java 程序的运行性能早己脱胎换骨，己经达到了可以和 C/C++ 程序一较高下的地步。</li></ul><blockquote><p>既然 Hotspot 已经内置了 JIT 编译器，为什么还需要使用解释器拖累性能呢？</p></blockquote><p>当程序启动后，解释器可以马上发挥作用，省去编译的时间，立即执行。编译器要想发挥作用，把代码编译成本地代码，需要一定的执行时间。但编译为本地代码 后，执行效率高。 所以，尽管 JRockit 中程序的执行性能会非常高效，但程序在启动时必然需要花费更长的时间来进行编译。对于服务端应用来说，启动时间并非是关注重点，但对于那些看中启动时间的应用场景而言，或许就需要采用解释器与即时编译器并存的架构来换取一个平衡点。在此模式下，当 Java 虚拟器启动时，解释器可以首先发挥作用，而不必等待即时编译器全部编译完成后再执行，这样可以省去许多不必要的编译时间。随着时间的推移，编译器发挥作用，把越来越多的代码编译成本地代码，获得更高的执行效率。 同时，解释执行在编译器进行激进优化不成立的时候，作为编译器的“逃生门”。</p><h3 id="_4-2-hotspot-jvm-的执行方式" tabindex="-1"><a class="header-anchor" href="#_4-2-hotspot-jvm-的执行方式"><span>4.2 HotSpot JVM 的执行方式</span></a></h3><p>当虚拟机启动的时候，解释器可以首先发挥作用，而不必等待即时编译器全部编译完成再执行，这样可以省去许多不心要的编译时间。并且随着程序运行时间的推移，即时编译器逐渐发挥作用，根据热点探测功能，将有价值的字节码编译为本地机器指令，以换取更高的程序执行效率。</p><h3 id="_4-3-jit-编译器细节" tabindex="-1"><a class="header-anchor" href="#_4-3-jit-编译器细节"><span>4.3 JIT 编译器细节</span></a></h3><ul><li>Java 语言的“编译期”其实是一段“不确定”的操作过程，因为它可能是指一个前端编译器（其实叫“编译器的前端”更准确一些）把 java 文件转变成 class 文件的过程；</li><li>也可能是指虚拟机的后端运行期编译器(JIT编译器，Just In Time CompiIer)把字节码转变成机器码的过程。</li><li>还可能是指使用静态提前编译器(AOT 编译器，Ahead Of Time Compiler)直接把 java 文件编译成本地机器代码的过程。</li></ul><blockquote><p>前端编译器： Sun 的 Javac、Eclipse JDT 中的增量式编译器（ECJ）。 JIT编译器：HotSpot VM 的 CI、C2 编译器。 AOT编译器：GNU Compiler for the Java (GCJ)、Excelsior JET。</p></blockquote><h3 id="_4-4-如何选择" tabindex="-1"><a class="header-anchor" href="#_4-4-如何选择"><span>4.4 如何选择？</span></a></h3><p>当然是否需要启动JIT编译器将字节码直接编译为对应平台的本地机器指令，则需要根据代码被调用执行的频率而定。关于那些需要被编译为本地代码的字节码，也被称之为==“热点代码”，JIT编译器在运行时会针对那些频繁被调用的“热点代码”做出深度优化==，将其直接编译为对应平台的本地机器指令，以此提升Java程序的执行性能。</p><p>一个被多次调用的方法，或者是一个方注体内部循环次数较多的循环体都可以被称之为“热点代码”，因此都可以通过JIT编译器编译为本地机器指令。由于这种编译方式发生在方法的执行过程中，因此也被称之为栈上替换，或简称为OSR(On Stack Rep1acement）編译。</p><p>一个方法宄竟要被调用多少次，或者一个循环体宄竟需要执行多少次循环才可以达到这个标准？必然需要一个明确的阈值，JIT编译器才会将这些“热点代码”编译为本地机器指令执行。这里主要依靠热点探测功能。</p><p>目前Hotspot VM所采用的热点探测方式是基于计数器的热点探测。</p><p>采用基于计数器的热点探测，Hotspot将会为每一个方法都建立2个不同类型的计数器，分别为方法调用计数器(lnvocation Counter)和回边计数器(Back Edge Counter）</p><ul><li>方法调用计数器用于统计方法的调用次数</li><li>回边计数器则用于统计循环体执行的循环次数</li></ul><h4 id="_4-4-1-方法调用计数器" tabindex="-1"><a class="header-anchor" href="#_4-4-1-方法调用计数器"><span>4.4.1 方法调用计数器</span></a></h4><ul><li>这个计数器就用于统计方法被调用的次数，它的默认阈值在Client模式下是1500次，在server模式下是10000次。超过这个阈值，就会触发JIT编译。</li><li>这个阈值可以通过虚拟机参数 <code>-XX:CompileThreshold</code> 来人为设定。</li><li>当一个方法被调用时，会先检查该方法是否存在被JIT编译过的版本，如果存在，则优先使用编译后的本地代码来执行。如果不存在己被编译过的版本，则将此方法的调用计数器值加1，然后判断方法调用计数器与回边计数器值之和是否超过方法计数器的阈值。如果己超过阈值，那么将会向即时编译器提交一个该方法的代码编译请求。</li></ul><p><strong>热度衰减</strong></p><p>如果不做任何设置，方法调用计数器统计的并不是方法被调用的绝对次数，而是一个相对的执行频率，即一段时间之内方法被调用的次数。当超过一定的时间限度，如果方法的调用次数仍然不足以让它提交给即时编译器编译，那这个方法的调用计数器就会被减少一半，这个过程称为方法调用计数器热度的衰减(Counter Decay)，而这段时间就称为此方法统计的半衰周期(counter Half Life Time)。</p><p>进行热度衰减的动作是在虚拟机进行垃圾收集时顺便进行的，可以使用虚拟机参数 <code>-XX:-UseCounterDecay</code> 来关热度衰减，让方法计数器统计方注调用的绝对次数，这样，只要系统运行时间足够长，纶大部分方法都会被编译成本地代码。 另外，可以使用 <code>-XX:CounterHalfLifeTime</code> 参数设置半衰周期的时间，单位是秒。</p><h4 id="_4-4-2-回边计数器" tabindex="-1"><a class="header-anchor" href="#_4-4-2-回边计数器"><span>4.4.2 回边计数器</span></a></h4><p>它的作用是统计一个方法中循环体代码执行的次数，在字节码中遇到控制流向后跳转的指令称为“回边”（BackEdge）。显然，建立回边计数器统计的目的就是为了触发<strong>OSR</strong>编译。</p><h3 id="_4-5-hotspot-vm-可以设置程序执行方式" tabindex="-1"><a class="header-anchor" href="#_4-5-hotspot-vm-可以设置程序执行方式"><span>4.5 HotSpot VM 可以设置程序执行方式</span></a></h3><p>缺省情况下HotSpot VM是采用解释器与即时编译器并存的架构，当然开发人员可以根据具体的应用场景，通过命令显式地为JVM指定在运行时到底是完全采用解释器执行，还是完全采用即时编译器执行：如下所示：</p><blockquote><p><code>-Xint</code>：完全采用解释器模式执行程序 <code>-Xcomp</code>: 完全采用即时编译器模式执行程序。如果即时编译出现问题，解释器会介入执行 <code>-Xmixed</code>: 采用解释器+即时编译器的混合模式共同执行程序</p></blockquote><h3 id="_4-6-hotspot-vm-中-jit分类" tabindex="-1"><a class="header-anchor" href="#_4-6-hotspot-vm-中-jit分类"><span>4.6 HotSpot VM 中 JIT分类</span></a></h3><p>hotspot jvm 内置了两个jit编译器，分别是client compiler（C1编译器）和server compiler（C2编译器），可通过下列指令显式指定使用哪种即时编译器</p><ul><li><code>-client</code> 指定java虚拟机运行在client模式下，并使用C1编译器。C1编译器会堆字节码进行简单和可靠的优化，耗时短。以达到更快的编译速度。</li><li><code>-server</code> 指定java虚拟机运行在server模式下，并使用C2编译器。C2进行较长时间的优化，以及激进优化。但优化的代码执行效率更高。</li></ul><p>C1主要有方法内联，去虚拟化冗余消除</p><ul><li>方法内联：将引用函数代码编译到引用点处，这样可以减少栈帧的生成，减少参数传递以及跳转过程</li><li>去虚拟化：对唯一的实现类进行内联</li><li>冗余消除：在运行期间，把一些不会运行的代码折叠掉</li></ul><p>C2的优化主要是在全局层面，逃逸分析是优化的基础，基于逃逸分析在C2上有如下几种优化</p><ul><li>标量替换：用标量值替换聚合对象的属性值</li><li>栈上分配：对于未逃逸的对象分配对象在栈而不是堆</li><li>同步消除：清除同步操作，通常指synchronized</li></ul><p>分层编译策略： 程序解释执行（不开启性能监控）可以触发C1编译，将字节码编译成机器码，可以进行简单优化，也可以加上性能监控，C2编译会根据性能监控信息进行激进优化。 当显式指定了-server   时，默认开启分层编译策略，由C1编译器和C2编译器相互协作共同来执行编译任务。</p><p>总结：</p><ul><li>一般来讲，JIT 编译出来的机器码性能比解释器高。</li><li>C2编译器启动时长比C1编译器慢，系统稳定执行以后，C2编译器执行速度远远快于C1编译器。</li></ul>',63),n=[o];function r(p,s){return t(),a("div",null,n)}const d=e(l,[["render",r],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/01java/40jvm/engine/","title":"执行引擎","lang":"zh-CN","frontmatter":{"title":"执行引擎","date":"2022-05-21T16:32:26.000Z","order":3,"permalink":"/01java/40jvm/engine/","icon":"wenzhang","description":"1. 执行引擎概述 执行引擎是 Java 虚拟机核心的组成部分之一。 “虚拟机”是一个相对于“物理机”的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而虚拟机的执行引擎则是由软件自行实现的，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，能够执行那些不被硬件直接支持的指令集格式。...","head":[["meta",{"property":"og:url","content":"https://i.iyes.life/01java/40jvm/engine/"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"执行引擎"}],["meta",{"property":"og:description","content":"1. 执行引擎概述 执行引擎是 Java 虚拟机核心的组成部分之一。 “虚拟机”是一个相对于“物理机”的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而虚拟机的执行引擎则是由软件自行实现的，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，能够执行那些不被硬件直接支持的指令集格式。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220229989.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-01T16:22:14.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:published_time","content":"2022-05-21T16:32:26.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-01T16:22:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"执行引擎\\",\\"image\\":[\\"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220229989.png\\",\\"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220229931.png\\",\\"https://fastly.jsdelivr.net/gh/jayxiaohe/blog_img/img/202205220228498.png\\"],\\"datePublished\\":\\"2022-05-21T16:32:26.000Z\\",\\"dateModified\\":\\"2023-01-01T16:22:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://i.iyes.life\\"}]}"]]},"headers":[{"level":2,"title":"1. 执行引擎概述","slug":"_1-执行引擎概述","link":"#_1-执行引擎概述","children":[{"level":3,"title":"1.1 执行引擎的工作过程","slug":"_1-1-执行引擎的工作过程","link":"#_1-1-执行引擎的工作过程","children":[]}]},{"level":2,"title":"2. Java 代码编译和执行过程","slug":"_2-java-代码编译和执行过程","link":"#_2-java-代码编译和执行过程","children":[{"level":3,"title":"2.1 问题：什么是解释器（lnterpreter)，什么是 JIT 编译器？","slug":"_2-1-问题-什么是解释器-lnterpreter-什么是-jit-编译器","link":"#_2-1-问题-什么是解释器-lnterpreter-什么是-jit-编译器","children":[]},{"level":3,"title":"2.2 问题：为什么说 Java 是半编译半解释型语音？","slug":"_2-2-问题-为什么说-java-是半编译半解释型语音","link":"#_2-2-问题-为什么说-java-是半编译半解释型语音","children":[]}]},{"level":2,"title":"3. 解释器","slug":"_3-解释器","link":"#_3-解释器","children":[{"level":3,"title":"3.1 解释器工作机制（或工作任务）","slug":"_3-1-解释器工作机制-或工作任务","link":"#_3-1-解释器工作机制-或工作任务","children":[]},{"level":3,"title":"3.2 解释器分类","slug":"_3-2-解释器分类","link":"#_3-2-解释器分类","children":[]},{"level":3,"title":"3.3 现状","slug":"_3-3-现状","link":"#_3-3-现状","children":[]}]},{"level":2,"title":"4. JIT 编译器","slug":"_4-jit-编译器","link":"#_4-jit-编译器","children":[{"level":3,"title":"4.1 Java 代码的执行分类","slug":"_4-1-java-代码的执行分类","link":"#_4-1-java-代码的执行分类","children":[]},{"level":3,"title":"4.2 HotSpot JVM 的执行方式","slug":"_4-2-hotspot-jvm-的执行方式","link":"#_4-2-hotspot-jvm-的执行方式","children":[]},{"level":3,"title":"4.3 JIT 编译器细节","slug":"_4-3-jit-编译器细节","link":"#_4-3-jit-编译器细节","children":[]},{"level":3,"title":"4.4 如何选择？","slug":"_4-4-如何选择","link":"#_4-4-如何选择","children":[]},{"level":3,"title":"4.5 HotSpot VM 可以设置程序执行方式","slug":"_4-5-hotspot-vm-可以设置程序执行方式","link":"#_4-5-hotspot-vm-可以设置程序执行方式","children":[]},{"level":3,"title":"4.6 HotSpot VM 中 JIT分类","slug":"_4-6-hotspot-vm-中-jit分类","link":"#_4-6-hotspot-vm-中-jit分类","children":[]}]}],"git":{"createdTime":1664722755000,"updatedTime":1672590134000,"contributors":[{"name":"jayxiaohe","email":"495302067@qq.com","commits":1}]},"readingTime":{"minutes":13.64,"words":4092},"filePathRelative":"01java/40jvm/03.执行引擎.md","localizedDate":"2022年5月22日","autoDesc":true}');export{d as comp,g as data};
