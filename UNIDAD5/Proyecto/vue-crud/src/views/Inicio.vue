<template>
  <div class="home container">
    <h1>Inicio</h1>
    <div>Filtro por género:</div>
      <div class="container">
        <select class="form-control container" @click="filtrarPorGenero()" v-model="generoS" name="genre">
         <option value="0" selected>Todos los géneros</option>
         <option v-for="g in getGenre" :key="g.id" :value="g.id">{{g.genero}}</option>
      </select>
      
    </div>
    
    <TarjetaPelicula v-for="p in getMovies" :key="p.id" 
                      :titulo="p.titulo"
                      :id="p.id"
                      :director="p.director" :anio="p.anio"
                      :genero="p.genero"
    >
      
    </TarjetaPelicula>
  </div>
</template>

<script>
import TarjetaPelicula from '../components/TarjetaPelicula'
import { mapActions, mapGetters } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Inicio',
  data(){
    return{
        generoS: 0,
        generoRepetido: 0
    }
  },
  components: {
    TarjetaPelicula
  },
  methods: {
    ...mapActions(['getGenero','getPeliculas','getPeliculasByGenero']),
    filtrarPorGenero(){
      if(this.generoRepetido !== this.generoS){
        if(this.generoS === "0"){
          this.getPeliculas();
        }else{
          this.getPeliculasByGenero(this.generoS);
        }
      }else{
        this.generoReptido = this.generoS;
      }
    }
  },
  mounted(){
    this.getGenero(),
    this.getPeliculas()

  }
  ,computed: {
    ...mapGetters(['getGenre', 'getMovies'])
  }
}
</script>

<style lang="stylus">

</style>