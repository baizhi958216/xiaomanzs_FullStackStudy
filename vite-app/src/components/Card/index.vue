<template>
  <div class="card">
    <div class="card-header">
      <div>主标题</div>
      <div>副标题</div>
    </div>
    <div class="card-content" v-if="content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  content?: string
}
// defineProps<Props>()
withDefaults(defineProps<Props>(),{
  content:'None'
})
</script>

<style lang="less" scoped>
@border:#CCC;
.card{
  border: 1px solid @border;
  transition: all .3s;
  &:hover{
    box-shadow: 0 0 10px @border;
  }
  &-header{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid @border;
  }
  &-content{
    padding: 10px;
  }
}

</style>