import { createStore } from "vuex";
import Home from "../pages/Home.vue";

export default createStore({
  state() {
    return {
      pages: Home,
    };
  },
  mutations: {
    SET_PAGES(state, page) {
      state.pages = page;
      console.log(state.pages);
    },
  },
  actions: {},
});
