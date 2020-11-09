<template>
  <div class="random">
    <h1>Mi dato Random</h1>
    <button class="boton-Info" v-on:click="getFactRandom">Obtener info</button>
          <hr>
    <TarjetaRandom :Text="getRandom.text" :Type="getRandom.type" :Status="getRandom.status.verified"/>
        
        
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TarjetaRandom from '../components/TarjetaRandom.vue'
 export default {
      name:'Random',
      components:{
        TarjetaRandom
      },
      methods:{
        ...mapActions(['getFactRandom'])
      }, 
      computed:{
        ...mapGetters(['getRandom'])
      },
      mounted(){
            this.getFactRandom()
      },
      
        
    }
</script>

<style lang="scss" scoped>
.boton-Info{
  background:#236bd5;
  color:#e5f4fb;
  border:none;
  width:120px;
  height: 45px;
}
</style>