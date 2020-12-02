import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        getUser({ commit }) {
            axios.get('https://randomuser.me/api/')
                .then(response => {
                    commit('SET_USER', response.data.results[0]);
                });
        }
    },
    getters: {
        getUsuario: state => {
            return state.user;
        }
    }
})