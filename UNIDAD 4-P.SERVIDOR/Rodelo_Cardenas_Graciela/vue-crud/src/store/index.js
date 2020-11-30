import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        libros: []
    },
    mutations: {
        SET_LIBROS(state, libros) {
            state.libros = libros;
        }
    },
    actions: {
        setLibros({ commit }) {
            axios.get('http://localhost:3000/')
                .then(response => {
                    console.log(response)
                    commit('SET_LIBROS', response.data)
                })
        },
        agregarLibro({ commit }, { params, onComplete, onError }) {
            axios.post('http://localhost:3000/', params)
                .then(onComplete)
                .catch(onError)
            commit();
        }
    },
    getters: {
        getLibros: state => {
            return state.libros;
        }
    },
    modules: {}
})