<template>
  <div></div>
</template>

<script setup lang="ts">
// diff算法
/* 
  1. 将新旧虚拟DOM树的根节点进行比较。
  2. 如果节点类型不同，则直接替换整个节点。
  3. 如果节点类型相同，则比较节点的key属性，如果不同，则直接替换整个节点。
  4. 如果节点类型和key都相同，则比较节点的属性和子节点。
  5. 对于属性的比较，首先比较静态属性（如class、style等），如果不同，则直接替换整个节点。
  6. 如果静态属性相同，则比较动态属性（如v-bind等），如果不同，则更新属性。
  7. 对于子节点的比较，首先比较子节点的数量，如果不同，则直接替换整个节点。
  8. 如果子节点数量相同，则比较每个子节点。Vue3采用了双指针算法来优化这一步骤，可以快速地找出需要删除、添加和移动的节点。
  采用了双指针算法来优化子节点的比较，同时还支持静态节点的缓存，可以避免不必要的计算。
  */

// 虚拟DOM
/* 
  虚拟DOM（Virtual DOM）是指一个虚拟的DOM树，它是由JavaScript对象模拟的，通过对其进行操作，最终更新真实DOM。
  AST（Abstract Syntax Tree）抽象语法树是指一个表示代码结构的树状数据结构，它描述了代码的结构和语法，可以用来执行代码、转换代码、分析代码等。
  
  在Vue中，当我们使用Vue的模板语法编写组件时，Vue会将模板编译成一个AST抽象语法树。
  编译器将模板解析成一个AST对象，然后对AST对象进行静态分析，并根据AST对象生成渲染函数。
  渲染函数会接收一个数据对象作为参数，然后根据数据对象和VNode节点的属性和方法生成VNode树。
  最后，VNode树会被用于更新视图。
  
  因此，Vue的渲染过程可以概括为以下三个步骤：
  1. 模板编译为AST抽象语法树。
  2. 根据AST对象生成渲染函数。
  3. 渲染函数根据数据对象生成VNode树，最后通过patch算法更新真实DOM。
  
  Vue 3.x 的虚拟 DOM 的源码包含在 Vue.js 的核心代码中，涉及的文件主要有：
  1. `src/core/vnode` 目录下的文件定义了虚拟节点的数据结构和相关的方法，包括 `vnode.ts` 和 `patchFlags.ts` 等。
  2. `src/core/renderer` 目录下的文件定义了虚拟 DOM 渲染器的逻辑，包括 `renderer.ts`、`componentRenderUtils.ts` 等。
  3. `src/core/instance` 目录下的文件定义了 Vue 实例的数据结构和相关的方法，包括 `component.ts`、`render.ts` 等。
  
  vnode.ts 文件定义了虚拟节点的数据结构，其代码如下：
  
  export interface VNode {
    el?: Element // 对应的真实 DOM 元素
    [key: string]: any // 其他属性
  }
  
  export interface VNodeArrayChildren extends Array<VNodeArrayChildren | VNode | string | number | boolean | null | undefined> {}
  export type VNodeChild = VNode | VNodeArrayChildren | string | number | boolean | null | undefined
  
  一个虚拟节点对象中包含了一个对应的真实 DOM 元素(el)以及其他属性。
  虚拟节点也支持嵌套子节点，通过 VNodeChild 类型来定义。
  
  patchFlags.ts 文件定义了虚拟节点的更新标记，其代码如下：
  
  export const enum PatchFlags {
    ...
    PROPS = 1 << 4, // 新的属性
    FULL_PROPS = 1 << 5, // 全部属性
    HYDRATE_EVENTS = 1 << 6, // 事件绑定
    STABLE_FRAGMENT = 1 << 8, // 稳定片段
    KEYED_FRAGMENT = 1 << 9, // 键控片段
    UNKEYED_FRAGMENT = 1 << 10, // 非键控片段
    NEED_PATCH = 1 << 12, // 需要更新
    DYNAMIC_SLOTS = 1 << 13, // 动态插槽
    ...
  }
  
  虚拟节点的更新标记用于记录虚拟节点在更新过程中需要更新的部分，例如新的属性、全部属性、事件绑定等。
  在更新虚拟节点时，通过比较前后两个虚拟节点的更新标记，可以避免不必要的 DOM 操作。 
  */

// 模板编译为AST抽象语法树。
/* 
  第一个步骤是词法分析，也称为扫描（Scanning）或者标记化（Tokenization），将代码字符串按照一定的规则分割成一个个的单词（Token），并标记出每个单词的类型。
  这个过程的目的是将代码字符串转换成一个个的 Token 流，方便后面的语法分析。
  
  具体的实现是，将代码字符串按照字符一个一个地读入，判断每个字符的类型，组成一个个的 Token。
  常见的 Token 类型有标识符、数字、运算符、分号、括号、关键字等等。
  
  有一段代码：
  let a = 1 + 2;
  
  它会被分割成以下 Token 流：
  Token(type: keyword, value: let)
  Token(type: identifier, value: a)
  Token(type: operator, value: =)
  Token(type: number, value: 1)
  Token(type: operator, value: +)
  Token(type: number, value: 2)
  Token(type: semicolon, value: ;)
  
  在这个过程中，需要注意处理注释和空格等无关紧要的字符，以免对后续的分析造成干扰。
  */

// 实现AST转换
// 假设有如下的HTML代码：
/* 
  <div id="app">
    <h1>Hello, {{ name }}!</h1>
    <p>{{ message }}</p>
  </div>
  */
// 转换为以下的AST
/* 
  {
    type: 'element',
    tag: 'div',
    attrs: { id: 'app' },
    children: [
      {
        type: 'element',
        tag: 'h1',
        attrs: {},
        children: [
          {
            type: 'text',
            content: 'Hello, '
          },
          {
            type: 'interpolation',
            content: 'name'
          },
          {
            type: 'text',
            content: '!'
          }
        ]
      },
      {
        type: 'element',
        tag: 'p',
        attrs: {},
        children: [
          {
            type: 'interpolation',
            content: 'message'
          }
        ]
      }
    ]
  }
  */
//首先将HTML代码解析成一个AST，这可以使用已有的HTML解析库如htmlparser2来完成。
/* 
  {
    type: 'tag',
    name: 'div',
    attribs: { id: 'app' },
    children: [
      {
        type: 'tag',
        name: 'h1',
        attribs: {},
        children: [
          { type: 'text', data: 'Hello, ' },
          { type: 'text', data: '{{ name }}' },
          { type: 'text', data: '!' }
        ]
      },
      {
        type: 'tag',
        name: 'p',
        attribs: {},
        children: [
          { type: 'text', data: '{{ message }}' }
        ]
      }
    ]
  }
  
  */
// 然后，遍历这个AST，并将其转换为我们期望的格式。
// 需要根据节点的类型来决定如何处理这个节点。
// 如果是一个文本节点，则将其转换为一个text类型的AST节点；
// 如果是一个插值节点，则将其转换为一个interpolation类型的AST节点；
// 如果是一个元素节点，则将其转换为一个element类型的AST节点，并递归处理其子节点。
/* 
  function transformNode(node) {
    if (node.type === 'text') {
      // 处理文本节点
      return {
        type: 'text',
        content: node.data
      }
    } else if (node.type === 'tag') {
      // 处理元素节点
      const children = node.children.map(transformNode)
      return {
        type: 'element',
        tag: node.name,
        attrs: node.attribs,
        children
      }
    } else if (node.type === 'text' && node.data.trim().startsWith('{{') && node.data.trim().endsWith('}}')) {
      // 处理插值节点
      return {
        type: 'interpolation',
        content: node.data.trim().slice(2, -2).trim()
      }
    } else {
      // 其他情况，返回空节点
      return null
    }
  }
  
  const ast = transformNode(htmlAst)
  console.log(ast)
  */

// patch函数
/* 
  `patch` 函数是 Vue3 的 Virtual DOM 算法的核心部分。
  `patch` 函数的作用是将新的 Virtual DOM 树和旧的 Virtual DOM 树进行比较，找出差异并进行最小化修改，从而达到尽可能减小操作真实 DOM 的开销的目的。
  
  在 Vue3 的实现中，`patch` 函数是基于模板编译产生的 `render` 函数执行的结果生成新的 Virtual DOM 树，并与旧的 Virtual DOM 树进行比较。
  `patch` 函数的执行过程中，会针对两个 Virtual DOM 树的每个节点进行比较，并对需要更新的节点进行更新或重绘。
  
  具体来说，`patch` 函数主要做以下几件事情：
  
  1. 对比新旧 VNode 的类型，如果类型不同，则直接替换旧的 VNode。
  2. 对比新旧 VNode 的 props，如果有不同，则更新 DOM 的属性。
  3. 对比新旧 VNode 的 children，如果有不同，则更新 DOM 的子节点。
  4. 对比新旧 VNode 的事件，如果有不同，则更新 DOM 的事件监听器。
  
  在比较完两个 VNode 后，如果有需要更新的节点，则会进行 DOM 操作来进行更新，这一部分的实现是由 Renderer 模块来负责的。
  
  需要注意的是，在 `patch` 函数中，为了减小 Virtual DOM 比较的复杂度，Vue3 使用了一些优化策略，
  比如通过 `key` 属性来减小比较的范围，通过动态绑定的响应式数据来减小需要比较的节点数等。
  这些优化策略可以使得 Virtual DOM 算法的效率得到很大的提升，从而可以更好地支持大规模的应用程序。 
  */

// 双指针算法
/* 
  用于在一个序列中查找一些特定的元素或实现一些类似的操作。
  使用两个指针来遍历一个序列，这两个指针通常被称为“快指针”和“慢指针”。快指针可以按照一定的步长移动，而慢指针则按照一个固定的步长移动。
  在具体实现中，通常会在循环内部使用两个指针来遍历一个序列。快指针负责前进，而慢指针则在某些条件下会向前移动。这些条件通常与所求的目标有关。
  
  例如，在一个已排序的数组中查找一个目标元素，我们可以使用两个指针分别指向数组的起始位置和结束位置。
  每次比较中间元素的值与目标值的大小关系，根据大小关系移动快指针或慢指针，直到找到目标元素或确定目标元素不存在。
  
  双指针算法具有时间复杂度低、空间复杂度低等优点，因此被广泛应用于各种算法问题中。 
  */
function twoSum(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    const sum = nums[left] + nums[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return []
}
</script>

<style scoped></style>
