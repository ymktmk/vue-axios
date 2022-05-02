import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
      state: {
            isLogin: false
      },
      getters: {
            isLogin: state => state.isLogin,
      },
      mutations: {
            setState(state, newState) {
                  state.isLogin = newState
            },
      },
      actions: {
            setStateAction({ commit }, newState) {
                  commit('setState', newState)
            },
      },
      plugins: [createPersistedState(
            {
                  key: 'vuex',
                  storage: window.localStorage
            }
      )]
})


export default store

