import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/plugins/router.js'
import naive from 'naive-ui/es/preset'

createApp(App)
   .use(naive)
   .use(router)
   .mount('#app')
