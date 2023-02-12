import { Component, createApp } from 'vue'
import routes from '~pages'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import components from './components'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

const router = createRouter({
    history: createWebHashHistory(), routes
})

const app = createApp(App)
//Add global components
for (let prop in components){
    app.component(prop, components[prop as keyof Component])
}

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')