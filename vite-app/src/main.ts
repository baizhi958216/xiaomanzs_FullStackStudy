import { createApp } from 'vue'
import './assets/css/reset.less'
import App from './App.vue'
import Card from './components/Card/index.vue'
import Dialog from './components/Dialog/index.vue'
createApp(App).component('Card',Card).component('Dialog',Dialog).mount('#app')