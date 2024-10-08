---
title: List
order: 10
date: 2022-03-02 00:06:53
permalink: /01java/20coll/list/
icon: wenzhang
category:
  - 学习笔记
  - Java容器
tag:
  - 基础
---
> List是一个有序的、可重复的集合，扩展`Collection`接口的接口，在`java.util`包下，提供增删改查数据的基本功能，且可以通过索引来插入替换和删除集合元素的方法。
>
> **集合的出现就是为了持有对象，集合中可以存储任意类型的对象，而且长度可变。**

## 常用的实现类

**ArrayList**

底层数据结构是数组，查询快，增删慢，线程不安全，效率高，可以存储重复元素

**LinkedList**

底层数据结构是链表，查询慢，增删快，线程不安全，效率高，可以存储重复元素

**Vector**

底层数据结构是数组，查询快，增删慢，线程安全，效率低，可以存储重复元素

## 有了数组为什么还需要List集合？

数组长度是固定的，在日常编程中可能经常不确定会有多少个对象。如果使用数组那么一旦数量超过了数组的长度就将发生异常：`java.lang.ArrayIndexOutOfBoundsException`（这个异常表示数组下标越界）。集合的出现就是为了持有对象，集合中可以存储任意类型的对象,而且长度可变。

## 数组Array和集合ArrayList的区别

**数组Array**

1. 数组在内存中是连续存储的，所以它的索引速度是非常的快，而且赋值与修改元素也很简单
2. 声明数组的时候，必须同时指明数组的长度，数组的长度过长，会造成内存浪费，数组和长度过短，会造成数据溢出的错误。

3. 数组只能存放类型一样的数据（基本类型/引用类型）

**集合List（ArrayList)**

1. 容量可动态增长；但牺牲效率
2. ArrayList内部封装了一个Object类型的数组
3. 可以将 ArrayList想象成一种“会自动扩增容量的Array”

## Arraylist 和 LinkedList 的区别?

1. **是否保证线程安全：** `ArrayList` 和 `LinkedList` 都是不同步的，也就是不保证线程安全；
2. **底层数据结构：** `Arraylist` 底层使用的是 **`Object` 数组**；`LinkedList` 底层使用的是 **双向链表** 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）
3. **插入和删除是否受元素位置的影响：**
   - `ArrayList` 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行`add(E e)`方法的时候， `ArrayList` 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（`add(int index, E element)`）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。
   - `LinkedList` 采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（`add(E e)`、`addFirst(E e)`、`addLast(E e)`、`removeFirst()` 、 `removeLast()`），近似 O(1)，如果是要在指定位置 `i` 插入和删除元素的话（`add(int index, E element)`，`remove(Object o)`） 时间复杂度近似为 O(n) ，因为需要先移动到指定位置再插入。
4. **是否支持快速随机访问：** `LinkedList` 不支持高效的随机元素访问，而 `ArrayList` 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于`get(int index)`方法)。
5. **内存空间占用：** ArrayList 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。

> **双向链表：** 包含两个指针，一个 prev 指向前一个节点，一个 next 指向后一个节点。
>
> **双向循环链表：** 最后一个节点的 next 指向 head，而 head 的 prev 指向最后一个节点，构成一个环。
>
> 参考：[看图轻松理解数据结构与算法系列(双向链表)](https://juejin.cn/post/6844903648154271757)

## ArraysList 为什么实现`RandomAccess`接口？

```java
public interface RandomAccess {
}
```

`RandomAccess`的源码如上，什么都没有定义。所以它只是一个标识。阅读接口的注释，不难发现，这个接口的实现类具有随机访问功能。注释的翻译如下（百度机翻）

::: note RandomAccess 接口的注释
列表实现所使用的标记接口，用于指示它们支持快速（通常为常数时间）随机访问。该接口的主要目的是允许通用算法在应用于随机或顺序访问列表时改变其行为，以提供良好的性能。

操作随机访问列表（如ArrayList）的最佳算法在应用于顺序访问列表（如LinkedList）时会产生二次行为。鼓励通用列表算法在应用算法之前检查给定列表是否是该接口的实例，如果将该算法应用于顺序访问列表，该算法将提供较差的性能，并在必要时改变其行为，以保证可接受的性能。

人们认识到，随机存取和顺序存取之间的区别往往是模糊的。例如，一些列表实现提供了渐近线性的访问时间，如果它们在实践中获得了巨大但恒定的访问时间。这样的列表实现通常应该实现这个接口。根据经验，如果对于类的典型实例，该循环：
for (int i=0, n=list.size(); i < n; i++)
list.get(i);

运行速度比下面这个循环快：
for (Iterator i=list.iterator(); i.hasNext(); )
    i.next();
::: 

在很多源码中，我们都能看到使用`RandomAccess`的例子。比如`Collections#binarySearch()`方法。

如果要搜索的**list实现类**实现了`RandomAccess`，则调用`indexedBinarySearch`，否则调用`iteratorBinarySearch`。在前者使用`list.get(index)`来获取元素，而后者使用`list.listIterator()`的方式来遍历获取元素。前者效率是要高一些的。

```java
public static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key) {
        if (list instanceof RandomAccess || list.size()<BINARYSEARCH_THRESHOLD)
            return Collections.indexedBinarySearch(list, key);
        else
            return Collections.iteratorBinarySearch(list, key);
}
```



## ArrayDeque 与 LinkedList 的区别

`ArrayDeque` 和 `LinkedList` 都实现了 `Deque` 接口，两者都具有队列的功能，但两者有什么区别呢？

- `ArrayDeque` 是基于可变长的数组和双指针来实现，而 `LinkedList` 则通过链表来实现。
- `ArrayDeque` 不支持存储 `NULL` 数据，但 `LinkedList` 支持。
- `ArrayDeque` 是在 JDK1.6 才被引入的，而`LinkedList` 早在 JDK1.2 时就已经存在。
- `ArrayDeque` 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 `LinkedList` 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。

从性能的角度上，选用 `ArrayDeque` 来实现队列要比 `LinkedList` 更好。此外，`ArrayDeque` 也可以用于实现栈。

## ArrayList 的扩容机制

[参考这里](https://javaguide.cn/java/collection/arraylist-source-code/#_2-arraylist-%E6%A0%B8%E5%BF%83%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB)

默认长度为10，扩容时扩一半。

## Arrays.asList()方法的作用？注意事项？

这个方法可以把数组转为list，适用于对象型数据的数组。有以下注意事项：

1. **`Arrays.asList()`是泛型方法，传递的数组必须是对象数组，而不是基本类型。**
```java
   int[] myArray = {1, 2, 3};
   List myList = Arrays.asList(myArray);
   System.out.println(myList.size());//1
   System.out.println(myList.get(0));//数组地址值
   System.out.println(myList.get(1));//报错：ArrayIndexOutOfBoundsException
   int[] array = (int[]) myList.get(0);
   System.out.println(array[0]);//1
```
当传入一个原生数据类型数组时，`Arrays.asList()` 的真正得到的参数就不是数组中的元素，而是数组对象本身！此时 `List` 的唯一元素就是这个数组，这也就解释了上面的代码。

可以使用包装类型数组就可以解决这个问题：`Integer[] myArray = {1, 2, 3};`

2. 该方法返回的`ArrayList`全限定名是`java.util.Arrays.ArrayList`。这个类继承了`AbstractList`，长度是不可改变的，也没有重写add()、remove()、clear()等方法。因此调用这些方法时会报错。

## 将数组转换为集合（List）？

1. 手动实现

    ```java
    //JDK1.5+
    static <T> List<T> arrayToList(final T[] array) {
      final List<T> l = new ArrayList<T>(array.length);

      for (final T s : array) {
        l.add(s);
      }
      return l;
    }

    Integer [] myArray = { 1, 2, 3 };
    System.out.println(arrayToList(myArray).getClass());//class java.util.ArrayList

    ```

2. 较简单的方法

   ```java
   List list = new ArrayList<>(Arrays.asList("a", "b", "c"))
   ```

   

3. 使用Java8的`stream`(推荐)
  
   ```java
   Integer [] myArray = { 1, 2, 3 };
   List myList = Arrays.stream(myArray).collect(Collectors.toList());
   //基本类型也可以实现转换（依赖boxed的装箱操作）
   int [] myArray2 = { 1, 2, 3 };
   List myList = Arrays.stream(myArray2).boxed().collect(Collectors.toList());
   ```
   
   

## 将集合（List）转换为数组？

《阿里巴巴 Java 开发手册》的描述如下：

 > **使用集合转数组的方法，必须使用集合的 `toArray(T[] array)`，传入的是类型完全一致、长度为 0 的空数组。**

`toArray(T[] array)` 方法的参数是一个泛型数组，如果 `toArray` 方法中没有传递任何参数的话返回的是 `Object`类 型数组。

```java
String [] s= new String[]{
    "dog", "lazy", "a", "over", "jumps", "fox", "brown", "quick", "A"
};
List<String> list = Arrays.asList(s);
Collections.reverse(list);
//没有指定类型的话会报错
s=list.toArray(new String[0]);

```







