import { createApp } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import App from '@/App.vue'
import useComponent from '@/composables/useComponent'

import '@/assets/tailwind.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '@/assets/base.css'

/* Registering a service worker. */
useRegisterSW({})

/* Creating a new Vue instance. */
const app = createApp(App)

/* Register all components */
app.use(useComponent)

app.mount('#app')
