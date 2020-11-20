<template>
    <div>
        <h1>Agregar Personas</h1>
        <b-form @submit.prevent="guardarPersona">
            <!--v-model para poder agarrar lo escrito en el input-->
            <Input 
                v-model="persona.nombre"
                label="Nombre"
                id="nombre"
                placeholder="Ingrese nombre de la persona"
            />
            <Input 
                v-model="persona.direccion"
                id="direccion"
                placeholder="Ingrese direccion de la persona"
                maxlength="150"
            />
            <Input 
                v-model="persona.telefono"
                id="telefono"
                placeholder="Ingrese telefono de la persona"
                maxlength="10"
            />
            <b-button type="submit" variant="success" class="mt-3 float-right">Guardar</b-button>
        </b-form>
    </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
    export default {
        name:'Agregar',
        components:{
            Input
        },
        data() {
            return {
                persona:{
                    nombre: '',
                    direccion: '',
                    telefono: ''
                }
            }
        },
        methods:{
            ...mapActions(['crearPersona']),
            guardarPersona(){
                console.log(this.persona);
                this.crearPersona({
                    params:this.persona,
                    onComplete: (response) =>{
                        console.log(response);
                        this.$router.push({
                            name:'Home'
                        })
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>