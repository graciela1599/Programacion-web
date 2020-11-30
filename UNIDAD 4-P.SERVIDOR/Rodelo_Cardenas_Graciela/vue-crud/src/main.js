import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Notifications)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')