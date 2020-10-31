<template>
    <div>
        <h1>Detalle</h1>
        <div>{{$route.params.id}}</div>
        <h2> {{peliculas.title}}</h2>
        <h5> Descripcion</h5>
        <p>{{peliculas.description}}</p>
    </div>
</template>

<script>
export default {
    name: 'DetallePelicula',
    data(){
        return{
            peliculas:[]
        }
    }, 
    methods:{
        async buscarDetalle(){
            try {
                const descripcion = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`);
                const data = await descripcion.json();
                this.peliculas = data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.buscarDetalle();
    }
}
</script>

<style lang="scss" scoped>
p{
    margin: 0 20%;
}
h5{
    display:inline-block;
    background:  #42b983;
    padding: 10px 20px;
    font-weight: 900;
    border-radius: 5px;
}
</style>