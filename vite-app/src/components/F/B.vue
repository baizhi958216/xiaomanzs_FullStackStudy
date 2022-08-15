<template>
  <div>
    <!-- {{flag}} -->
    {{Flag}}
  </div>
</template>

<script setup lang="ts">
import Bus from '../Bus'
import {ref} from 'vue'
// type Prop={
//   flag:boolean
// }
// defineProps<Prop>()

// 通过Bus传递
let Flag = ref(false)
Bus.on('on-click',(flag:boolean)=>{
  Flag.value = flag
})
</script>

<style scoped>

</style>