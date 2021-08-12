import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

import auth from '../modules/auth';
import income from '../modules/income';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      auth,
      income
    },
    state: {},
    mutations: {
        // The only way to actually change state in a Vuex store is by committing a mutation. 
        // Vuex mutations are very similar to events: each mutation has a string type and a handler. 
        // The handler function is where we perform actual state modifications, and it will receive the state as the first argument:

        //da bi mogli da koristimo mutacije moramo ih pozvati u komponenti store.commit('doThat')

        // setUser(state, user) {
        //     state.user = user;
        // },
        // setToken(state, token) {
        // state.token = token;
        // },

        // It is best practice to always call mutations from our actions, 
        // but since our mutations can easily be traced, we are calling the mutations directly
    },
    actions: {},
    plugins: [
        createPersistedState({
          storage: {
            getItem: (key) => Cookies.get(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
              Cookies.set(key, value, { expires: 3, secure: true }),
            removeItem: (key) => Cookies.remove(key),
          },
          paths: ['auth.user'] 
        }),
      ],
    
});