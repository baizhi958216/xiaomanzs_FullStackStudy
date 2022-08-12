<template>
  <div class="content">
    <div class="content-items" v-for="item in 100">
    <Card :content="`我是第${item}个`"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #CCC;
  overflow: auto;

  &-items {
    padding: 20px;
    border: 1px solid #CCC;
  }
}
</style>