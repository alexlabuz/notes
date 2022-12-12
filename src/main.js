import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import EditPage from './pages/EditPage.vue'
import '../public/style.css'
import { useMemoStore } from './stores/memoStore'

const routes = [
    {path: '/', component: HomePage, name: 'Home'},
    {path: '/edit', component: EditPage, name: 'Add'},
    {path: '/edit/:id', component: EditPage, name: 'Edit'},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


const app = createApp(App)

app.use(createPinia())

const memoStore = useMemoStore()
memoStore.init();

app.use(router)
app.mount('#app')