<template>
    <div class="container">
        <h1>Agregar Género</h1>
        <b-form @submit.prevent="guardarGenero()">
            <Input v-model="genero.genero" label="Género" id="genero" type="text" :error="!validarGenero&&erroresValidacion"/>
            <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
        </b-form>
    </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
    export default {
        name:'AgregarGenero',
        components: {
            Input,
        },
        data() {
            return {
                genero: {
                    genero:''
                },
                erroresValidacion: false
            }
        },
        methods: {
            ...mapActions(['crearGenero']),
            guardarGenero(){
                if(this.validarGenero){
                    this.erroresValidacion = false;
                    this.crearGenero({
                    params: this.genero,
                    onComplete: (response) => {
                                console.log(response)
                                this.$notify({
                                    type: 'success',
                                    title: response.data.mensaje,
                                });
                                this.$router.push({
                                    name: 'Genero'
                                })
                            },
                            onError: (error) => {
                                this.$notify({
                                    type: 'error',
                                    title: error.response.data.mensaje,
                                });
                            }
                    
                    })
                }else{
                    this.erroresValidacion = true;
                    this.$notify({
                        type:'error',
                        title: 'Campo vacío'
                    })
                }
            }
        },
        computed: {
            validarGenero() {
                return this.genero.genero.trim() !== '' && this.genero.genero !== undefined; 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>