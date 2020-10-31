<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TituloPrincipal Texto="Inicio"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TituloPrincipal from '../components/TituloPrincipal'
export default {
  name: 'Home',
  components: {
    TituloPrincipal
  }
}
</script>
