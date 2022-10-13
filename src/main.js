import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import EditPage from './pages/EditPage.vue'
import iChat from './pages/iChat.vue'
import '../public/style.css'

const routes = [
    {path: '/', component: HomePage, name: 'Home'},
    {path: '/edit', component: EditPage, name: 'Add'},
    {path: '/edit/:id', component: EditPage, name: 'Edit'},
    {path: '/ichat', component: iChat, name:'iChat'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')