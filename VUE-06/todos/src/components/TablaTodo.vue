<template>
    <div>
        {{titulo}}
        <p>{{numero}}</p>
        <div>{{arreglo}}</div>
    </div>
</template>

<script>
    export default {
        name:'TablaTodo',
        props: {
            titulo:{
                type:String,
                default:'Tabla'
            },
            numero: Number,
            arreglo: Array
        }
    }
</script>

<style lang="scss" scoped>

</style>