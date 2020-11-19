<template>
    <button @click="accion">{{texto}}</button>
</template>

<script>
    export default {
        name:'AccionElemento',
        props:{
            texto:String
        },
        methods:{
            accion(){
                this.$emit('accion')
            }
        }
    }
</script>

<style>
    button{
        margin-left: 15px;
        font-weight: 900;
    }
</style>