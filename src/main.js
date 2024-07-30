import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/plugins/router.js'
import naive from 'naive-ui/es/preset'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
   .use(naive)
   .use(router)
   .mount('#app')
