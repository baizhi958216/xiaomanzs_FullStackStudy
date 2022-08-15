import { createApp } from 'vue'
import './assets/css/reset.less'
import App from './App.vue'
import Card from './components/Card/index.vue'
import Dialog from './components/Dialog/index.vue'
import mitt from 'mitt'

const Mit = mitt()

const app = createApp(App)

declare module 'vue'{
  export interface ComponentCustomProperties{
    $Bus:typeof Mit
  }
}

app.config.globalProperties.$Bus = Mit
app.component('Card',Card).component('Dialog',Dialog).mount('#app')