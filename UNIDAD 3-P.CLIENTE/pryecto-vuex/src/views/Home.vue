<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Mi Total es {{total}}</p>
    <button @click="accionAumentar(10)">+</button>
    <BotonDisminuir/>
    
  </div>
</template>


<script>
// @ is an alias to /src

import { mapState, mapActions } from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir.vue';
export default {
  components: {
    BotonDisminuir
  },
  data(){
    return{
      titulo:'Proyecto con vuex'
    }
  },
  methods:{
    ...mapActions(['accionAumentar'])
  },
  computed: { // MapState Siempre desde las propiedades computadas
    ...mapState(['total'])
  }
}
</script>
