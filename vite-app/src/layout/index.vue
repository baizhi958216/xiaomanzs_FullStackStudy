<template>
  <div class="layout">
    <!-- 
      自定义事件  @on-sssclick @on-cccclick

      接收子组件暴露的参数  ref="menus"
    -->
    <Menu ref="menus" :data="list" title="菜单" @on-sssclick="getList" @on-cccclick="getBool"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
  
    <!-- 
      teleport 传送组件
      不受父组件样式影响, 只接受目标组件
      eg: 传送到header
       -->
    <teleport to=".header">
      <div style="background-color: cyan;">
        Loading
      </div>
    </teleport>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import { reactive,ref } from 'vue';
const list = reactive<number[]>([1, 2, 3, 4, 5])

// 接受子组件参数
const getList = (list: number,bool1:boolean) => {
  console.log(list, '====>子组件的List',bool1,'=====>子组件的bool1')
}
// 接受子组件参数
const menus=ref(null)
const getBool = (bo:boolean) => {
  console.log(bo,'=====>子组件的bool2')
  // 接收子组件暴露的参数
  console.log(menus.value);
}
</script>

<!-- scoped作用在元素添加一个data-v-xxxxxxx的id选择器 -->
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>