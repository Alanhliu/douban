import Vue from 'vue'
import Vuex from 'vuex'
import {HIDE_LOADING, SHOW_LOADING} from './type'

Vue.use(Vuex)

const state = {
  loading: false
}

const getters = {

}

const mutations = {
  [SHOW_LOADING] (state) {
    state.loading = true
  },
  [HIDE_LOADING] (state) {
    state.loading = false
  }
}

const actions = {
  hideLoading: ({commit}) => {
    commit(HIDE_LOADING)
  },
  showLoading: ({commit}) => {
    commit(SHOW_LOADING)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
