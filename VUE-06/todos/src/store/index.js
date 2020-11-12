import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // datos almacenados que podemos llamar desde cualquier parte del proyecto
        todos: [],
        todo: {
            id: '',
            nombre: '',
            tipos: [],
            prioridad: '',
            horas: 0
        }
    },
    mutations: {
        SET_TODOS(state, todo) {
            state.todos.push(todo);
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        SET_TODO(state, id) {
            state.todo = state.todos.find(todo => todo.id === id);
        },
        UPDATE_TODO(state, todo) {
            state.todos = state.todos.map(t => t.id === todo.id ? todo : t);
        }

    },
    actions: {
        setTodos({ commit }, todo) { // Commit - vas a realizar algo y va a quedar hecho
            commit('SET_TODOS', todo); // La acción se va a cumplir que se va a cumplir
        },
        deleteTodo({ commit }, id) {
            commit('DELETE_TODO', id);
        },
        setTodo({ commit }, id) {
            commit('SET_TODO', id);
        },
        updateTodo({ commit }, todo) {
            commit('UPDATE_TODO', todo);
        }
    },
    getters: {
        allTodos: state => {
            return state.todos;
        },
        singleTodo: state => {
            return state.todo;
        }
    },
    modules: {}
})