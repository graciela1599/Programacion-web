import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        total: 100
    }, // Mutación lo que cambie directamente nuestro state
    mutations: {
        aumentar(state, num) {
            state.total += num;
        },
        disminuir(state) {
            state.total--;
        }
    },
    actions: {
        accionAumentar({ commit }, num) {
            commit(('aumentar'), num);
        },
        accionDisminuir({ commit }) {
            commit(('disminuir'));
        }
    },
    modules: {}
})