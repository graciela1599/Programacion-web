<template>
    <div class="container">
        <h1>Agregar Película</h1>
        <b-form @submit.prevent="guardarPelicula">
            <Input  v-model="pelicula.titulo" mensajeError="El título de la pelicula es obligatorio" maxlength="120" :error="!tituloValidacion && erroresValidacion" label="Titulo de la pelicula" placeholder="Ingrese titulo de la pelicula" id="titulo" type="text"/>
            <Input  v-model="pelicula.director" mensajeError="El director de la pelicula es obligatorio" maxlength="100" :error="!directorValidacion&&erroresValidacion" label="Director de la pelicula" placeholder="Ingrese directode la pelicula" id="director" type="text"/>
            <Input  v-model="pelicula.anio" mensajeError="El año publicación de la pelicula es obligatorio"  :error="!anioValidacion&&erroresValidacion" label="Año Publicación"  id = "anio" type="number" placeholder="Ingrese año publicación"/>
            
            <div class="container mt-3">
                <label for="genero">Genero</label>
                <select class="form-control container" v-model="pelicula.genero" name="genre">
                    <option disabled selected>Seleccione un género</option>
                    <option v-for="g in generos" :key="g.id" :value="g.id">{{g.genero}}</option>    
                </select>
            </div>
            <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>

        </b-form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Input from '../components/Input'
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Agregar',
        components: {
            Input,
        },
        data(){
            return{
                pelicula:{
                    anio:'',
                    director:'',
                    genero:0,
                    titulo:''
                },
                erroresValidacion: false
            }
        },
        methods: {
            ...mapActions(['getGenero','obtenerPelicula','aggPelicula']),
            guardarPelicula(){
                if(!this.validarGenero && this.anioValidacion && this.directorValidacion &&this.tituloValidacion){
                        this.erroresValidacion = false;
                        this.aggPelicula({
                        id: this.pelicula.id,
                        params: this.pelicula,
                        onComplete: (response) => {
                                console.log(response)
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
                }else {
                    this.erroresValidacion = true
                    if(this.camposFaltantes.trim()!== "")
                        this.$notify({
                            type:'error',
                            title: 'Faltaron los siguiente(s) campo(s) por llenar: ' + this.camposFaltantes
                        })
                }
            }
        },
        created(){
            this.getGenero()
        },
        computed:{
            ...mapState(['generos']),
            validarGenero(){
                if(this.pelicula.genero===0){
                    this.$notify({
                        type:'error',
                        title: 'Seleccione un genero'
                    })
                }
                return this.pelicula.genero===0;
            },
            tituloValidacion(){
                return this.pelicula.titulo.trim() !== "" && this.pelicula.titulo != undefined;
            },
            directorValidacion(){
                return this.pelicula.director.trim() !== "" && this.pelicula.director != undefined ;
            },
            anioValidacion(){  
                return this.pelicula.anio.trim() !== "" && this.pelicula.anio != undefined ;
            },
            camposFaltantes(){
                var campos = "";
                const coma=(campos, n)=>{
                    if(campos.length > 0)
                    return campos + ", " + n ;
                    else
                    return n;
                }
                if(!this.tituloValidacion)
                    campos = coma(campos, "Titulo");
                if(!this.directorValidacion)
                    campos = coma(campos,"Director");
                if(!this.anioValidacion)
                    campos = coma(campos, "Año publicación")
                
                return campos;
            },
    
        }
    }
</script>

<style lang="scss" scoped>

</style>