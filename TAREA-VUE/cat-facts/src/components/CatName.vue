<template>
    <h1>{{Texto}}</h1>
</template>

<script>
    export default {
        bane:'CatName',
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