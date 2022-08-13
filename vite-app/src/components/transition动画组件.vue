<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <!-- 
      transition组件 
      添加动画状态实现动画效果
      -->
    <transition name="fade">
      <div v-if="!flag" class="redbox"></div>
    </transition>
  </div>
  <div>
    <button @click="flag1 = !flag1">切换1</button>
    <!-- 
      transition组件 
      指定类名
      -->
    <transition name="fade1" enter-from-class="e-f" enter-active-class="e-a" enter-to-class="e-t">
      <div v-if="!flag1" class="redbox1"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let flag = ref(true)
let flag1 = ref(true)
</script>

<style scoped>
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
</style>