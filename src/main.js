import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'

import 'bootstrap'


const app = createApp(App)
    app.use(createPinia())
    app.use(store)
    app.use(router)
    app.mount('#app')