<template>
    <div>
        <h3>{{titulo}}</h3>
        <ul>
            
            <li v-for="(el,index) in elementos" :key="el.id">
                {{el.nombre}}  --->  {{el.cantidad}}
                <AccionElemento texto="+" @accion="aumentar(index)"/>
                <AccionElemento texto="-" @accion="disminuir(index)"/>
            </li>
        </ul>
        <div> Cantidad de frutas: {{sumarCantidad}} </div>
    </div>
</template>

<script>
import AccionElemento from './AccionElemento'
export default {
    name: 'ListaElemento',
    components:{
        AccionElemento
    },
    props:{
        titulo:{
            type:String,
            default:'Mi lista'
        },
        elementos:Array
    },
    data(){
        return{
            misElementos: this.elementos,
            total: 0
        }
    },
    methods:{
        aumentar(index){
            this.misElementos[index].cantidad++;
        },
        disminuir(index){
            this.misElementos[index].cantidad--;
        }
    },
    computed:{
        sumarCantidad (){
            var totalito = 0;
            for(let el of this.misElementos){
                totalito+= el.cantidad;
            }
          
            return totalito;
        }   
    }
}
</script>

<style>
    div ul li{
        list-style: none;
        color: gray;
    }
</style>