<template>
    <div class="container">
        <TituloPrincipal Texto="Peliculas"/>
        <Tarjeta v-for="p in peliculas" 
                :key="p.id" 
                :titulo="p.title" 
                :id="p.id"/>
    </div>
</template>

<script>
import TituloPrincipal from '../components/TituloPrincipal'
import Tarjeta from '../components/Tarjeta'
export default {
    name:'Peliculas',
    components:{
        TituloPrincipal,
        Tarjeta
    },
    data(){
        return{
            peliculas: []
        }
    },
    methods: {
        async consumirPeliculas(){
            try {
                const rest = await fetch('https://ghibliapi.herokuapp.com/films');
                const data = await rest.json();
                console.log(data);
                this.peliculas = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirPeliculas();
    }
}
</script>

<style>

</style>