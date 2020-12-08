import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Editar from '../views/Editar.vue'
import Agregar from '../views/Agregar.vue'
import AgregarGenero from '../views/AgregarGenero.vue'
import Genero from '../views/Genero.vue'
import Pelicula from '../views/Pelicula.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/Editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/Agregar-pelicula',
        name: 'Agregar',
        component: Agregar
    },
    {
        path: '/Agregar-genero',
        name: 'AgregarGenero',
        component: AgregarGenero
    },
    {
        path: '/genero',
        name: 'Genero',
        component: Genero
    },
    {
        path: '/peliculas',
        name: 'Pelicula',
        component: Pelicula
    }
]

const router = new VueRouter({
    routes
})

export default router