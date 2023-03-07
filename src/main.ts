import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TheNav from './components/TheNav.vue'
import TheButton from '@/components/UI/TheButton.vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('TheNav', TheNav)
app.component('TheButton', TheButton)
app.mount('#app')
