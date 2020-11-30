<template>
    <div>
        <h1>Agregar Libro</h1>
        <b-form @submit.prevent="agregaLibro">
            <Input 
                v-model="libro.titulo"
                label="Titulo"
                id="titulo"
                placeholder="Ingrese titulo del libro"
                mensajeError="El titulo es obligatorio"
                :error="!validarTitulo && erroresValidacion"
                maxlength="80"
                class="mb-2"
            />
            <Input 
                v-model="libro.autor"
                label="Autor"
                id="autor"
                placeholder="Ingrese autor del libro"
                mensajeError="El autor es obligatorio"
                :error="!validarAutor && erroresValidacion"
                maxlength="100"
                class="mb-2"
            />
            <Input 
                v-model="libro.numpags"
                label="Número Paginas"
                id="numpags"
                placeholder="Ingrese numero de paginas del libro"
                type="number"
                class="mb-2"
                mensajeError="Numero menor o igual a cuatro digitos"
                :error="!validarNumPags"
            />
            <Input 
                v-model="libro.aniopub"
                label="Año publicación"
                id="aniopub"
                placeholder="Ingrese año de publicación del libro"
                type="number"
                class="mb-2"
            />
            <b-button type="submit" variant="success" class="mt-3 float-right">Guardar</b-button>
        </b-form>
    </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
    export default {
        name: 'Agregar',
        components: {
            Input,
        },
        data() {
            return {
                libro: {
                    titulo: '',
                    autor: '',
                    numpags: '',
                    aniopub: ''
                },
                erroresValidacion: false
            }
        },
        computed: {
            validarTitulo() {
                return (
                    this.libro.titulo !== undefined &&
                    this.libro.titulo.trim() !== ''
                )    
            },
            validarAutor() {
                return (
                    this.libro.autor !== undefined &&
                    this.libro.autor.trim() !== ''
                )    
            },
            validarNumPags(){
                return(
                    this.libro.numpags.length < 4 && this.libro.numpags.length >= 0
                )
            },
            validarLTitulo(){
                return(
                    this.libro.titulo.length <= 80 && this.libro.titulo.length >= 0
                )
            },
            validarLAutor(){
                return(
                    this.libro.autor.length <= 100 && this.libro.autor.length >= 0
                )
            }
        }, 
        methods: {
            ...mapActions(['agregarLibro']),
            agregaLibro() {
                if(this.validarTitulo && this.validarAutor)  {
                    this.erroresValidacion = false
                    console.log(this.libro);
                    this.agregarLibro({
                        params: this.libro,
                        onComplete: (response) => {
                            console.log(response)
                            this.$notify({
                                type: 'success',
                                title: response.data.mensaje,
                            });
                            this.$router.push({
                                name: 'Home'
                            })
                        },
                        onError: (error) => {
                            this.$notify({
                                type: 'error',
                                title: error.response.data.mensaje,
                            });
                        }
                    })
                } else {
                    this.erroresValidacion = true
                    
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>