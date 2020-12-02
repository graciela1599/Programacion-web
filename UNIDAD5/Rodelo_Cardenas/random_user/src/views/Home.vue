<template>
  <div class="home">
     
     <Tarjeta :email="getUsuario.email" :first="getUsuario.name.first" :last="getUsuario.name.last" :picture="getUsuario.picture.large"
     :gender="getUsuario.gender" :phone="getUsuario.phone" :cell="getUsuario.cell"/>

     <b-button variant="danger" @click="getUser">Obtener usuario random</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Tarjeta from '../components/Tarjeta'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    Tarjeta
  },
  methods:{
        ...mapActions(['getUser'])
  },
  mounted(){
        this.getUser()
  },
  computed:{
        ...mapGetters(['getUsuario'])
  },
}
</script>
<style lang="stylus">

</style>