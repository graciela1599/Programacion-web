<template>
    <div class="Home">
        <h1>Mis ToDos</h1>
        <router-link to="/AgregarTodo" class="btn btn-success float-right">Agregar</router-link>
        <TablaTodo :titulo="tituloTablin" numero="10" :arreglo="[2,3,4]"/>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import TablaTodo from '../components/TablaTodo'
    export default {
        Name: 'Home',
        components: {
            TablaTodo,
        },
        data(){
            return{
                tituloTablin:'Mi tablita bonita'
            }
        },
        computed:{
            ...mapGetters(['traerTitulo'])
        }
    }
</script>

<style lang="scss" scoped>

</style>