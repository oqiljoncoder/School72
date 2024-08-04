import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vue Router 
import router from '@/plugins/router.js'

// Naive-Ui
import naive from 'naive-ui/es/preset'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
   .use(naive)
   .use(router)
   .mount('#app')
