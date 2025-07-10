import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const appInfo = {
  name: 'UX Elements App',
  version: '1.0.0',
  description: 'A Vue.js application showcasing UX elements.',
  author: 'Ing. Matej Boháč',
  github: 'https://github.com/Sonmess',
  avatar: 'https://avatars.githubusercontent.com/u/1026467?v=4',
}

app.provide('appInfo', appInfo);
app.mount('#app')
