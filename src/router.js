import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Admin from './pages/Admin.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/admin', component: Admin }
]


const router = new VueRouter({
    routes
})

export default router;