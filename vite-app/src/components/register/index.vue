<template>
  <div>
    <table>
      <tr>
        <td>帐号</td>
        <td><input v-model="form.login" type="text"></td>
      </tr>
      <tr>
        <td>密码</td>
        <td><input v-model="form.psd" type="password"></td>
      </tr>
      <tr>
        <td>验证码</td>
        <td><input v-model="form.sign" type="text"></td>
      </tr>
    </table>
    <button @click="submit">登录</button>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, reactive } from 'vue'
const form = reactive({
  login: '',
  psd: '',
  sign: ''
})
const submit = () => {
  console.log(form)
}

// keep-alive引入onActivated onDeactivated
// 只走一次onMounted, 不走onUnmounted
onMounted(() => {
  console.log('Mounted');
})

onActivated(() => {
  console.log('keep-alive onActivated');
  // 切换后清空验证码
  form.sign = ''
})

onDeactivated(() => {
  console.log('keep-alive onDeactivated');
})
</script>

<style scoped>
</style>