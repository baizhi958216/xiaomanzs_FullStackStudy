<template>
  <div class="layout">
      <Menu></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
</script>

<!-- scoped作用在元素添加一个data-v-xxxxxxx的id选择器 -->
<style scoped lang="less">
.layout{
  display: flex;
  height: 100vh;
  overflow: hidden;
  &-right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>