import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // datos almacenados que podemos llamar desde cualquier parte del proyecto
        todos: [],
        tituloTabla: 'desde State'
    },
    mutations: {
        SET_TODO(state, todo) {
            state.todos.push(todo);
        }
    },
    actions: {
        setTodo({ commit }, todo) { // Commit - vas a realizar algo y va a quedar hecho
            commit('SET_TODO', todo); // La acción se va a cumplir que se va a cumplir
        }
    },
    getters: {
        traerTitulo: state => {
            return state.tituloTabla;
        }
    },
    modules: {}
})