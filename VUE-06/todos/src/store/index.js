import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // datos almacenados que podemos llamar desde cualquier parte del proyecto
        todos: [],
    },
    mutations: {
        SET_TODO(state, todo) {
            state.todos.push(todo);
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        }
    },
    actions: {
        setTodo({ commit }, todo) { // Commit - vas a realizar algo y va a quedar hecho
            commit('SET_TODO', todo); // La acción se va a cumplir que se va a cumplir
        },
        deleteTodo({ commit }, id) {
            commit('DELETE_TODO', id);
        }
    },
    getters: {
        allTodos: state => {
            return state.todos;
        }
    },
    modules: {}
})