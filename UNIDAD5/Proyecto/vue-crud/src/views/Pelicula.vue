<template>
    <div class="container">
        <h1>Películas</h1>
        <b-button to="/Agregar-pelicula" variant="primary" class="float-right mt-2 mb-3" >Agregar Pelicula</b-button>
        <Table :fields="campos" :items="getMovies">
            <template slot="actions" slot-scope="{ item }">
                <b-button size="sm" class="ml-2" variant="outline-primary" @click="onEditar(item)">
                Editar
                </b-button>
                <b-button size="sm" variant="outline-danger" @click="onEliminar(item)">
                Eliminar
                </b-button>
            </template>
        </Table>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Table from '../components/Table'
    export default {
        name: 'Pelicula',
        components:{
            Table
        },
        data(){
            return{
                campos:[
                    {key:'id',label:'Clave'},
                    {key:'titulo',label:'Titulo'},
                    {key:'director',label:'Director'},
                    {key:'anio',label:'Año'},
                    {key:'genero',label:'Genero'},
                    {key:'actions',label: 'Acciones'}
                ]
            }
        },
        methods:{
            ...mapActions(['getPeliculas','deletePelicula']),
            onEditar(item){
                this.$router.push({
                    name:'Editar',
                    params:{
                        id: item.item.id
                    }
                });
    },
    onEliminar(item) {
      console.log(item);

      this.$bvModal.msgBoxConfirm('Esta opción no se puede deshacer', {
        title: '¿Esta seguro que desea eliminar?',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Aceptar',
        cancelTitle: 'Cancelar',
        centered: true
      })
      .then(value => {
        if(value) {
          
          this.deletePelicula({
            id: item.item.id,
            onComplete: (response) => {
              this.$notify({
                type: 'success',
                title: response.data.mensaje
              })
              setTimeout(() => this.getPeliculas(), 1000)
            },
            onError: (error) => {
              this.$notify({
                type: 'error',
                title: error.response.data.mensaje
              })
            }
          });
        
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
        },
        created(){
            this.getPeliculas();
        },
        computed:{
            ...mapGetters(['getMovies'])
        }
    }
</script>

<style lang="scss" scoped>

</style>