<template>
    <div>
        <option v-for="g in generos" :key="g.id" :value="g.id">{{g.genero}}</option>    
    </div>
</template>

<script>
    export default {
        props:{
            generos:{
                id: String,
                genero: String,
            }
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>