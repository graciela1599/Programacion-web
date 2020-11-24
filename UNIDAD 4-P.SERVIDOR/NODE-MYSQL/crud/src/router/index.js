import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agregar from '../views/Agregar.vue'
import Editar from '../views/Editar.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/agregar-persona',
    name: 'Agregar',
    component: Agregar
}, {
    path: '/:id',
    name: 'Editar',
    component: Editar
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router