<template>
    <h1>{{Texto}}</h1>
</template>

<script>
    export default {
        bane:'Titulo principal',
        props:{
            Texto:String
        }
    }
</script>

<style scoped>
    h1{
        color: orange;
    }
</style>