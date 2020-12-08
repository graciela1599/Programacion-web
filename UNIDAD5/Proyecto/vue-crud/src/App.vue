<template>
  <div  id="app">
    <div id="nav">
      <router-link class="pad" to="/">Inicio </router-link>   |
      <router-link class="pad" to="/Genero"> Generos</router-link> |
      <router-link class="pad" to="/peliculas"> Peliculas</router-link>
    </div>
    <router-view />
    <notifications position="bottom right"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}
.pad{
  padding:10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  margin-left: 5px;
  
}
</style>
