<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="titulo" fecha="2020-10-28"/>
    <ListaElemento titulo="Mi inventario de frutas" :elementos="frutas"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ListaElemento from './components/ListaElementos'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ListaElemento
  },
  data(){
    return{
      titulo: 'Mis frutas',
      frutas:[
        {id: 1, nombre:'Manzana',cantidad:10},
        {id: 2, nombre: 'uva', cantidad: 14},
        {id: 3, nombre: 'Pera', cantidad: 3}
      ]
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
