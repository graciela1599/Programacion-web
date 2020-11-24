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
                mensajeError="El nombre es obligatorio"
                :error="!validacionNombre && erroresValidacion"
                class="mb-2"
            />
            <Input 
                v-model="persona.direccion"
                label="Direccion"
                id="direccion"
                placeholder="Ingrese direccion de la persona"
                maxlength="150"
            />
            <Input 
                v-model="persona.telefono"
                label= "Telefono"
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
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            persona: {
                nombre: '',
                direccion: '',
                telefono: ''
            },
            erroresValidacion: false
        }
    },
    computed: {
        validacionNombre() {
            return (
                this.persona.nombre !== undefined &&
                this.persona.nombre.trim() !== ''
            )    
        }
    }, 
    methods: {
        ...mapActions(['crearPersona']),
        guardarPersona() {
            if(this.validacionNombre) {
                this.erroresValidacion = false
                console.log(this.persona);
                this.crearPersona({
                    params: this.persona,
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
    }
}
</script>

<style lang="scss" scoped>

</style>