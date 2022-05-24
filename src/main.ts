import { createApp } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import App from '@/App.vue'

/* Registering a service worker. */
useRegisterSW({})

/* Creating a new Vue instance. */
const app = createApp(App)

app.mount('#app')
