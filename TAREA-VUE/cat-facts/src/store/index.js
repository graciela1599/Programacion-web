import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        facts: [],
        random_fact: new Object()
    },
    mutations: {
        SET_FACTS(state, facts) { // Mutaciones declaradas con set
            state.facts = facts.all;
        },
        GET_FACTS(state, r_facts) {
            state.random_fact = r_facts;

        }
    },
    getters: {
        getRandom: (state) => {
            return state.random_fact;
        }
    },
    actions: {
        getFacts({ commit }) {
            axios.get('https://cat-fact.herokuapp.com/facts')
                .then(response => {
                    commit('SET_FACTS', response.data);
                });
        },
        getFactRandom({ commit }) {
            axios.get('https://cat-fact.herokuapp.com/facts/random')
                .then(response => {
                    commit('GET_FACTS', response.data);
                });

        }
    },
    modules: {

    }
})