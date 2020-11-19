import Vue from 'vue'
import App from './App.vue' // template general para la App
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App) // donde pintaremos todo lo que vamos creando
}).$mount('#app')