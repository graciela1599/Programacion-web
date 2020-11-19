<template>
    <div class="Home">
        <h1>Mis ToDos</h1>
        <router-link to="/AgregarTodo" class="btn btn-success float-right">Agregar</router-link>
        <TablaTodo/>
    </div>
</template>

<script>

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
        }
    }
</script>

<style lang="scss" scoped>

</style>