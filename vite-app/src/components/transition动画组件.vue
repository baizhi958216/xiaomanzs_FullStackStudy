<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <!-- 
      transition组件 
      添加动画状态实现动画效果
      enter/leave生命周期
      -->
    <transition
      name="fade"
      @before-enter="EnterFrom"
      @enter="EnterActive"
      @after-enter="EnterTo"
      @enter-cancelled="EnterCancel"
    >
      <div v-if="!flag" class="redbox"></div>
    </transition>
  </div>

  <!-- 自定义类名 -->
  <div>
    <button @click="flag1 = !flag1">切换1</button>
    <!-- 
      transition组件 
      指定类名
      -->
    <transition
      name="fade1"
      enter-from-class="e-f"
      enter-active-class="e-a"
      enter-to-class="e-t"
    >
      <div v-if="!flag1" class="redbox1"></div>
    </transition>
  </div>

  <!-- 结合animate.css -->
  <div>
    <button @click="flag2 = !flag2">切换2</button>
    <!-- 
      transition组件 
      指定类名结合animate.css
      duration动画持续时长
      :duration="1000" 指定enter/leave均为1s
      -->
    <transition
      :duration="{ enter: 1000, leave: 1000 }"
      leave-active-class="animate__animated animate__lightSpeedOutRight"
      enter-active-class="animate__animated animate__lightSpeedInLeft"
      name="fade2"
    >
      <div v-if="!flag2" class="redbox2">你好傻孩子</div>
    </transition>
  </div>

  <!-- gsap -->
  <div>
    <button @click="flag3 = !flag3">切换3</button>
    <!-- 
      -->
    <transition
      name="fade3"
      @before-enter="Efrom"
      @enter="Eactive"
      @leave="Leave"
    >
      <div v-if="!flag3" class="redbox3"></div>
    </transition>
  </div>

  <!-- 
    appear
    仅在元素加载时触发一次
    -->
  <div>
    <button @click="flag4 = !flag4">切换4</button>
    <!-- 
      -->
    <transition
      name="fade4"
      appear
      appear-from-class="appearf"
      appear-active-class="appeara"
      appear-to-class="appeart"
    >
      <div v-if="!flag4" class="redbox4"></div>
    </transition>
  </div>

  <!-- 
    appear结合animatecss
    -->
  <div>
    <button @click="flag5 = !flag5">切换5</button>
    <transition
      name="fade5"
      appear
      appear-active-class="animate__animated animate__wobble"
    >
      <div v-if="!flag5" class="redbox5"></div>
    </transition>
  </div>

  <!-- 
    transition-group
   -->
  <div class="wraps">
    <!-- 
      tag属性可以为transition-group再套一层自定义标签
      其它与transition一样 enter-to-class... @after-enter...
     -->
    <transition-group
      leave-active-class="animate__animated animate__hinge"
      enter-active-class="animate__animated animate__bounceIn"
    >
      <div :key="i" class="wraps-item" v-for="i in listgroup">
        {{ i }}
      </div>
    </transition-group>
  </div>
  <button @click="listgroup.push(Math.max(...listgroup) + 1)">ADD</button>
  <button @click="listgroup.length > 1 ? listgroup.pop() : 0">DEL</button>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import 'animate.css'
import gsap from 'gsap'

let flag = ref(true)
let flag1 = ref(true)
let flag2 = ref(true)
let flag3 = ref(true)
let flag4 = ref(false)
let flag5 = ref(false)

const listgroup = reactive<number[]>([1, 2, 3, 4, 5, 6])

const EnterFrom = () => {
  console.log('EnterFrom动画开始')
}

const EnterActive = (el: Element, done: Function) => {
  console.log('EnterActive进入动画', el)
  setTimeout(() => {
    done()
  }, 3000)
}

const EnterTo = () => {
  console.log('EnterTo动画结束')
}

const EnterCancel = () => {
  console.log('EnterCancel动画取消')
}

// gsap动画库
// 开始
const Eactive = (el: Element, done: Function) => {
  gsap.set(el, {
    width: 0,
    height: 0,
  })
}
// 进入
const Efrom = (el: Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 300,
    height: 300,
    onComplete: done,
  })
}
// 退出
const Leave = (el: Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done,
  })
}
</script>

<style scoped lang="less">
.redbox {
  width: 300px;
  height: 300px;
  background-color: red;
}

/* 
  vue提供的默认类名为
  *-enter-from/active/to
  *-leave-from/active/to
*/

/* 进入效果 */
.fade-enter-from {
  width: 0;
  height: 0;
  transform: rotate(-360deg);
  border-radius: 50%;
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 300px;
  height: 300px;
}

/* 退出效果 */
.fade-leave-from {
  width: 300px;
  height: 300px;
  transform: rotate(360deg);
}

.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
  border-radius: 50%;
}

.redbox1 {
  width: 300px;
  height: 300px;
  background-color: red;
}

.e-f {
  width: 0;
  height: 0;
  transform: rotate(-360deg);
  border-radius: 50%;
}

.e-a {
  transition: all 1.5s ease;
}

.e-t {
  width: 300px;
  height: 300px;
}

.redbox2 {
  font-size: 100px;
}

.redbox3 {
  width: 100px;
  height: 100px;
  background-color: red;
}

/* appear */
.redbox4 {
  width: 100px;
  height: 100px;
  background-color: red;
}

.appearf {
  width: 0;
  height: 0;
}

.appeara {
  transition: all 1.5s ease;
}

.appeart {
  width: 100px;
  height: 100px;
}

.redbox5 {
  width: 100px;
  height: 100px;
  background-color: red;
}

.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;

  &-item {
    margin: 10px;
    font-size: 40px;
  }
}
</style>
