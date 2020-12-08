<template>
    <div class="container">
        <h1>Géneros</h1>
        <b-button variant="primary" class="float-right mb-3" to="/agregar-genero">Agregar</b-button>
        <Table :fields="campos" :items="getGenre">
            <template slot="actions" slot-scope="{ item }">
                <b-button size="sm" class="ml-2" variant="outline-danger" @click="onEliminar(item)">
                Eliminar
                </b-button>
            </template>
        </Table>

    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Table from '../components/Table'
    export default {
        name: 'Genero',
        components:{
            Table
        },
        data() {
            return {
            campos: [
                {key:'id',label:'Clave'},
                {key:'genero',label:'Genero'},
                {key:'actions',label: 'Acciones'}
             ]
            }
        },
        methods: {
            ...mapActions(['getGenero','eliminarGenero']),
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
                    
                    this.eliminarGenero({
                        id: item.item.id,
                        onComplete: (response) => {
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje
                        })
                        setTimeout(() => this.getGenero(), 1000)
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
            this.getGenero();
        },
        computed:{
            ...mapGetters(['getGenre'])
        }
    }
    
</script>

<style lang="scss" scoped>

</style>