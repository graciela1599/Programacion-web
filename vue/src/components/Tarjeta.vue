<template>
    <div class="alert alert-primary" role="alert">
        <router-link :to="`/Peliculas/${id}`">
            {{titulo}}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Tajeta',
    props:{
        titulo:String,
        id:String // Para irme a la ruta
    }
}
</script>

<style scoped>

</style>