import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    fbAPIKey: "AIzaSyA0QwPM55uhp6pkzn7Di7KGKQ8Yf-V_Yhk",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    login({ commit, dispatch, state }, authData) {},
    logout({ commit, dispatch, state }) {},
  },
  getters: {},
});

export default store;
