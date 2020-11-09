<template>
    <div class="container">
       <FactsTarjeta v-for="p in facts"
                    :key="p._id"
                    :texto="p.text"
                    :id="p._id"/>
        
    </div>
    
</template>

<script>   
    import FactsTarjeta from '../components/FactsTarjeta.vue'
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'CatFacts',
        components: {
            FactsTarjeta
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapActions(['getFacts']),
            
        },
        mounted(){
            this.getFacts()
        },
        computed:{
            ...mapState(['facts'])
        }
    }
</script>

<style lang="scss" scoped>

</style>