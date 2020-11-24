<template>
  <div class="home">
    <h1>Personas</h1>
    <b-button variant="primary" class="float-right mb-3" to="/agregar-persona">Agregar</b-button>
    <Table :fields="campos" :items="allPersonas">
      <template slot="actions" slot-scope="{ item }">
        <b-button size="sm" variant="outline-primary" @click="onEditar(item)">
          Editar
        </b-button>
        <b-button size="sm" class="ml-2" variant="outline-danger" @click="onEditar(item)">
          Eliminar
        </b-button>
      </template>
     </Table>
    
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
        }},{key:'actions',label: 'Acciones'}
      ]
    }
  },
  methods:{
    ...mapActions(['setPersonas']),
    onEditar(item){
      console.log(item);
      this.$router.push({
         name:'Editar',
         params:{
           id: item.item.ID
         }
      });
    }
  },
  created(){
    this.setPersonas()
  },
  computed: {
    ...mapGetters(['allPersonas'])
  },
}
</script>
