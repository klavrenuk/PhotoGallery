import Vue from 'vue'
import VueRouter from 'vue-router'
import Gallery from './pages/Gallery.vue'
import Admin from './pages/Admin.vue'

const routes = [
    { path: '/', component: Gallery },
    { path: '/admin', component: Admin }
]


const router = new VueRouter({
    routes
})

export default router;