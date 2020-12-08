<template>
    <div class="container">
        <b-form @submit.prevent="guardarPelicula">
            <Input v-model="pelicula.id" label="id" id="id" type="text" disabled/>
            <Input  v-model="pelicula.titulo" mensajeError="El título de la pelicula es obligatorio" :error="!tituloValidacion&&erroresValidacion" maxlength="120" label="titulo" id="titulo" type="text"/>
            <Input  v-model="pelicula.director" mensajeError="El director de la pelicula es obligatorio" :error="!directorValidacion&&erroresValidacion" maxlength="100" label="director" id="director" type="text"/>
            <Input  v-model="pelicula.anio" mensajeError="El año publicación de la pelicula es obligatorio" :error="!anioValidacion&&erroresValidacion" label="Año Publicación" id = "anio" type="number"  placeholder="Año publicación"/>
            
            <div class="container mt-3">
                <label for="genero">Genero</label>
                <select disabled class="form-control container" v-model="pelicula.genero" name="genre">
                    <option v-for="g in generos" :key="g.id" :value="g.id" selected="pelicula.genero===g.id">{{g.genero}}</option>    
                </select>
            </div>
            <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
            {{error }}
        </b-form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Input from '../components/Input'
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Editar',
        components: {
            Input,
        },
        data(){
            return{
                pelicula:{
                    anio:'',
                    director:'',
                    genero:0,
                    id:0,
                    titulo:''
                },
                erroresValidacion: false,
                error: null
            }
        },
        methods: {
            ...mapActions(['getGenero','obtenerPelicula','editarPeliculas']),
            guardarPelicula(){
                if(this.tituloValidacion && this.anioValidacion && this.directorValidacion){
                    this.erroresValidacion = false;
                    this.editarPeliculas({
                    id: this.pelicula.id,
                    params: this.pelicula,
                    onComplete: (response) => {
                            console.log("respuesta", response)
                            this.$notify({
                                type: 'success',
                                title: response.data.mensaje,
                            });
                            this.$router.push({
                                name: 'Inicio'
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
                }
            }
            // VALIDACIONES

        },
        created(){
            this.obtenerPelicula({
                id:this.$route.params.id,
                onComplete: response=>{
                    Vue.set(this, 'pelicula', response.data[0])
                }
            })
        },
        mounted(){
            this.getGenero()
        },
        computed:{
            ...mapState(['generos']),
            tituloValidacion(){
                return this.pelicula.titulo.trim() !== "" && this.pelicula.titulo != undefined;
            },
            directorValidacion(){
                return this.pelicula.director.trim() !== "" && this.pelicula.director != undefined ;
            },
            anioValidacion(){  
                return this.pelicula.anio.trim() !== "" && this.pelicula.anio != undefined ;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>