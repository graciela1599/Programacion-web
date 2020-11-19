<template>
  <div class="home">
    <h1>Personas</h1>
    <Table :fields="campos" :items="allPersonas" />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '../components/Table'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        {key:'ID',label:'Clave'},
        {key:'NOMBRE',label:'Nombre'},
        {key:'DIRECCION',label:'Dirección'},
        {key:'TELEFONO',label:'Telefono', formatter: value => {
          return value || '-'
        }}
      ]
    }
  },
  methods:{
    ...mapActions(['setPersonas'])
  },
  created(){
    this.setPersonas()
  },
  computed: {
    ...mapGetters(['allPersonas'])
  },
}
</script>
