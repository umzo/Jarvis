const state = {
  main: 1,
};

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main -= 1;
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main += 1;
  },
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    console.log('testhoge');
    commit('INCREMENT_MAIN_COUNTER');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
