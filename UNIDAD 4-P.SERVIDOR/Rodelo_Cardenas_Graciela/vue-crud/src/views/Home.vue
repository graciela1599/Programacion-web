<template>
  <div class="home">
    <b-button variant="primary" class="float-right mb-3" to="/agregar">Agregar</b-button>
    <Table :fields="campos" :items="getLibros"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Table from '../components/Table'
import { mapGetters , mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        {key:'id',label:'Clave'},
        {key:'titulo',label:'Titulo'},
        {key:'autor',label:'Autor'},
        {key:'numpags',label:'Numero de páginas', formatter: value => {
          return value || '-'
        }},
        {key:'aniopub',label:'Año publicación', formatter: value => {
          return value || '-'
        }}
      ]
    }
  },
  methods: {
    ...mapActions(['setLibros'])
  },
  created(){
    this.setLibros()
  },
  computed: {
    ...mapGetters(['getLibros'])
  },
}
</script>
