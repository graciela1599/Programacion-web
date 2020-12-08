import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        generos: [],
        peliculas: [],
        pelicula: {}
    },
    mutations: {
        SET_GENEROS(state, generos) {
            state.generos = generos;
        },
        SET_PELICULAS(state, peliculas) {
            state.peliculas = peliculas;
        }
    },
    actions: {
        getGenero({ commit }) {
            axios.get('http://localhost:3000/genre')
                .then(response => {
                    console.log(response);
                    commit('SET_GENEROS', response.data);
                })
                .catch(error =>
                    console.log(error));
        },
        getPeliculas({ commit }) {
            axios.get('http://localhost:3000/peliculas')
                .then(response => {
                    console.log(response);
                    commit('SET_PELICULAS', response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getPeliculasByGenero({ commit }, id) {
            axios.get(`http://localhost:3000/peliculas/${id}`)
                .then(response => {
                    console.log(response);
                    commit('SET_PELICULAS', response.data);
                })
        },
        editarPeliculas({ commit }, { id, params, onComplete, onError }) {
            axios.put(`http://localhost:3000/peliculas/${id}`, params)
                .then(onComplete)
                .catch(onError)
        },
        obtenerPelicula({ commit }, { id, onComplete }) {
            console.log("hola", id);
            axios.get(`http://localhost:3000/pelicula/${id}`)
                .then(onComplete)
                .catch(error => {
                    console.log(error)
                });
        },
        aggPelicula({ commit }, { params, onComplete, onError }) {
            axios.post(`http://localhost:3000/peliculas`, params)
                .then(onComplete)
                .catch(onError)
        },
        deletePelicula({ commit }, { id, onComplete, onError }) {
            axios.delete(`http://localhost:3000/peliculas/${id}`)
                .then(onComplete)
                .catch(onError);
        },
        crearGenero({ commit }, { params, onComplete, onError }) {
            axios.post(`http://localhost:3000/genre`, params)
                .then(onComplete)
                .catch(onError)
        },
        eliminarGenero({ commit }, { id, onComplete, onError }) {
            axios.delete(`http://localhost:3000/genre/${id}`)
                .then(onComplete)
                .catch(onError);
        }
    },
    getters: {
        getGenre: state => {
            return state.generos;
        },
        getMovies: state => {
            return state.peliculas;
        }
    }
})