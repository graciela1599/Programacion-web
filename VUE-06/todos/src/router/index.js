import Vue from 'vue'
import VueRouter from 'vue-router' // esto es documentación de vue
import Home from '../views/Home.vue'
import AgregarTodo from '../views/AgregarTodo.vue'

Vue.use(VueRouter) // Con esto digo que mi proyecto utilizará la ruta de vue

const routes = [{ // Para poner las rutas en el nav
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/AgregarTodo',
        name: 'AgregarTodo',
        component: AgregarTodo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router