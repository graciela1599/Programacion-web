import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        personas: []
    },
    mutations: {
        SET_PERSONAS(state, personas) {
            state.personas = personas;
        }
    },
    actions: {
        setPersonas({ commit }) {
            axios.get('http://localhost:3000/')
                .then(response => {
                    console.log(response)
                    commit('SET_PERSONAS', response.data)
                })
        },
        crearPersona({ commit }, { params, onComplete }) {
            axios.post('http://localhost:3000/', params)
                .then(onComplete)
                .catch(error => {
                    console.log(error);
                })
        },
        obtenerPersona({ commit }, { id, onComplete }) {
            axios.get(`http://localhost:3000/${id}`)
                .then(onComplete)
                .catch(error => {
                    console.log(error);
                });
        },
        editarPersona({ commit }, { id, params, onComplete }) {
            axios.put(`http://localhost:3000/${id}`, params)
                .then(onComplete)
                .catch(error => {
                    console.log(error);
                })
        },
    },
    getters: {
        allPersonas: state => { return state.personas }
    }
})